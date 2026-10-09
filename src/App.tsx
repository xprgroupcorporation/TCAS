/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header, ActiveTab } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { ExploreProgramsView } from './components/ExploreProgramsView';
import { CalendarView } from './components/CalendarView';
import { TimelineView } from './components/TimelineView';
import { ChecklistView } from './components/ChecklistView';
import { AlertsView } from './components/AlertsView';
import { IngestSchemaView } from './components/IngestSchemaView';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { SourceProvenanceModal } from './components/SourceProvenanceModal';
import {
  getAllEnrichedProjects,
  EnrichedAdmissionProject,
  generateTasksForProject,
} from './utils/tcasHelpers';
import { UserTask, ChangeAlert } from './types/tcas';
import { INITIAL_CHANGE_ALERTS } from './data/tcasDatabase';

const STORAGE_KEY_TRACKED = 'tcas_tracked_ids_v1';
const STORAGE_KEY_TASKS = 'tcas_tasks_v1';
const STORAGE_KEY_ALERTS = 'tcas_alerts_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [selectedDetailProject, setSelectedDetailProject] =
    useState<EnrichedAdmissionProject | null>(null);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState<boolean>(false);

  // All enriched programs from the 5 universities
  const allProjects = useMemo(() => getAllEnrichedProjects(), []);

  // Tracked projects IDs (cleared initially as requested, ready for user onboarding 0/3)
  const [trackedIds, setTrackedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TRACKED);
      if (saved) {
        const parsed = JSON.parse(saved);
        // If old seed with legacy IDs was stored, start fresh with empty
        if (Array.isArray(parsed) && parsed.length > 0 && !parsed.includes('proj-cmu-med-port')) {
          localStorage.removeItem(STORAGE_KEY_TRACKED);
          localStorage.removeItem(STORAGE_KEY_TASKS);
          return new Set<string>();
        }
        return new Set(parsed);
      }
    } catch {
      // fallback
    }
    return new Set<string>();
  });

  // User tasks
  const [tasks, setTasks] = useState<UserTask[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TASKS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [];
  });

  // Change Alerts
  const [changeAlerts, setChangeAlerts] = useState<ChangeAlert[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ALERTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_CHANGE_ALERTS;
  });

  // Sync tracked IDs to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TRACKED, JSON.stringify([...trackedIds]));
    } catch (e) {
      console.error('Failed to save tracked IDs', e);
    }
  }, [trackedIds]);

  // Sync tasks to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks));
    } catch (e) {
      console.error('Failed to save tasks', e);
    }
  }, [tasks]);

  // Sync alerts to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ALERTS, JSON.stringify(changeAlerts));
    } catch (e) {
      console.error('Failed to save alerts', e);
    }
  }, [changeAlerts]);

  // Tracked projects enriched
  const trackedProjects = useMemo(() => {
    return allProjects.filter((p) => trackedIds.has(p.project.id));
  }, [allProjects, trackedIds]);

  // Toggle tracking of a program
  const handleToggleTrack = (projectId: string) => {
    const updated = new Set(trackedIds);
    if (updated.has(projectId)) {
      updated.delete(projectId);
      setTrackedIds(updated);
      // Clean up auto-generated tasks for this program
      setTasks((prev) => prev.filter((t) => t.projectId !== projectId));
    } else {
      updated.add(projectId);
      setTrackedIds(updated);
      // Auto-generate actionable tasks for the newly tracked program
      const targetProject = allProjects.find((p) => p.project.id === projectId);
      if (targetProject) {
        const newTasks = generateTasksForProject(targetProject.project);
        setTasks((prev) => [...prev, ...newTasks]);
      }
    }
  };

  // Toggle completion of a task
  const handleToggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  // Add custom task
  const handleAddTask = (newTask: Omit<UserTask, 'id' | 'isCompleted'>) => {
    const created: UserTask = {
      ...newTask,
      id: `task-custom-${Date.now()}`,
      isCompleted: false,
    };
    setTasks((prev) => [created, ...prev]);
  };

  // Delete task
  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  // Simulate a change detection event
  const handleSimulateChange = () => {
    const newAlert: ChangeAlert = {
      id: `alert-sim-${Date.now()}`,
      projectId: 'proj-cmu-game-port',
      universityAbbr: 'มช. (CMU)',
      programName: 'ดิจิทัลเกมและสื่ออินเทอร์แอคทีฟ (CAMT)',
      roundName: 'TCAS รอบ 1 Portfolio',
      changeType: 'interview_date_shifted',
      title: 'เลื่อนวันสอบสัมภาษณ์เป็น 5 ธ.ค. 2569',
      previousValue: '2 ธันวาคม 2569',
      newValue: '5 ธันวาคม 2569',
      sourceName: 'ประกาศสำนักทะเบียนและประมวลผล มหาวิทยาลัยเชียงใหม่',
      sourceUrl: 'https://admission.reg.cmu.ac.th',
      detectedAt: 'เมื่อสักครู่',
    };
    setChangeAlerts((prev) => [newAlert, ...prev]);
  };

  const pendingTasksCount = tasks.filter((t) => !t.isCompleted).length;

  // Navigate to Dashboard and scroll to the tracked programs section
  const handleNavigateToTracked = () => {
    setActiveTab('dashboard');
    setTimeout(() => {
      const el = document.getElementById('tracked-programs-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-2', 'ring-blue-500', 'ring-offset-4', 'bg-blue-50/50');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-4', 'bg-blue-50/50');
        }, 2200);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col text-neutral-900">
      {/* Top Navigation Bar adhering to the Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        trackedCount={trackedProjects.length}
        unreadAlertsCount={changeAlerts.length}
        pendingTasksCount={pendingTasksCount}
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
        onNavigateToTracked={handleNavigateToTracked}
      />

      {/* Main Workspace Viewport */}
      <main
        className={`flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 ${
          activeTab === 'calendar' ? 'py-2 sm:py-2.5' : 'py-6'
        }`}
      >
        {activeTab === 'dashboard' && (
          <DashboardView
            trackedProjects={trackedProjects}
            allProjects={allProjects}
            tasks={tasks}
            changeAlerts={changeAlerts}
            onToggleTask={handleToggleTask}
            onOpenDetail={(p) => setSelectedDetailProject(p)}
            onNavigateTab={setActiveTab}
            onUntrack={handleToggleTrack}
            onOpenSourceModal={() => setIsSourceModalOpen(true)}
          />
        )}

        {activeTab === 'explore' && (
          <ExploreProgramsView
            projects={allProjects}
            trackedIds={trackedIds}
            onToggleTrack={handleToggleTrack}
            onOpenDetail={(p) => setSelectedDetailProject(p)}
          />
        )}

        {(activeTab === 'calendar' || activeTab === 'timeline') && (
          <CalendarView
            allProjects={allProjects}
            trackedIds={trackedIds}
            tasks={tasks}
            onOpenDetail={(p) => setSelectedDetailProject(p)}
            onToggleTrack={handleToggleTrack}
            onOpenSourceModal={() => setIsSourceModalOpen(true)}
            onToggleTask={handleToggleTask}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            initialSubView={activeTab === 'timeline' ? 'timeline' : 'all'}
          />
        )}

        {activeTab === 'checklist' && (
          <ChecklistView
            tasks={tasks}
            trackedProjects={trackedProjects}
            onToggleTask={handleToggleTask}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onOpenDetail={(p) => setSelectedDetailProject(p)}
          />
        )}

        {activeTab === 'alerts' && (
          <AlertsView
            alerts={changeAlerts}
            allProjects={allProjects}
            onOpenDetail={(p) => setSelectedDetailProject(p)}
            onSimulateChange={handleSimulateChange}
          />
        )}

        {activeTab === 'ingest' && <IngestSchemaView />}
      </main>

      {/* Program Detail Breakdown Modal */}
      <ProgramDetailModal
        enrichedProject={selectedDetailProject}
        onClose={() => setSelectedDetailProject(null)}
        isTracked={
          selectedDetailProject
            ? trackedIds.has(selectedDetailProject.project.id)
            : false
        }
        onToggleTrack={handleToggleTrack}
      />

      {/* Official Data Source & Auto-Fetch Explainer Modal */}
      <SourceProvenanceModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
        onSimulateChange={handleSimulateChange}
      />
    </div>
  );
}
