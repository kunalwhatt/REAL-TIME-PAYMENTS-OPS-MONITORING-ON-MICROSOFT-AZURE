import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, AlertTriangle, Info } from 'lucide-react';

export const Card = ({ children, className = '', highlightColor = '' }: { children: React.ReactNode, className?: string, highlightColor?: string }) => (
  <div className={`bg-white rounded-[2px] shadow-[0_0_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] p-4 relative overflow-hidden ${className}`}>
    {highlightColor && <div className={`absolute top-0 left-0 w-full h-1 ${highlightColor}`} />}
    {children}
  </div>
);

export const SectionTitle = ({ title, tag, icon: Icon }: { title: string, tag?: string, icon?: React.ElementType }) => (
  <div className="text-[15px] font-semibold text-[#252423] mb-4 flex justify-between items-center pb-2 border-b border-[#EDEBE9]">
    <div className="flex items-center gap-2">
      {title}
    </div>
    <div className="flex items-center gap-2">
       {tag && <span className="text-[11px] px-2 py-0.5 rounded bg-[#F3F2F1] text-[#605E5C] font-semibold">{tag}</span>}
       <Info className="w-4 h-4 text-[#A19F9D] hover:text-[#605E5C] cursor-pointer" />
    </div>
  </div>
);

export const StatCard = ({ title, value, trend, desc, trendUp, icon: Icon, valueColor = 'text-[#252423]', format = '' }: any) => {
  return (
    <Card className="flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute top-3 right-3 text-[#A19F9D]">
        {Icon && <Icon className="w-4 h-4" />}
      </div>
      <div className={`text-[32px] font-light leading-none mb-2 mt-4 ${valueColor}`}>{value}{format}</div>
      <div className="text-[13px] text-[#605E5C] font-semibold mb-2">{title}</div>
      
      {trendUp !== undefined && (
        <div className="flex items-center justify-center gap-1.5 mt-auto">
          <span className={`text-[12px] font-semibold flex items-center px-2 py-0.5 rounded-sm ${trendUp ? 'bg-[#DFF6DD] text-[#107C10]' : 'bg-[#FDE7E9] text-[#A4262C]'}`}>
            {trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
            {Math.abs(trend)}% {desc}
          </span>
        </div>
      )}
    </Card>
  );
}

export const ProgressBarRow = ({ label, value, percent, subText, colorClass = 'bg-[#118DFF]' }: any) => (
  <div className="py-2.5">
    <div className="flex justify-between items-baseline mb-1">
      <div className="text-[13px] font-semibold text-[#323130]">{label}</div>
      <div className="text-right">
        <div className={`text-[13px] font-bold ${percent < 90 ? 'text-[#CE3B3B]' : 'text-[#323130]'}`}>{value}</div>
      </div>
    </div>
    <div className="w-full h-[6px] bg-[#EDEBE9] rounded-sm overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${colorClass}`}
      />
    </div>
    <div className="text-[11px] text-[#605E5C] mt-1 text-right">{subText}</div>
  </div>
);

export const MiniStat = ({ label, value, valColor = 'text-[#323130]', icon: Icon }: any) => (
  <div className="p-3 bg-[#F3F2F1] rounded-sm flex items-center justify-between border-l-4 border-[#118DFF]">
    <div>
      <div className="text-[11px] text-[#605E5C] font-semibold mb-0.5">{label}</div>
      <div className={`text-[18px] font-bold leading-none ${valColor}`}>{value}</div>
    </div>
  </div>
);

export const IncidentCard = ({ sev, title, time, desc, colorClass, borderClass }: any) => (
  <div className={`border-l-4 ${colorClass.replace('bg-', 'border-')} bg-white p-3 shadow-sm relative overflow-hidden mb-2`}>
    <div className="flex justify-between items-start mb-1">
      <div className={`text-[12px] font-bold text-[#323130] flex items-center gap-1.5`}>
        <AlertTriangle className={`w-3.5 h-3.5 ${colorClass.replace('bg-', 'text-')}`} />
        {title}
      </div>
      <span className="text-[11px] text-[#605E5C]">{time}</span>
    </div>
    <p className="text-[12px] text-[#605E5C] leading-snug">{desc}</p>
    <div className="mt-2 text-[10px] font-bold text-[#605E5C] bg-[#F3F2F1] px-1.5 py-0.5 inline-block rounded-sm">{sev}</div>
  </div>
);
