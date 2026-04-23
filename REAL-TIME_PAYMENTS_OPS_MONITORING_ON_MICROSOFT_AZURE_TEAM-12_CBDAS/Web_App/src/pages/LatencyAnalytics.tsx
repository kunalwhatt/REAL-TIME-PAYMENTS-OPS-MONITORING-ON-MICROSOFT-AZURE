import React from 'react';
import { Card, SectionTitle, StatCard } from '../components/Shared';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Clock } from 'lucide-react';

const latencyDistribution = [
  { bin: '0-100ms', count: 125000 },
  { bin: '100-200ms', count: 210000 },
  { bin: '200-300ms', count: 95000 },
  { bin: '300-500ms', count: 42000 },
  { bin: '500-1000ms', count: 18000 },
  { bin: '>1000ms', count: 4500 },
];

const pspLatency = [
  { psp: 'GPay', latency: 280 },
  { psp: 'PhonePe', latency: 245 },
  { psp: 'Paytm', latency: 310 },
  { psp: 'Cred', latency: 195 },
  { psp: 'AmazonPay', latency: 260 },
  { psp: 'Others', latency: 340 },
];

export function LatencyAnalytics() {
  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
      
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Latency Analytics</h2>
        <p className="text-sm text-slate-500 font-medium">System performance and network response times</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <StatCard title="High Latency Count (>1000ms)" value="4,500" format="" trend={15} trendUp={false} valueColor="text-amber-600" icon={Clock}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 25. Latency Distribution (Histogram substitute) */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Latency Distribution" icon={Activity} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={latencyDistribution} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="bin" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#475569', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(val) => `${val/1000}k`}/>
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', fontSize: '13px', fontWeight: 500 }} />
                <Bar dataKey="count" fill="#8b5cf6" name="Txn Count" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* 27. Latency by PSP */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Average Latency by PSP (ms)" icon={Clock} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pspLatency} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="psp" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#475569', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', fontSize: '13px', fontWeight: 500 }} />
                <Bar dataKey="latency" fill="#f59e0b" name="Avg Latency (ms)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>
    </div>
  );
}
