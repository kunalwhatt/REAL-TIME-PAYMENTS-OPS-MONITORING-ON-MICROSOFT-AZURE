import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { List } from 'lucide-react';

const baseMockDataset = [
  { id: 'TXN-9021', time: '2026-03-07 10:41:22', payer: 'HDFC', payee: 'SBI', psp: 'PhonePe', status: 'SUCCESS', latency: 145, region: 'South' },
  { id: 'TXN-9022', time: '2026-03-07 10:41:23', payer: 'ICICI', payee: 'Axis', psp: 'GPay', status: 'SUCCESS', latency: 210, region: 'North' },
  { id: 'TXN-9023', time: '2026-03-07 10:41:23', payer: 'SBI', payee: 'HDFC', psp: 'Paytm', status: 'FAILURE', latency: 1205, region: 'East' },
  { id: 'TXN-9024', time: '2026-03-07 10:41:24', payer: 'Axis', payee: 'Kotak', psp: 'CRED', status: 'SUCCESS', latency: 180, region: 'West' },
  { id: 'TXN-9025', time: '2026-03-07 10:41:25', payer: 'HDFC', payee: 'ICICI', psp: 'PhonePe', status: 'SUCCESS', latency: 310, region: 'Central' },
  { id: 'TXN-9026', time: '2026-03-07 10:41:26', payer: 'Kotak', payee: 'SBI', psp: 'PhonePe', status: 'FAILURE', latency: 450, region: 'South' },
  { id: 'TXN-9027', time: '2026-03-07 10:41:27', payer: 'SBI', payee: 'Axis', psp: 'GPay', status: 'SUCCESS', latency: 190, region: 'North' },
];

export function RawData() {
  const filteredData = baseMockDataset;

  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
      <div className="mb-2">
        <h2 className="text-2xl font-[600] text-[#252423] tracking-tight">Raw Data Table</h2>
        <p className="text-[13px] text-[#605E5C]">Real-time transactional data logs stream</p>
      </div>

      <Card className="flex flex-col">
          <SectionTitle title="Live Transaction Logs" icon={List} />
          <div className="flex-1 overflow-x-auto mt-4 px-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EDEBE9] text-[12px] text-[#605E5C] bg-[#F8F8F8]">
                  <th className="py-3 px-4 font-semibold rounded-tl">Transaction ID</th>
                  <th className="py-3 px-4 font-semibold">Timestamp UTC</th>
                  <th className="py-3 px-4 font-semibold">Payer Bank</th>
                  <th className="py-3 px-4 font-semibold">Payee Bank</th>
                  <th className="py-3 px-4 font-semibold">PSP</th>
                  <th className="py-3 px-4 font-semibold">Region</th>
                  <th className="py-3 px-4 font-semibold">Latency (ms)</th>
                  <th className="py-3 px-4 font-semibold rounded-tr">Status</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-[#252423]">
                {filteredData.length === 0 ? (
                   <tr>
                     <td colSpan={8} className="py-8 text-center text-[#605E5C]">No transaction logs match the selected filters.</td>
                   </tr>
                ) : (
                  filteredData.map((row, i) => (
                    <tr key={i} className="border-b border-[#F3F2F1] hover:bg-[#F8F8F8] transition-colors">
                      <td className="py-3 px-4 font-mono text-[#118DFF]">{row.id}</td>
                      <td className="py-3 px-4">{row.time}</td>
                      <td className="py-3 px-4">{row.payer}</td>
                      <td className="py-3 px-4">{row.payee}</td>
                      <td className="py-3 px-4">{row.psp}</td>
                      <td className="py-3 px-4">{row.region}</td>
                      <td className={`py-3 px-4 ${row.latency > 1000 ? 'text-[#D9B300] font-semibold' : ''}`}>{row.latency}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 flex w-fit items-center text-[11px] font-bold rounded-sm ${row.status === 'SUCCESS' ? 'bg-[#DFF6DD] text-[#107C10]' : 'bg-[#FDE7E9] text-[#A4262C]'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
      </Card>
    </div>
  );
}
