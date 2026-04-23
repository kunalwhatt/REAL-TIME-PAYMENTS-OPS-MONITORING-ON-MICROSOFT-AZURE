import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Building2, Wallet, Globe2, AlertTriangle, Lightbulb, List, Activity, FileText } from 'lucide-react';

export function Layout({ children, page, setPage }: any) {
  const [time, setTime] = useState(new Date('2026-03-07T10:42:15Z'));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(time.getTime() + 1000)), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const navItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'bank', label: 'Bank Analytics', icon: Building2 },
    { id: 'psp', label: 'PSP Analytics', icon: Wallet },
    { id: 'region', label: 'Region Analytics', icon: Globe2 },
    { id: 'failure', label: 'Failure Analytics', icon: AlertTriangle },
    { id: 'latency', label: 'Latency Analytics', icon: Activity },
    { id: 'advanced', label: 'Advanced Insights', icon: Lightbulb },
    { id: 'data', label: 'Raw Data Table', icon: List },
    { id: 'docs', label: 'Project Documentation', icon: FileText },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* HEADER (MICROSOFT FABRIC STYLE) */}
      <header className="h-[48px] bg-[#0F0F0F] flex items-center justify-between px-3 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <button className="text-white hover:bg-[#333] p-1.5 rounded-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M2.5 4.5A.5.5 0 013 4h14a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0 5.5a.5.5 0 01.5-.5h14a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0 5.5a.5.5 0 01.5-.5h14a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" /></svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#118DFF] text-[14px]">Azure Ops</span>
            <span className="text-white/30 text-[14px]">|</span>
            <span className="font-semibold text-white text-[14px] tracking-wide">REAL-TIME PAYMENTS OPS MONITORING ON MICROSOFT AZURE</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[12px] text-white/70 mr-4">
            Data Refreshed: {time.toUTCString().replace("GMT", "UTC")}
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* LEFT NAV PANEL - POWER BI SERVICE STYLE */}
        <aside className="w-[220px] bg-white border-r border-[#EDEBE9] flex flex-col shrink-0 overflow-y-auto hidden md:flex z-20">
          <nav className="flex-1 py-4 flex flex-col gap-0.5">
            <div className="px-5 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wider mb-2">Pages</div>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex items-center gap-3 px-5 py-2 text-[13px] text-left transition-colors relative border-l-[3px] ${page === item.id ? 'border-[#118DFF] bg-[#F3F2F1] text-[#252423] font-semibold' : 'border-transparent text-[#605E5C] hover:bg-[#F3F2F1] hover:text-[#252423]'}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* WORKSPACE CANVAS */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F3F2F1] overflow-y-auto relative">
          
          {/* MOBILE NAV OVERRIDE */}
          <div className="md:hidden flex flex-wrap gap-2 m-4 pb-4 border-b border-[#EDEBE9]">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs ${page === item.id ? 'bg-[#118DFF] text-white font-semibold' : 'bg-white text-[#605E5C] border border-[#EDEBE9]'}`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex-1 p-4 md:p-6 pb-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
