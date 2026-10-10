import React, { useState } from 'react';
import {
  LayoutDashboard,
  Compass,
  Calendar,
  Bell,
  BookmarkCheck,
  User,
  Sun,
  Moon,
  Monitor,
  Type,
  LogOut,
} from 'lucide-react';
import { useSettings, ThemeMode, FontSize } from '../settings';

export type ActiveTab =
  | 'home'
  | 'calendar'
  | 'explore'
  | 'alerts'
  // legacy aliases (migrated to the 4-tab MVP on load)
  | 'dashboard'
  | 'timeline'
  | 'checklist'
  | 'ingest';

export function normalizeTab(t: ActiveTab): 'home' | 'calendar' | 'explore' | 'alerts' {
  if (t === 'dashboard') return 'home';
  if (t === 'timeline') return 'calendar';
  if (t === 'checklist') return 'calendar';
  if (t === 'ingest') return 'home';
  return t;
}

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  trackedCount: number;
  unreadAlertsCount: number;
  pendingTasksCount: number;
  onNavigateToTracked?: () => void;
}

interface NavItem {
  id: 'home' | 'calendar' | 'explore' | 'alerts';
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
  onNavigateToTracked,
}) => {
  const tab = normalizeTab(activeTab);
  const { theme, setTheme, fontSize, setFontSize, isLoggedIn, setIsLoggedIn } = useSettings();
  const [showSettings, setShowSettings] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'หน้าแรก', icon: LayoutDashboard, badge: null },
    { id: 'calendar', label: 'ปฏิทิน', icon: Calendar, badge: pendingTasksCount > 0 ? pendingTasksCount : null },
    { id: 'explore', label: 'หามหาลัย', icon: Compass, badge: null },
    {
      id: 'alerts',
      label: 'แจ้งเตือน',
      icon: Bell,
      badge: unreadAlertsCount > 0 ? unreadAlertsCount : null,
      badgeUrgent: true,
    },
  ];

  const themeBtn = (mode: ThemeMode, label: string, Icon: React.ComponentType<{ className?: string }>) => (
    <button
      key={mode}
      onClick={() => setTheme(mode)}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
        theme === mode
          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{label}</span>
    </button>
  );

  const fontBtn = (mode: FontSize, label: string) => (
    <button
      key={mode}
      onClick={() => setFontSize(mode)}
      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
        fontSize === mode
          ? 'bg-blue-600 text-white'
          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
      }`}
    >
      <span>{label}</span>
    </button>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs dark:bg-slate-900/95 dark:border-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 gap-2">
        {/* Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white font-extrabold tracking-tight shadow-sm shrink-0">
            TC
          </div>
          <button
            onClick={() => setActiveTab('home')}
            className="text-left font-extrabold text-base sm:text-lg tracking-tight text-slate-900 hover:text-blue-700 transition-colors cursor-pointer dark:text-white dark:hover:text-blue-300 truncate"
          >
            <span>TCAS Command Center</span>
          </button>
        </div>

        {/* Desktop nav: 4 MVP tabs */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/80 shadow-2xs dark:bg-blue-900/40 dark:text-blue-200 dark:border-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge !== null && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 text-[11px] font-mono rounded-full font-bold ${
                      item.badgeUrgent
                        ? 'bg-rose-500 text-white'
                        : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Top-right: saved + settings + profile mock */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              if (onNavigateToTracked) onNavigateToTracked();
              else setActiveTab('home');
            }}
            className="flex items-center gap-2 text-sm px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-bold cursor-pointer shadow-sm active:scale-98"
            title="ดูสาขาที่บันทึกไว้"
          >
            <BookmarkCheck className="h-4 w-4 text-white" />
            <span className="hidden sm:inline">ที่บันทึกไว้</span>
            <span className="px-1.5 py-0.2 text-xs font-mono font-bold bg-white/25 text-white rounded-md tabular-nums">
              {trackedCount}
            </span>
          </button>

          {/* Display settings */}
          <div className="relative">
            <button
              onClick={() => setShowSettings((v) => !v)}
              className="flex items-center gap-1.5 text-sm px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 transition-all font-bold cursor-pointer"
              title="ปรับธีมและขนาดตัวอักษร"
            >
              <Type className="h-4 w-4" />
              <span className="hidden sm:inline">การแสดงผล</span>
            </button>
            {showSettings && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-3 space-y-3 z-50">
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">ธีม (Theme)</div>
                  <div className="flex gap-1">
                    {themeBtn('light', 'สว่าง', Sun)}
                    {themeBtn('dark', 'มืด', Moon)}
                    {themeBtn('system', 'ตามระบบ', Monitor)}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">ขนาดตัวอักษร</div>
                  <div className="flex gap-1">
                    {fontBtn('small', 'เล็ก')}
                    {fontBtn('medium', 'กลาง')}
                    {fontBtn('large', 'ใหญ่')}
                  </div>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg cursor-pointer"
                >
                  ปิดหน้าต่างนี้
                </button>
              </div>
            )}
          </div>

          {/* Profile mock login */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl transition-all font-bold cursor-pointer border ${
              isLoggedIn
                ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-800 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-200'
                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
            title={isLoggedIn ? 'ออกจากระบบจำลอง' : 'เข้าสู่ระบบจำลอง (mockup)'}
          >
            {isLoggedIn ? <LogOut className="h-4 w-4" /> : <User className="h-4 w-4" />}
            <span className="hidden sm:inline">{isLoggedIn ? 'สมมติ: ล็อกอินแล้ว' : 'โปรไฟล์'}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav: 4 tabs */}
      <div className="flex lg:hidden overflow-x-auto border-t border-slate-100 dark:border-slate-800 px-3 py-1.5 gap-1.5 bg-slate-50/70 dark:bg-slate-900">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = tab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm whitespace-nowrap rounded-xl font-semibold cursor-pointer ${
                isActive
                  ? 'bg-white shadow-xs text-blue-700 font-bold border border-slate-200 dark:bg-slate-800 dark:text-blue-300 dark:border-slate-600'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
              {item.badge !== null && (
                <span className="text-[11px] font-mono px-1.5 bg-rose-500 text-white rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
