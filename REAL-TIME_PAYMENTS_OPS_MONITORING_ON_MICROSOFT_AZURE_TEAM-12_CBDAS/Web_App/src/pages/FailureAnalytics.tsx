import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

const failureReasons = [
  { name: 'Bank Timeout (U19)', value: 12500, color: '#D64550' },
  { name: 'Insufficient Funds (U52)', value: 8300, color: '#E4757C' },
  { name: 'Invalid PIN (U16)', value: 4200, color: '#EA959A' },
  { name: 'Network Error', value: 2100, color: '#F0B6B8' },
  { name: 'Risk Blocked', value: 950, color: '#F5D7D8' },
];

const totalFailures = failureReasons.reduce((acc, curr) => acc + curr.value, 0);

const successFailureData = [
  { name: 'Success', value: 94.5, color: '#107C10' },
  { name: 'Failure', value: 5.5, color: '#A4262C' },
];

export function FailureAnalytics() {
  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-4">
      
      <div className="mb-2">
        <h2 className="text-2xl font-[600] text-[#252423] tracking-tight">Failure Analytics</h2>
        <p className="text-[13px] text-[#605E5C]">Deep dive into transaction failure reasons and counts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* 23. Failure Reasons Distribution */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Failure Reasons Distribution" icon={AlertTriangle} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={failureReasons}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={110}
                   paddingAngle={1}
                   dataKey="value"
                 >
                   {failureReasons.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <RechartsTooltip contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                 <Legend verticalAlign="bottom" height={36}/>
               </PieChart>
             </ResponsiveContainer>
          </div>
        </Card>

        {/* 24. Failure Count Table */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Failure Counts" icon={ShieldAlert} />
          <div className="flex-1 overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EDEBE9]">
                  <th className="py-2 px-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wider">Failure Reason</th>
                  <th className="py-2 px-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wider text-right">Count</th>
                  <th className="py-2 px-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wider text-right">% of Failures</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-[#252423]">
                {failureReasons.map((reason, idx) => (
                  <tr key={idx} className="border-b border-[#EDEBE9] last:border-0 hover:bg-[#F3F2F1] transition-colors">
                    <td className="py-2 px-1 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: reason.color }} />
                      {reason.name}
                    </td>
                    <td className="py-2 px-1 font-semibold text-right">{reason.value.toLocaleString()}</td>
                    <td className="py-2 px-1 text-[#605E5C] text-right">{((reason.value / totalFailures) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="border-t-[2px] border-[#EDEBE9] bg-[#F8F8F8] font-semibold">
                  <td className="py-2 px-1 text-[#252423]">Total Failures</td>
                  <td className="py-2 px-1 text-right">{totalFailures.toLocaleString()}</td>
                  <td className="py-2 px-1 text-right">100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* 36. Success vs Failure Distribution */}
        <Card className="min-h-[400px] flex flex-col lg:col-span-2">
          <SectionTitle title="Success vs Failure" icon={AlertTriangle} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={successFailureData}
                   cx="50%"
                   cy="50%"
                   innerRadius={80}
                   outerRadius={120}
                   paddingAngle={1}
                   dataKey="value"
                 >
                   {successFailureData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <RechartsTooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                 <Legend verticalAlign="bottom" height={36}/>
               </PieChart>
             </ResponsiveContainer>
          </div>
        </Card>

      </div>
    </div>
  );
}
