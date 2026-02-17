import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  Eye,
  History,
  BarChart3,
  Newspaper,
  Settings,
  ChevronLeft,
  ChevronRight,
  IndianRupee,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/trade", icon: TrendingUp, label: "Trade" },
  { to: "/watchlist", icon: Eye, label: "Watchlist" },
  { to: "/history", icon: History, label: "History" },
  { to: "/backtest", icon: BarChart3, label: "Backtest" },
  { to: "/news", icon: Newspaper, label: "News" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside
        className={`relative flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ${
          collapsed ? "w-16" : "w-56"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 h-14 border-b border-sidebar-border">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
            <IndianRupee className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-sm font-bold tracking-wide text-sidebar-foreground">
              IVTS
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 space-y-0.5 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Theme toggle */}
        <div className="p-2 border-t border-sidebar-border">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 shrink-0" /> : <Moon className="w-4 h-4 shrink-0" />}
            {!collapsed && <span>{isDark ? "Light Mode" : "Dark Mode"}</span>}
          </button>
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-16 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-background">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
