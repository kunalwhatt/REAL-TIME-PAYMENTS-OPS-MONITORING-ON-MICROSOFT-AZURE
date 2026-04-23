import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Building2, ShieldAlert, Clock } from 'lucide-react';

const bankVolumeData = [
  { name: 'HDFC', txns: 1250000, color: '#118DFF' },
  { name: 'SBI', txns: 980000, color: '#12239E' },
  { name: 'ICICI', txns: 850000, color: '#E66C37' },
  { name: 'Axis', txns: 620000, color: '#6B007B' },
  { name: 'Kotak', txns: 410000, color: '#E044A7' },
];

const bankSuccessData = [
  { name: 'HDFC', rate: 98.5, color: '#118DFF' },
  { name: 'SBI', rate: 92.1, color: '#12239E' },
  { name: 'ICICI', rate: 97.8, color: '#E66C37' },
  { name: 'Axis', rate: 98.2, color: '#6B007B' },
  { name: 'Kotak', rate: 96.5, color: '#E044A7' },
];

const bankFailureData = [
  { name: 'SBI', fails: 77420, color: '#C81E1E' },
  { name: 'HDFC', fails: 18750, color: '#D64550' },
  { name: 'ICICI', fails: 18700, color: '#E4757C' },
  { name: 'Kotak', fails: 14350, color: '#EA959A' },
  { name: 'Axis', fails: 11160, color: '#F0B6B8' },
];

const bankLatencyData = [
  { name: 'SBI', latency: 450, color: '#D9B300' },
  { name: 'Kotak', latency: 320, color: '#E1C440' },
  { name: 'ICICI', latency: 280, color: '#E8CA65' },
  { name: 'Axis', latency: 210, color: '#F0D48D' },
  { name: 'HDFC', latency: 195, color: '#F8DFB5' },
];

export function BankAnalytics() {
  const dVol = bankVolumeData;
  const dSuc = bankSuccessData;
  const dFail = bankFailureData;
  const dLat = bankLatencyData;

  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-4">
      
      <div className="mb-2">
        <h2 className="text-2xl font-[600] text-[#252423] tracking-tight">Bank Analytics</h2>
        <p className="text-[13px] text-[#605E5C]">Node performance and transaction routing by bank</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Transactions by Bank */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Transactions by Bank Node" icon={Building2} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dVol} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#EDEBE9" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} tickFormatter={(val) => val > 1000 ? `${(val/1000).toFixed(0)}k` : val}/>
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#252423', fontWeight: 600 }} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="txns" name="Transactions" radius={[0, 2, 2, 0]}>
                  {dVol.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Success Rate by Bank */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Success Rate by Bank Node (%)" icon={Building2} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dSuc} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="rate" name="Success Rate %" radius={[2, 2, 0, 0]}>
                  {dSuc.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Failures per Bank */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Total Failures by Bank Node" icon={ShieldAlert} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dFail} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#EDEBE9" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} tickFormatter={(val) => val > 1000 ? `${(val/1000).toFixed(0)}k` : val} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#252423', fontWeight: 600 }} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="fails" name="Failure Count" radius={[0, 2, 2, 0]}>
                   {dFail.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Average Latency by Bank */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Average Latency by Bank Node (ms)" icon={Clock} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dLat} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="latency" name="Avg Latency (ms)" radius={[2, 2, 0, 0]}>
                  {dLat.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
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
