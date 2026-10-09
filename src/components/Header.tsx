import React from 'react';
import {
  LayoutDashboard,
  Compass,
  Calendar,
  Clock,
  CheckSquare,
  Bell,
  Database,
  BookmarkCheck,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export type ActiveTab =
  | 'dashboard'
  | 'explore'
  | 'calendar'
  | 'timeline'
  | 'checklist'
  | 'alerts'
  | 'ingest';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  trackedCount: number;
  unreadAlertsCount: number;
  pendingTasksCount: number;
  onOpenSourceModal?: () => void;
  onNavigateToTracked?: () => void;
}

interface NavItem {
  id: ActiveTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: number | null;
  badgeUrgent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  trackedCount,
  unreadAlertsCount,
  pendingTasksCount,
  onOpenSourceModal,
  onNavigateToTracked,
}) => {
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'แดชบอร์ด', icon: LayoutDashboard, badge: null },
    { id: 'calendar', label: 'ปฏิทิน', icon: Calendar, badge: null },
    { id: 'explore', label: 'ค้นหาคณะ/สาขา', icon: Compass, badge: null },
    {
      id: 'checklist',
      label: 'เช็กลิสต์สิ่งที่ต้องทำ',
      icon: CheckSquare,
      badge: pendingTasksCount > 0 ? pendingTasksCount : null,
    },
    {
      id: 'alerts',
      label: 'แจ้งเตือนวันเปลี่ยน',
      icon: Bell,
      badge: unreadAlertsCount > 0 ? unreadAlertsCount : null,
      badgeUrgent: true,
    },
    { id: 'ingest', label: 'สถาปัตยกรรมข้อมูล', icon: Database, badge: null },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold tracking-tight shadow-sm">
            TC
          </div>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="text-left font-extrabold text-lg tracking-tight text-slate-900 hover:text-blue-700 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>TCAS Command Center</span>
            <span className="hidden md:inline px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
              เด็ก 69 / 70
            </span>
          </button>
        </div>

        {/* Navigation Links in Thai */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-2 px-3 py-1.5 text-xs rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/80 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                {item.badge !== null && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 text-[10px] font-mono rounded-full font-bold ${
                      item.badgeUrgent
                        ? 'bg-rose-500 text-white'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions / Status Toolbar in Thai */}
        <div className="flex items-center gap-2">
          {onOpenSourceModal && (
            <button
              onClick={onOpenSourceModal}
              className="hidden sm:flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 rounded-xl text-emerald-800 transition-all font-bold cursor-pointer shadow-2xs"
              title="ตรวจสอบแหล่งข้อมูลทางการและการดึงข้อมูลอัตโนมัติ"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>แหล่งข้อมูลทางการ</span>
            </button>
          )}

          <button
            onClick={() => {
              if (onNavigateToTracked) {
                onNavigateToTracked();
              } else {
                setActiveTab('dashboard');
              }
            }}
            className="flex items-center gap-2 text-xs px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-bold cursor-pointer shadow-sm hover:shadow active:scale-98"
            title="ดูสาขาและโครงการที่ฉันบันทึกไว้ในแดชบอร์ด"
          >
            <BookmarkCheck className="h-4 w-4 text-white" />
            <span className="hidden sm:inline">สาขาและโครงการที่ฉันบันทึกไว้</span>
            <span className="inline sm:hidden">บันทึกไว้</span>
            <span className="px-1.5 py-0.2 text-[11px] font-mono font-bold bg-white/25 text-white rounded-md tabular-nums">
              {trackedCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation bar in Thai */}
      <div className="flex lg:hidden overflow-x-auto border-t border-slate-100 px-3 py-1.5 gap-1.5 scrollbar-none bg-slate-50/70">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs whitespace-nowrap rounded-xl font-semibold cursor-pointer ${
                isActive
                  ? 'bg-white shadow-xs text-blue-700 font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
              {item.badge !== null && (
                <span className="text-[10px] font-mono px-1.5 bg-rose-500 text-white rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
