import React from 'react';
import { Card, SectionTitle, StatCard } from '../components/Shared';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Lightbulb, Smartphone, Store, ShieldAlert, BadgeIndianRupee } from 'lucide-react';

const deviceOS = [
  { name: 'Android', value: 82.5, color: '#10b981' },
  { name: 'iOS', value: 16.8, color: '#6366f1' },
  { name: 'KaiOS/Other', value: 0.7, color: '#94a3b8' },
];

const channelUsage = [
  { name: 'Intent', value: 65000 },
  { name: 'Collect', value: 22000 },
  { name: 'Scan & Pay', value: 58000 },
  { name: 'In-App', value: 14000 },
];

const merchantCategories = [
  { name: 'Groceries/Supermarkets', value: 45000 },
  { name: 'Food & Beverage', value: 38000 },
  { name: 'Bill Payments', value: 28000 },
  { name: 'E-commerce', value: 24000 },
  { name: 'Fuel', value: 18000 },
];

export function AdvancedInsights() {
  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
      
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Advanced Analytics & Hardware</h2>
        <p className="text-sm text-slate-500 font-medium">Devices, Channels, Merchants, and deep-dive metadata</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        <StatCard title="Peak Hour" value="19:00" desc="7 PM - 8 PM IST" valueColor="text-blue-600" icon={Lightbulb}/>
        <StatCard title="Top Bank (Vol)" value="HDFC" desc="45k Transactions" valueColor="text-emerald-600" icon={Lightbulb}/>
        <StatCard title="Worst Bank (Fails)" value="SBI" desc="2,090 Failures" valueColor="text-red-500" icon={ShieldAlert}/>
        <StatCard title="Avg Txn Amount" value="₹1,240" desc="Per successful txn" valueColor="text-slate-800" icon={BadgeIndianRupee}/>
        <StatCard title="Failed Amount" value="₹2.4B" desc="Total value at risk" valueColor="text-red-500" icon={BadgeIndianRupee}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 28. Device Distribution */}
        <Card className="min-h-[350px] flex flex-col">
          <SectionTitle title="Device OS Distribution" icon={Smartphone} />
          <div className="flex-1 w-full min-h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={deviceOS}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={100}
                   paddingAngle={2}
                   dataKey="value"
                 >
                   {deviceOS.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: '8px', fontSize: '13px', fontWeight: 500 }} />
                 <Legend verticalAlign="bottom" height={36}/>
               </PieChart>
             </ResponsiveContainer>
          </div>
        </Card>

        {/* 29. Channel Usage */}
        <Card className="min-h-[350px] flex flex-col">
          <SectionTitle title="Channel Usage" icon={Smartphone} />
          <div className="flex-1 w-full min-h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelUsage} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#475569', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(val) => `${val/1000}k`}/>
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', fontSize: '13px', fontWeight: 500 }} />
                <Bar dataKey="value" fill="#3b82f6" name="Usage Count" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* 30. Merchant Categories */}
        <Card className="min-h-[350px] flex flex-col">
          <SectionTitle title="Top Merchant Categories" icon={Store} />
          <div className="flex-1 w-full min-h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={merchantCategories} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(val) => `${val/1000}k`}/>
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#475569', fontWeight: 600 }} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', fontSize: '13px', fontWeight: 500 }} />
                <Bar dataKey="value" fill="#8b5cf6" name="Transactions" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>
    </div>
  );
}
