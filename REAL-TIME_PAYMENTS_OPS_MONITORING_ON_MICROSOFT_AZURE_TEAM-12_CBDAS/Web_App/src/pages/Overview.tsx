import React from 'react';
import { Card, StatCard, SectionTitle, ProgressBarRow, MiniStat, IncidentCard } from '../components/Shared';
import { Database, CheckCircle2, ShieldAlert, Clock, Activity, BarChart3, AlertTriangle, Workflow, HardDrive, RefreshCw } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const successRateData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${String(10 + Math.floor(i / 6)).padStart(2, '0')}:${String((i % 6) * 10).padStart(2, '0')}`,
  rate: 98 + Math.random() * 1.5,
}));

const volumeData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${String(10 + Math.floor(i / 6)).padStart(2, '0')}:${String((i % 6) * 10).padStart(2, '0')}`,
  vol: 12000 + Math.random() * 4000
}));

export function Overview() {
  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-4">

      {/* KPI Cards exactly as requested + Power BI style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Transactions" value="34.8M" format="" trend={2.4} trendUp={true} valueColor="text-[#118DFF]" icon={Database}/>
        <StatCard title="Success Rate (%)" value="96.2" format="" trend={0.5} trendUp={true} valueColor="text-[#107C10]" icon={CheckCircle2}/>
        <StatCard title="Failure Rate (%)" value="3.8" format="" trend={0.5} trendUp={false} valueColor="text-[#A4262C]" icon={ShieldAlert}/>
        <StatCard title="Avg Latency (ms)" value="312" format="" trend={12} trendUp={false} valueColor="text-[#D9B300]" icon={Clock}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT COLUMN - Azure Operational Details */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <Card>
             <SectionTitle title="Azure Tech Health" icon={Workflow} />
             <div className="flex flex-col gap-3 mt-2">
               <MiniStat label="Stream Analytics" value="Healthy" valColor="text-[#107C10]" icon={Activity} />
               <MiniStat label="Synapse Data Wh" value="44% DTU" valColor="text-[#118DFF]" icon={Database} />
               <MiniStat label="ADLS Gen2 IOPS" value="12ms" valColor="text-[#118DFF]" icon={HardDrive} />
               <MiniStat label="EventHub Lag" value="2.1s" valColor="text-[#D9B300]" icon={RefreshCw} />
             </div>
          </Card>
          
          <Card className="flex-1">
             <SectionTitle title="Critical Alerts" icon={AlertTriangle} />
             <div className="flex flex-col gap-2 mt-2">
                <IncidentCard sev="SEV 2" title="ICICI Timeout Spike" time="Just Now" desc="CBS response times exceeding 5s threshold for South India." colorClass="bg-[#A4262C]" />
                <IncidentCard sev="SEV 3" title="EventHub Partition" time="15m ago" desc="Partition 14 showing processing lag > 2 seconds." colorClass="bg-[#D9B300]" />
             </div>
          </Card>
        </div>

        {/* MIDDLE / LARGE COLUMNS - Streaming Analytics */}
        <div className="col-span-1 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="min-h-[350px] flex flex-col">
            <SectionTitle title="Live Success Rate (%)" />
            <div className="flex-1 w-full min-h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={successRateData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAEAEA" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 500 }} dy={10} minTickGap={30} />
                  <YAxis domain={['auto', 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 500 }} />
                  <Tooltip contentStyle={{ borderRadius: '2px', border: '1px solid #EDEBE9', fontSize: '12px', fontWeight: 400, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                  <Line type="monotone" dataKey="rate" stroke="#118DFF" strokeWidth={3} dot={false} activeDot={{ r: 5, fill: '#118DFF', strokeWidth: 0 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="min-h-[350px] flex flex-col">
            <SectionTitle title="Live Volume Streaming (TPS)" />
            <div className="flex-1 w-full min-h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={volumeData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVolBase" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#12239E" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#12239E" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAEAEA" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 500 }} dy={10} minTickGap={30} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 500 }} tickFormatter={(val) => `${(val/1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ borderRadius: '2px', border: '1px solid #EDEBE9', fontSize: '12px', fontWeight: 400, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                  <Area type="monotone" dataKey="vol" stroke="#12239E" strokeWidth={2} fillOpacity={1} fill="url(#colorVolBase)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="md:col-span-2 min-h-[250px]">
             <SectionTitle title="Bank Node Gateway Health" />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <ProgressBarRow label="HDFC Bank ExpressRoute" value="98.8%" percent={98.8} subText="4.2k txn/m" colorClass="bg-[#107C10]" />
                <ProgressBarRow label="SBI Bank S2S VPN" value="97.2%" percent={97.2} subText="3.8k txn/m" colorClass="bg-[#107C10]" />
                <ProgressBarRow label="ICICI Primary Node" value="84.5%" percent={84.5} subText="2.1k txn/m" colorClass="bg-[#A4262C]" />
                <ProgressBarRow label="Axis Bank Connection" value="99.1%" percent={99.1} subText="1.9k txn/m" colorClass="bg-[#107C10]" />
                <ProgressBarRow label="Kotak Node Analytics" value="96.4%" percent={96.4} subText="1.2k txn/m" colorClass="bg-[#D9B300]" />
                <ProgressBarRow label="PNB Fallback Node" value="94.2%" percent={94.2} subText="800 txn/m" colorClass="bg-[#118DFF]" />
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
