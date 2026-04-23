import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { List, Search, Filter } from 'lucide-react';

const mockTransactions = [
  { id: 'TXN10021', time: '10:42:12', payer: 'HDFC', payee: 'SBI', psp: 'GPay', status: 'SUCCESS', latency: '420ms', amount: '₹500.00' },
  { id: 'TXN10022', time: '10:42:13', payer: 'ICICI', payee: 'Axis', psp: 'PhonePe', status: 'FAILURE', latency: '850ms', amount: '₹1200.00' },
  { id: 'TXN10023', time: '10:42:13', payer: 'SBI', payee: 'Kotak', psp: 'Paytm', status: 'SUCCESS', latency: '310ms', amount: '₹250.00' },
  { id: 'TXN10024', time: '10:42:14', payer: 'HDFC', payee: 'ICICI', psp: 'GPay', status: 'SUCCESS', latency: '405ms', amount: '₹15,000.00' },
  { id: 'TXN10025', time: '10:42:15', payer: 'Kotak', payee: 'SBI', psp: 'PhonePe', status: 'FAILURE', latency: '1205ms', amount: '₹8,450.00' },
  { id: 'TXN10026', time: '10:42:15', payer: 'Axis', payee: 'HDFC', psp: 'GPay', status: 'SUCCESS', latency: '210ms', amount: '₹120.00' },
  { id: 'TXN10027', time: '10:42:16', payer: 'ICICI', payee: 'SBI', psp: 'Paytm', status: 'SUCCESS', latency: '350ms', amount: '₹4,500.00' },
  { id: 'TXN10028', time: '10:42:16', payer: 'SBI', payee: 'HDFC', psp: 'Other', status: 'SUCCESS', latency: '415ms', amount: '₹950.00' },
  { id: 'TXN10029', time: '10:42:17', payer: 'HDFC', payee: 'Axis', psp: 'GPay', status: 'FAILURE', latency: '980ms', amount: '₹2,200.00' },
  { id: 'TXN10030', time: '10:42:18', payer: 'Kotak', payee: 'ICICI', psp: 'PhonePe', status: 'SUCCESS', latency: '330ms', amount: '₹18,000.00' },
];

export function Transactions() {
  return (
    <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-5 md:gap-6">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-slate-800">UPI Transaction Logs</h2>
        <p className="text-sm text-slate-500">Live stream of transactions passing through the Azure Event Hubs ingestion layer.</p>
      </div>

      <Card className="min-h-[600px] flex flex-col">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <SectionTitle title="Real-Time Feed" icon={List} tag="Live" />
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search TXN ID..." className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto" />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-lg border border-slate-100">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Txn ID</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Timestamp</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Payer → Payee</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">PSP</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Latency</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockTransactions.map((txn) => (
                <tr key={txn.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-mono text-slate-600 font-medium text-xs">{txn.id}</td>
                  <td className="p-4 text-slate-500 font-medium">{txn.time}</td>
                  <td className="p-4 font-bold text-slate-900">{txn.amount}</td>
                  <td className="p-4 text-slate-600 font-medium">
                    {txn.payer} <span className="text-slate-300 mx-1">→</span> {txn.payee}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-semibold">{txn.psp}</span>
                  </td>
                  <td className="p-4">
                    {txn.status === 'SUCCESS' ? (
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold tracking-wide border border-emerald-100">SUCCESS</span>
                    ) : (
                      <span className="px-2.5 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold tracking-wide border border-red-100">FAILURE</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`font-semibold ${parseInt(txn.latency) > 800 ? 'text-amber-500' : 'text-slate-600'}`}>{txn.latency}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-sm text-slate-500 pt-4 border-t border-slate-100">
          <div className="font-medium">Showing 10 of 12,402 past minute records</div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 font-medium border border-slate-200 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 font-medium border border-slate-200 rounded bg-white hover:bg-slate-50">Next</button>
          </div>
        </div>
      </Card>
    </div>
  )
}
