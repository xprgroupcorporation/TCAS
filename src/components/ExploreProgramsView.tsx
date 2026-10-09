import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
  X,
  GraduationCap,
  Sparkles,
  Building2,
  BookOpen,
  Layers,
  Calendar,
  Check,
  ChevronDown,
} from 'lucide-react';
import {
  EnrichedAdmissionProject,
  formatDateThai,
  getDaysCountdownThai,
  getUniversityThaiAbbr,
  getRoundLabel,
  getFieldCategoryLabel,
  getUniversityTheme,
} from '../utils/tcasHelpers';
import { UNIVERSITIES, FACULTIES } from '../data/tcasDatabase';

interface ExploreProgramsViewProps {
  projects: EnrichedAdmissionProject[];
  trackedIds: Set<string>;
  onToggleTrack: (projectId: string) => void;
  onOpenDetail: (project: EnrichedAdmissionProject) => void;
}

export const ExploreProgramsView: React.FC<ExploreProgramsViewProps> = ({
  projects,
  trackedIds,
  onToggleTrack,
  onOpenDetail,
}) => {
  // Filter States - Cascading Finder like admission.reg.cmu.ac.th/tcas/findfaculty.php
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUni, setSelectedUni] = useState<string>('all'); // Show all 100+ ready to explore
  const [selectedRound, setSelectedRound] = useState<string>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grid');

  // Dynamically compute available faculties based on selected university
  const availableFaculties = useMemo(() => {
    if (selectedUni === 'all') {
      return FACULTIES;
    }
    return FACULTIES.filter((f) => f.universityId === selectedUni);
  }, [selectedUni]);

  // Dynamically compute available branches based on selected faculty & university
  const availableBranches = useMemo(() => {
    let pool = projects;
    if (selectedUni !== 'all') {
      pool = pool.filter((p) => p.university.id === selectedUni);
    }
    if (selectedFaculty !== 'all') {
      pool = pool.filter((p) => p.faculty.id === selectedFaculty);
    }
    const branchMap = new Map<string, string>();
    pool.forEach((p) => {
      branchMap.set(p.branch.id, p.branch.nameTh);
    });
    return Array.from(branchMap.entries()).map(([id, nameTh]) => ({ id, nameTh }));
  }, [projects, selectedUni, selectedFaculty]);

  // Handle university change: reset faculty and branch if they don't belong to the new uni
  const handleUniversityChange = (newUniId: string) => {
    setSelectedUni(newUniId);
    setSelectedFaculty('all');
    setSelectedBranch('all');
  };

  // Handle faculty change: reset branch
  const handleFacultyChange = (newFacId: string) => {
    setSelectedFaculty(newFacId);
    setSelectedBranch('all');
  };

  // Filter computation
  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      // 1. Text Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchUni =
          item.university.nameEn.toLowerCase().includes(q) ||
          item.university.nameTh.toLowerCase().includes(q) ||
          item.university.abbr.toLowerCase().includes(q) ||
          getUniversityThaiAbbr(item.university.id).toLowerCase().includes(q);
        const matchFac =
          item.faculty.nameEn.toLowerCase().includes(q) ||
          item.faculty.nameTh.toLowerCase().includes(q);
        const matchProg =
          item.program.nameEn.toLowerCase().includes(q) ||
          item.program.nameTh.toLowerCase().includes(q);
        const matchBranch =
          item.branch.nameEn.toLowerCase().includes(q) ||
          item.branch.nameTh.toLowerCase().includes(q);
        const matchProject =
          item.project.projectNameEn.toLowerCase().includes(q) ||
          item.project.projectNameTh.toLowerCase().includes(q);
        const matchCode =
          item.project.tcasProgramCode?.toLowerCase().includes(q);

        if (!matchUni && !matchFac && !matchProg && !matchBranch && !matchProject && !matchCode) {
          return false;
        }
      }

      // 2. University Filter
      if (selectedUni !== 'all' && item.university.id !== selectedUni) {
        return false;
      }

      // 3. Round Filter
      if (selectedRound !== 'all' && item.project.round !== selectedRound) {
        return false;
      }

      // 4. Faculty Filter
      if (selectedFaculty !== 'all' && item.faculty.id !== selectedFaculty) {
        return false;
      }

      // 5. Branch Filter
      if (selectedBranch !== 'all' && item.branch.id !== selectedBranch) {
        return false;
      }

      // 6. Study Track Filter
      if (selectedTrack !== 'all') {
        const trackStr = item.project.studyTrack || '';
        if (selectedTrack === 'sci-math' && !trackStr.includes('วิทย์-คณิต') && !trackStr.includes('ทุกแผนการเรียน')) {
          return false;
        }
        if (selectedTrack === 'arts-math' && !trackStr.includes('ศิลป์-คำนวณ') && !trackStr.includes('ทุกแผนการเรียน')) {
          return false;
        }
        if (selectedTrack === 'all-track' && !trackStr.includes('ทุกแผนการเรียน')) {
          return false;
        }
      }

      return true;
    });
  }, [
    projects,
    searchQuery,
    selectedUni,
    selectedRound,
    selectedFaculty,
    selectedBranch,
    selectedTrack,
  ]);

  // Group by Faculty for Grouped Mode (like admission.reg.cmu.ac.th/tcas/findfaculty.php)
  const groupedByFaculty = useMemo(() => {
    const map = new Map<string, { faculty: any; university: any; projects: EnrichedAdmissionProject[] }>();
    filteredProjects.forEach((item) => {
      const facId = item.faculty.id;
      if (!map.has(facId)) {
        map.set(facId, {
          faculty: item.faculty,
          university: item.university,
          projects: [],
        });
      }
      map.get(facId)!.projects.push(item);
    });
    return Array.from(map.values());
  }, [filteredProjects]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedUni('all');
    setSelectedRound('all');
    setSelectedFaculty('all');
    setSelectedBranch('all');
    setSelectedTrack('all');
  };

  const selectedUniInfo = UNIVERSITIES.find((u) => u.id === selectedUni);

  return (
    <div className="space-y-6">
      {/* Top Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              ค้นหาหลักสูตร สาขาวิชา และโครงการรับสมัคร (myTCAS)
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-100 text-purple-800 border border-purple-200">
              ระบบสืบค้นหลักสูตร มช. & myTCAS
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เลือกมหาวิทยาลัย คณะ และสาขาวิชาเพื่อดูจำนวนรับ เกณฑ์คะแนนขั้นต่ำ (GPAX) และเงื่อนไขเพิ่มเติมเฉพาะโครงการ
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">สาขาที่บันทึกไว้:</span>
          <span className="font-bold font-mono px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg">
            {trackedIds.size} สาขา
          </span>
        </div>
      </div>

      {/* Step 1: Quick University Selector Bar (แถบเลือกมหาวิทยาลัยด่วน) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-4 w-4 text-purple-600" />
            <span>ขั้นตอนที่ 1: เลือกมหาวิทยาลัย (Select University)</span>
          </div>
          {selectedUni !== 'all' && (
            <button
              onClick={() => handleUniversityChange('all')}
              className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              ดูทุกมหาวิทยาลัย
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => handleUniversityChange('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer border ${
              selectedUni === 'all'
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            ทุกมหาวิทยาลัย ({projects.length})
          </button>

          {UNIVERSITIES.map((uni) => {
            const isSelected = selectedUni === uni.id;
            const count = projects.filter((p) => p.university.id === uni.id).length;
            const isCMU = uni.id === 'cmu';

            return (
              <button
                key={uni.id}
                onClick={() => handleUniversityChange(uni.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-purple-700 text-white border-purple-700 shadow-sm ring-2 ring-purple-200'
                    : isCMU
                    ? 'bg-purple-50 text-purple-900 border-purple-200 hover:bg-purple-100'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{uni.nameTh}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isSelected
                      ? 'bg-purple-900/60 text-white'
                      : isCMU
                      ? 'bg-purple-200 text-purple-900 font-bold'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
                {isCMU && !isSelected && (
                  <span className="text-[10px] text-purple-700 font-extrabold ml-0.5">★ ตัวอย่าง</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cascading Filter & Search Panel (โมเดลเหมือน admission.reg.cmu.ac.th/tcas/findfaculty.php) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        {/* Keyword Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาชื่อคณะ, สาขาวิชา, รหัสหลักสูตร, โครงการรับสมัคร (เช่น แพทย์, วิศวะคอม, ปัญญาประดิษฐ์, นิติศาสตร์, บัญชี, DSI, หุ่นยนต์)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Cascading Dropdowns: ขั้นตอนที่ 2 -> 3 -> 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
          {/* 1. Admission Round (รอบรับสมัคร) */}
          <div className="space-y-1">
            <label className="text-slate-600 font-bold block flex items-center gap-1">
              <span>รอบการรับสมัคร (TCAS Round)</span>
            </label>
            <select
              value={selectedRound}
              onChange={(e) => setSelectedRound(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium cursor-pointer focus:ring-2 focus:ring-purple-400"
            >
              <option value="all">ทุกรอบรับสมัคร</option>
              <option value="TCAS1_PORTFOLIO">รอบที่ 1 แฟ้มสะสมผลงาน (Portfolio)</option>
              <option value="TCAS2_QUOTA">รอบที่ 2 โควตา (Quota / โควตาภาคเหนือ)</option>
              <option value="TCAS3_ADMISSION">รอบที่ 3 แอดมิชชัน (Admission)</option>
              <option value="TCAS4_DIRECT">รอบที่ 4 รับตรงอิสระ (Direct Admission)</option>
            </select>
          </div>

          {/* 2. Faculty (เลือกคณะ - กรองตามมหาวิทยาลัยที่เลือก) */}
          <div className="space-y-1">
            <label className="text-slate-600 font-bold block flex items-center justify-between">
              <span>เลือกคณะ (Faculty)</span>
              <span className="text-[10px] text-purple-700 font-mono">
                {availableFaculties.length} คณะ
              </span>
            </label>
            <select
              value={selectedFaculty}
              onChange={(e) => handleFacultyChange(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium cursor-pointer focus:ring-2 focus:ring-purple-400"
            >
              <option value="all">ทุกคณะ ({availableFaculties.length} คณะ)</option>
              {availableFaculties.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.nameTh}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Branch / Major (เลือกสาขาวิชา - กรองตามคณะที่เลือก) */}
          <div className="space-y-1">
            <label className="text-slate-600 font-bold block flex items-center justify-between">
              <span>เลือกสาขาวิชา / หลักสูตร</span>
              <span className="text-[10px] text-purple-700 font-mono">
                {availableBranches.length} สาขา
              </span>
            </label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium cursor-pointer focus:ring-2 focus:ring-purple-400"
            >
              <option value="all">ทุกสาขาวิชา ({availableBranches.length} สาขา)</option>
              {availableBranches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.nameTh}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Eligible Track (แผนการเรียนที่รับสมัคร) */}
          <div className="space-y-1">
            <label className="text-slate-600 font-bold block">
              <span>แผนการเรียนผู้สมัคร (Study Track)</span>
            </label>
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium cursor-pointer focus:ring-2 focus:ring-purple-400"
            >
              <option value="all">ทุกแผนการเรียน</option>
              <option value="sci-math">วิทยาศาสตร์-คณิตศาสตร์</option>
              <option value="arts-math">ศิลป์-คำนวณ</option>
              <option value="all-track">รับทุกแผนการเรียน / ปวช. / GED</option>
            </select>
          </div>
        </div>

        {/* Filter Reset & Active Tag Bar */}
        {(selectedUni !== 'all' ||
          selectedRound !== 'all' ||
          selectedFaculty !== 'all' ||
          selectedBranch !== 'all' ||
          selectedTrack !== 'all' ||
          searchQuery) && (
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 text-slate-600">
              <span className="font-semibold text-slate-500">ตัวกรองปัจจุบัน:</span>
              {selectedUni !== 'all' && (
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-md font-medium">
                  {selectedUniInfo?.nameTh || selectedUni}
                </span>
              )}
              {selectedRound !== 'all' && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-medium">
                  {getRoundLabel(selectedRound).short}
                </span>
              )}
              {selectedFaculty !== 'all' && (
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md font-medium">
                  {FACULTIES.find((f) => f.id === selectedFaculty)?.nameTh}
                </span>
              )}
              {selectedBranch !== 'all' && (
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md font-medium">
                  {availableBranches.find((b) => b.id === selectedBranch)?.nameTh}
                </span>
              )}
              {selectedTrack !== 'all' && (
                <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded-md font-medium">
                  แผน: {selectedTrack}
                </span>
              )}
            </div>

            <button
              onClick={clearFilters}
              className="text-xs text-rose-600 hover:text-rose-800 font-bold cursor-pointer inline-flex items-center gap-1"
            >
              <X className="h-3.5 w-3.5" />
              <span>ล้างตัวกรองทั้งหมด</span>
            </button>
          </div>
        )}
      </div>

      {/* Results Header Bar with View Mode Toggle */}
      <div className="flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span>
            พบ <span className="font-bold text-slate-900 font-mono text-sm">{filteredProjects.length}</span> หลักสูตร/สาขาวิชาที่เปิดรับสมัคร
          </span>
          {selectedUni !== 'all' && selectedUniInfo && (
            <span className="text-slate-400">
              ของ {selectedUniInfo.nameTh}
            </span>
          )}
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            มุมมองการ์ด (Grid)
          </button>
          <button
            onClick={() => setViewMode('grouped')}
            className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
              viewMode === 'grouped'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            จัดกลุ่มตามคณะ (Faculty View)
          </button>
        </div>
      </div>

      {/* Programs List Rendering */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl space-y-3">
          <BookOpen className="h-10 w-10 text-slate-300 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">
            ไม่พบสาขาวิชาหรือโครงการที่ตรงกับเงื่อนไขการค้นหา
          </p>
          <p className="text-xs text-slate-500">
            ลองปรับเปลี่ยนคำค้นหา หรือคลิกปุ่มล้างตัวกรองเพื่อดูสาขาทั้งหมด
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-xs font-semibold bg-purple-600 text-white rounded-xl cursor-pointer hover:bg-purple-700 shadow-xs"
          >
            ล้างตัวกรองทั้งหมด
          </button>
        </div>
      ) : viewMode === 'grouped' ? (
        /* Grouped by Faculty View (สไตล์ admission.reg.cmu.ac.th/tcas/findfaculty.php) */
        <div className="space-y-6">
          {groupedByFaculty.map((group) => {
            const uniTheme = getUniversityTheme(group.university.id);
            const uniThai = getUniversityThaiAbbr(group.university.id);

            return (
              <div
                key={group.faculty.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs"
              >
                {/* Faculty Banner Header */}
                <div className="bg-slate-50/90 border-b border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${uniTheme.pill}`}>
                        {uniThai}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900">
                        {group.faculty.nameTh}
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500">
                      {group.faculty.nameEn} · {group.projects.length} สาขา/โครงการที่เปิดรับสมัคร
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-800 rounded-lg border border-purple-200 self-start sm:self-auto">
                    {group.projects.reduce((acc, p) => acc + p.project.quotaSeats, 0)} ที่นั่งรวม
                  </span>
                </div>

                {/* Branches & Projects inside this Faculty */}
                <div className="divide-y divide-slate-100">
                  {group.projects.map((p) => renderProjectCard(p, true))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Standard Grid View with Rich Additional Conditions Box */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredProjects.map((p) => renderProjectCard(p, false))}
        </div>
      )}
    </div>
  );

  // Helper render function for each program/branch card
  function renderProjectCard(p: EnrichedAdmissionProject, isGrouped: boolean) {
    const isTracked = trackedIds.has(p.project.id);
    const round = getRoundLabel(p.project.round);
    const uniTheme = getUniversityTheme(p.university.id);
    const uniThai = getUniversityThaiAbbr(p.university.id);
    const gpaxReq = p.project.requirements.find((r) => r.type === 'GPAX');

    return (
      <div
        key={p.project.id}
        className={`bg-white rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${
          isGrouped ? 'border-none' : 'border border-slate-200/90'
        }`}
      >
        <div className="space-y-3">
          {/* Top Metadata Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                {!isGrouped && (
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${uniTheme.pill}`}>
                    {uniThai}
                  </span>
                )}
                <span className="text-slate-600 font-semibold">{p.faculty.nameTh}</span>
                {p.project.tcasProgramCode && (
                  <span className="text-[10px] text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                    รหัส myTCAS: {p.project.tcasProgramCode}
                  </span>
                )}
              </div>
              <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-md text-[11px]">
                  {round.short}
                </span>
                <span>{p.project.projectNameTh}</span>
              </div>
            </div>

            {/* Verification Status */}
            <div className="shrink-0 text-right">
              {p.project.source.verificationStatus === 'verified' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>ตรวจสอบแล้ว</span>
                </span>
              )}
              {p.project.source.verificationStatus === 'changed' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>ขยายเวลารับสมัคร</span>
                </span>
              )}
            </div>
          </div>

          {/* Branch & Program Title */}
          <div
            onClick={() => onOpenDetail(p)}
            className="cursor-pointer group space-y-1"
          >
            <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
              {p.program.nameTh}
            </h3>
            <p className="text-xs text-slate-500">
              {p.program.nameEn} ({p.branch.nameTh}) · {p.program.degreeName}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200/80">
            <div>
              <span className="text-slate-400 block text-[11px]">จำนวนรับ:</span>
              <span className="font-bold text-slate-900 font-mono text-sm">
                {p.project.quotaSeats} ที่นั่ง
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">เกรดเฉลี่ย (GPAX):</span>
              <span className="font-bold text-blue-700">
                {p.project.gpaxMin
                  ? `GPAX ≥ ${p.project.gpaxMin}`
                  : gpaxReq?.minScore
                  ? `GPAX ≥ ${gpaxReq.minScore}`
                  : 'ไม่กำหนดขั้นต่ำ'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">แผนการเรียน:</span>
              <span className="font-semibold text-slate-800 truncate block" title={p.project.studyTrack || 'ทุกแผน'}>
                {p.project.studyTrack || 'ทุกแผนการเรียน'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">ค่าธรรมเนียม:</span>
              <span className="font-semibold text-emerald-700 truncate block">
                {p.project.tuitionFee || 'ตามประกาศ มหาวิทยาลัย'}
              </span>
            </div>
          </div>

          {/* Admission Projects & Spots Section (ข้อมูลโครงการที่เปิดรับสมัคร และจำนวนรับแต่ละโครงการ) */}
          {p.project.subProjects && p.project.subProjects.length > 0 ? (
            <div className="p-4 bg-gradient-to-br from-purple-50/90 via-indigo-50/40 to-white border border-purple-200/90 rounded-2xl text-xs space-y-3 shadow-2xs">
              <div className="flex items-center justify-between font-bold text-purple-950 border-b border-purple-100 pb-2">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-purple-700" />
                  <span className="text-xs sm:text-[13px]">
                    โครงการที่เปิดรับสมัคร ({p.project.subProjects.length} โครงการ)
                  </span>
                </div>
                <span className="text-[11px] bg-purple-100 text-purple-900 px-2.5 py-0.5 rounded-full font-mono font-bold border border-purple-200">
                  รับรวม {p.project.quotaSeats} ที่นั่ง
                </span>
              </div>

              {/* Sub-projects list with spot for each and key criteria */}
              <div className="space-y-2">
                {p.project.subProjects.map((sp, idx) => (
                  <div
                    key={sp.id}
                    onClick={() => onOpenDetail(p)}
                    className="p-3 bg-white rounded-xl border border-purple-100 shadow-2xs hover:border-purple-300 hover:shadow-xs transition-all cursor-pointer space-y-2 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 font-mono">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors text-xs leading-snug">
                            {sp.nameTh}
                          </h4>
                          {sp.nameEn && (
                            <p className="text-[10px] text-slate-400 truncate">{sp.nameEn}</p>
                          )}
                        </div>
                      </div>

                      {/* Prominent Spot Badge for each sub-project */}
                      <div className="shrink-0 text-right">
                        <span className="inline-flex items-center gap-1 font-mono font-bold text-xs text-purple-950 bg-purple-50 border border-purple-300 px-2.5 py-1 rounded-lg">
                          <span>รับ</span>
                          <span className="text-sm font-black text-purple-800">{sp.quotaSeats}</span>
                          <span>ที่นั่ง</span>
                        </span>
                      </div>
                    </div>

                    {/* Criteria & Tracks */}
                    <div className="pt-1 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[10.5px]">
                      {sp.studyTrack && (
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-medium">
                          📚 {sp.studyTrack}
                        </span>
                      )}
                      {sp.gpaxMin && (
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md font-medium">
                          🎯 GPAX ≥ {sp.gpaxMin}
                        </span>
                      )}
                      {sp.selectionFormulaTh && (
                        <span className="px-2 py-0.5 bg-amber-50 text-amber-900 rounded-md font-medium truncate max-w-full" title={sp.selectionFormulaTh}>
                          ⚖️ {sp.selectionFormulaTh}
                        </span>
                      )}
                    </div>

                    {/* Eligibility Tags */}
                    {sp.generalEligibilityTh && sp.generalEligibilityTh.length > 0 && (
                      <div className="flex flex-wrap gap-1 text-[10px]">
                        {sp.generalEligibilityTh.slice(0, 3).map((tag, tagIdx) => {
                          const isNegative = tag.startsWith('ไม่รับ') || tag.startsWith('ไม่');
                          return (
                            <span
                              key={tagIdx}
                              className={`px-1.5 py-0.5 rounded font-medium ${
                                isNegative
                                  ? 'bg-rose-50 text-rose-700 border border-rose-100'
                                  : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                              }`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-1 flex items-center justify-between text-[11px] text-purple-900 font-medium">
                <span className="text-slate-500">คลิกที่โครงการเพื่อเปิดดูระเบียบการและเกณฑ์คะแนนฉบับเต็ม</span>
                <span className="text-purple-700 font-bold group-hover:underline inline-flex items-center gap-1 cursor-pointer">
                  ดูรายละเอียดเกณฑ์ →
                </span>
              </div>
            </div>
          ) : (
            /* Single Project Display: clearly state Project Name, Spots, and Criteria */
            <div className="p-3.5 bg-gradient-to-br from-slate-50 to-purple-50/20 border border-slate-200/90 rounded-2xl text-xs space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[10.5px] font-semibold text-purple-700 uppercase tracking-wider block">
                    โครงการที่เปิดรับสมัคร
                  </span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                    {p.project.projectNameTh}
                  </h4>
                  {p.project.projectNameEn && p.project.projectNameEn !== p.project.projectNameTh && (
                    <p className="text-[10px] text-slate-400 truncate">{p.project.projectNameEn}</p>
                  )}
                </div>

                {/* Spot Badge for this project */}
                <div className="shrink-0 text-right">
                  <span className="inline-flex items-center gap-1 font-mono font-bold text-xs text-purple-950 bg-purple-50 border border-purple-300 px-2.5 py-1 rounded-lg">
                    <span>รับ</span>
                    <span className="text-sm font-black text-purple-800">{p.project.quotaSeats}</span>
                    <span>ที่นั่ง</span>
                  </span>
                </div>
              </div>

              {/* Selection Formula & Conditions */}
              {p.project.selectionFormulaTh && (
                <div className="p-2 bg-white/90 rounded-lg border border-purple-100 text-[11px] font-medium text-slate-800 flex items-start gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-purple-900">เกณฑ์คัดเลือก: </span>
                    <span>{p.project.selectionFormulaTh}</span>
                  </div>
                </div>
              )}

              {p.project.additionalConditionsTh && p.project.additionalConditionsTh.length > 0 && (
                <ul className="space-y-1 text-slate-600 text-[11px] pt-0.5">
                  {p.project.additionalConditionsTh.slice(0, 3).map((cond, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-purple-600 font-bold mt-0.5">•</span>
                      <span>{cond}</span>
                    </li>
                  ))}
                  {p.project.additionalConditionsTh.length > 3 && (
                    <li className="text-[10.5px] text-purple-700 font-semibold pt-0.5">
                      + มีอีก {p.project.additionalConditionsTh.length - 3} คุณสมบัติเพิ่มเติม (คลิกเพื่อดูฉบับเต็ม)
                    </li>
                  )}
                </ul>
              )}

              {p.project.portfolioPagesLimit && (
                <div className="text-[10.5px] text-slate-500 pt-1 border-t border-slate-200/60">
                  ข้อกำหนดพอร์ตโฟลิโอ: {p.project.portfolioPagesLimit}
                </div>
              )}
            </div>
          )}

          {/* Timeline & Status Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>รับสมัคร: {formatDateThai(p.applicationOpenDate)} – {formatDateThai(p.applicationCloseDate)}</span>
            </div>
            <span className="font-semibold text-amber-800">
              {getDaysCountdownThai(p.daysUntilClose)}
            </span>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenDetail(p)}
            className="text-xs font-semibold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>ดูเกณฑ์และระเบียบการฉบับเต็ม</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => onToggleTrack(p.project.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isTracked
                ? 'bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
            }`}
          >
            {isTracked ? (
              <>
                <BookmarkCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>บันทึกแล้ว</span>
              </>
            ) : (
              <>
                <Bookmark className="h-3.5 w-3.5" />
                <span>+ บันทึกสาขานี้</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }
};
