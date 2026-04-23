import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Globe2 } from 'lucide-react';

const regionData = [
  { region: 'South', txns: 1250000, fails: 3.2, color: '#118DFF' },
  { region: 'North', txns: 1100000, fails: 2.8, color: '#12239E' },
  { region: 'West', txns: 950000, fails: 2.1, color: '#E66C37' },
  { region: 'East', txns: 680000, fails: 4.5, color: '#00B7C3' },
  { region: 'Central', txns: 420000, fails: 1.9, color: '#6B007B' },
];

export function RegionAnalytics() {
  const dReg = regionData;

  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
      
      <div className="mb-2">
        <h2 className="text-2xl font-[600] text-[#252423] tracking-tight">Region Analytics</h2>
        <p className="text-[13px] text-[#605E5C]">Geographic distribution and regional network health</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Transactions by Region" icon={Globe2} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dReg} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} tickFormatter={(val) => val > 1000 ? `${(val/1000).toFixed(0)}k` : val} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="txns" name="Transactions" radius={[2, 2, 0, 0]}>
                   {dReg.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Failure Rate by Region (%)" icon={Globe2} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dReg} margin={{ top: 20, right: 30, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="fails" name="Failure Rate %" radius={[2, 2, 0, 0]}>
                   {dReg.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fails > 3 ? '#C81E1E' : '#D9B300'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>
    </div>
  );
}
