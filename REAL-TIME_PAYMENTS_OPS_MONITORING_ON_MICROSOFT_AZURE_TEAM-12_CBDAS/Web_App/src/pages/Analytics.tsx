import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import { PieChart as PieChartIcon, BarChart3, Activity } from 'lucide-react';

const bankMarketShare = [
  { name: 'HDFC', value: 35 },
  { name: 'SBI', value: 25 },
  { name: 'ICICI', value: 20 },
  { name: 'Axis', value: 15 },
  { name: 'Others', value: 5 },
];
const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#cbd5e1'];

const regionFailureData = [
  { name: 'North', timeout: 400, insufficient: 240, invalidPin: 150 },
  { name: 'South', timeout: 300, insufficient: 139, invalidPin: 200 },
  { name: 'East', timeout: 200, insufficient: 980, invalidPin: 100 },
  { name: 'West', timeout: 278, insufficient: 390, invalidPin: 120 },
];

const hourlyVolume = Array.from({length: 12}).map((_, i) => ({
  hour: `${i+8}:00`,
  vol: Math.floor(Math.random() * 50000) + 10000
}));

export function Analytics() {
  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-5 md:gap-6">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-slate-800">Analytics Insights</h2>
        <p className="text-sm text-slate-500">Deep-dive into performance metrics, volume distribution, and failure analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        <Card className="min-h-[350px] flex flex-col">
          <SectionTitle title="Bank Market Share (Volume)" icon={PieChartIcon} />
          <div className="flex-1 w-full min-h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={bankMarketShare}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={100}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {bankMarketShare.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                 <Legend verticalAlign="bottom" height={36}/>
               </PieChart>
             </ResponsiveContainer>
          </div>
        </Card>

        <Card className="min-h-[350px] flex flex-col">
          <SectionTitle title="Regional Failure Breakdown" icon={BarChart3} tag="Stacked" />
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={regionFailureData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                <Legend />
                <Bar dataKey="timeout" stackId="a" fill="#ef4444" name="Timeout" radius={[0, 0, 4, 4]} />
                <Bar dataKey="insufficient" stackId="a" fill="#f59e0b" name="No Funds" />
                <Bar dataKey="invalidPin" stackId="a" fill="#64748b" name="Invalid PIN" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="lg:col-span-2 min-h-[350px] flex flex-col">
          <SectionTitle title="Hourly Transaction Volume" icon={Activity} />
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyVolume} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(val) => `${(val/1000)}k`} />
                <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                <Line type="monotone" dataKey="vol" stroke="#10b981" strokeWidth={3} dot={{r:4}} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
