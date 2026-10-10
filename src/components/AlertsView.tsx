import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';
import { ChangeAlert } from '../types/tcas';
import { EnrichedAdmissionProject } from '../utils/tcasHelpers';

interface AlertsViewProps {
  alerts: ChangeAlert[];
  allProjects: EnrichedAdmissionProject[];
  onOpenDetail: (project: EnrichedAdmissionProject) => void;
  onSimulateChange: () => void;
}

export const AlertsView: React.FC<AlertsViewProps> = ({
  alerts,
  allProjects,
  onOpenDetail,
  onSimulateChange,
}) => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Compact title bar */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            แจ้งเตือน ({alerts.length})
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            ประกาศเลื่อนวันหรือเปลี่ยนเกณฑ์จากมหาวิทยาลัย
          </p>
        </div>
        <button
          onClick={onSimulateChange}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-all shadow-xs cursor-pointer shrink-0"
        >
          <RefreshCw className="h-4 w-4" />
          <span className="hidden sm:inline">จำลองการเลื่อนวัน</span>
          <span className="sm:hidden">จำลอง</span>
        </button>
      </div>

      {alerts.length === 0 ? (
        <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">ตรงกับประกาศทางการล่าสุดทุกสาขา</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">ยังไม่มีการแก้ไขกำหนดการ</p>
        </div>
      ) : (
        <div className="space-y-3">
          {alerts.map((alert) => {
            const project = allProjects.find((p) => p.project.id === alert.projectId);
            return (
              <div
                key={alert.id}
                className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{alert.title}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 shrink-0 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg whitespace-nowrap">
                    {alert.detectedAt}
                  </span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white">{alert.universityAbbr}</span>
                  {' · '}
                  {alert.programName} · {alert.roundName}
                </div>

                {/* Compact diff: one line */}
                <div className="flex flex-wrap items-center gap-2 text-sm p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="line-through font-mono text-rose-600 font-semibold">{alert.previousValue}</span>
                  <span className="font-bold text-slate-400">→</span>
                  <span className="font-mono text-emerald-700 dark:text-emerald-300 font-bold">{alert.newValue}</span>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="text-slate-500 dark:text-slate-400 text-xs truncate">
                    {alert.sourceName}
                  </span>
                  <div className="flex items-center gap-3 shrink-0">
                    {project && (
                      <button
                        onClick={() => onOpenDetail(project)}
                        className="font-bold text-blue-600 hover:text-blue-800 dark:text-blue-300 underline cursor-pointer"
                      >
                        ดูสาขานี้ →
                      </button>
                    )}
                    <a
                      href={alert.sourceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 inline-flex items-center gap-1"
                    >
                      <span>ประกาศทางการ</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
