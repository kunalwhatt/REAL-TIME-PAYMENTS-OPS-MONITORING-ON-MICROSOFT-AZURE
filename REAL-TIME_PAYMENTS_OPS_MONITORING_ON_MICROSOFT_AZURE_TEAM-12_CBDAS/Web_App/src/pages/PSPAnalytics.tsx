import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Wallet, ShieldAlert } from 'lucide-react';

const pspVolumeData = [
  { name: 'PhonePe', txns: 1550000, color: '#118DFF' }, // PhonePe Purple -> Blue
  { name: 'GPay', txns: 1350000, color: '#12239E' }, // GPay Blue -> Deep
  { name: 'Paytm', txns: 650000, color: '#E66C37' }, // Paytm Blue -> Orange
  { name: 'CRED', txns: 250000, color: '#00B7C3' }, // Cred Black -> Teal
];

const pspSuccessData = [
  { name: 'PhonePe', rate: 98.2, color: '#118DFF' },
  { name: 'GPay', rate: 97.9, color: '#12239E' },
  { name: 'Paytm', rate: 94.5, color: '#E66C37' },
  { name: 'CRED', rate: 99.1, color: '#00B7C3' },
];

const pspFailureData = [
  { name: 'Paytm', rate: 5.5, color: '#C81E1E' },
  { name: 'GPay', rate: 2.1, color: '#E4757C' },
  { name: 'PhonePe', rate: 1.8, color: '#D64550' },
  { name: 'CRED', rate: 0.9, color: '#F0B6B8' },
];

export function PSPAnalytics() {
  const dVol = pspVolumeData;
  const dSuc = pspSuccessData;
  const dFail = pspFailureData;

  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-4">
      
      <div className="mb-2">
        <h2 className="text-2xl font-[600] text-[#252423] tracking-tight">PSP Analytics</h2>
        <p className="text-[13px] text-[#605E5C]">Payment Service Provider performance and distributions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Transactions by PSP */}
        <Card className="min-h-[400px] flex flex-col lg:col-span-2">
          <SectionTitle title="Transactions by PSP" icon={Wallet} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dVol} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} tickFormatter={(val) => val > 1000 ? `${(val/1000000).toFixed(1)}M` : val} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="txns" name="Transactions" radius={[2, 2, 0, 0]}>
                  {dVol.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Success Rate by PSP */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Success Rate by PSP (%)" icon={Wallet} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dSuc} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis domain={[90, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} />
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

        {/* Failure Rate by PSP */}
        <Card className="min-h-[400px] flex flex-col">
          <SectionTitle title="Failure Rate by PSP (%)" icon={ShieldAlert} />
          <div className="flex-1 w-full min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dFail} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEBE9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C', fontWeight: 600 }} dy={10}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#605E5C' }} />
                <Tooltip cursor={{fill: '#F3F2F1'}} contentStyle={{ borderRadius: '2px', fontSize: '12px', borderColor: '#EDEBE9' }} />
                <Bar dataKey="rate" name="Failure Rate %" radius={[2, 2, 0, 0]}>
                   {dFail.map((entry, index) => (
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
