import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type FontSize = 'small' | 'medium' | 'large';

interface Settings {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  fontSize: FontSize;
  setFontSize: (f: FontSize) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
}

const SettingsCtx = createContext<Settings | null>(null);

const FONT_PX: Record<FontSize, string> = {
  small: '14px',
  medium: '16px',
  large: '18px',
};

function resolveDark(theme: ThemeMode): boolean {
  if (theme === 'dark') return true;
  if (theme === 'light') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      return (localStorage.getItem('tcas_theme') as ThemeMode) || 'system';
    } catch {
      return 'system';
    }
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    try {
      return (localStorage.getItem('tcas_font') as FontSize) || 'medium';
    } catch {
      return 'medium';
    }
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('tcas_mock_login') === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tcas_theme', theme);
    } catch { /* noop */ }
    const apply = () => {
      const dark = resolveDark(theme);
      document.documentElement.classList.toggle('dark', dark);
    };
    apply();
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const onChange = () => theme === 'system' && apply();
    mq?.addEventListener?.('change', onChange);
    return () => mq?.removeEventListener?.('change', onChange);
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('tcas_font', fontSize);
    } catch { /* noop */ }
    document.documentElement.style.fontSize = FONT_PX[fontSize];
    document.documentElement.dataset.fontSize = fontSize;
  }, [fontSize]);

  useEffect(() => {
    try {
      localStorage.setItem('tcas_mock_login', isLoggedIn ? '1' : '0');
    } catch { /* noop */ }
  }, [isLoggedIn]);

  return (
    <SettingsCtx.Provider value={{ theme, setTheme, fontSize, setFontSize, isLoggedIn, setIsLoggedIn }}>
      {children}
    </SettingsCtx.Provider>
  );
};

export function useSettings(): Settings {
  const ctx = useContext(SettingsCtx);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
}
