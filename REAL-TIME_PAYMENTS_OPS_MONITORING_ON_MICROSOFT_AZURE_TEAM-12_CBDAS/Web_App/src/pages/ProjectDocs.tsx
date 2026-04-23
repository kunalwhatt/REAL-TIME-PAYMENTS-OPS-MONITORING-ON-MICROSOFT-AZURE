import React from 'react';
import { Card, SectionTitle } from '../components/Shared';
import { FileText, Users, Code, Server, Database, LineChart, Cpu, Zap, Link } from 'lucide-react';

export function ProjectDocs() {
  return (
    <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-6">
      <div className="mb-4">
        <h2 className="text-[28px] font-light text-[#252423] tracking-tight">Project Live Documentation</h2>
        <p className="text-[14px] text-[#605E5C] font-semibold mt-1">Real-Time Payments Ops Monitoring on Microsoft Azure</p>
      </div>

      <Card className="p-8 border-l-4 border-[#118DFF]">
        <div className="flex flex-col gap-6">
          <div>
             <h1 className="text-[24px] font-bold text-[#252423] mb-4">Project Report & Abstract</h1>
             <p className="text-[14px] text-[#323130] leading-relaxed">
               The financial industry has undergone a significant transformation with the introduction of digital payment systems like UPI. These systems handle massive transaction volumes simultaneously. Any failure can lead to delays, financial losses, and a loss of trust. Monitoring such a distributed system (User UI, PSPs, Bank Servers) is complex. 
               <br/><br/>
               To address these challenges, we built a <strong>cloud-native, event-driven, real-time observability platform</strong> using Microsoft Azure. The system generates synthetic transaction data, streams it in real-time, processes it using stream analytics, and serves it to interactive Power BI style dashboards for live anomaly detection and operational monitoring.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-4 border-t border-[#EDEBE9]">
            <div>
              <div className="flex items-center gap-2 font-bold text-[#252423] mb-3">
                <Users className="w-5 h-5 text-[#118DFF]" /> Team Members
              </div>
              <ul className="text-[14px] text-[#605E5C] space-y-2">
                <li><strong className="text-[#323130]">Kunal Kumar Dappu</strong> - 2320030167</li>
                <li><strong className="text-[#323130]">Vaishnavi Avva</strong> - 2320030450</li>
                <li><strong className="text-[#323130]">Sasidhar Gattineni</strong> - 2320030275</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-[#252423] mb-3">
                <Building2 className="w-5 h-5 text-[#118DFF]" /> Institution
              </div>
              <ul className="text-[14px] text-[#605E5C] space-y-2">
                <li><strong className="text-[#323130]">K L (Deemed to be) University</strong></li>
                <li>Department of Computer Science Engineering</li>
                <li className="mt-2 text-[12px] italic">Guides: B. Prathyusha & Dr P. Krishna Kishore</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 mt-2">
        <SectionTitle title="Azure Data Pipeline Architecture" icon={Server} />
        
        <div className="w-full overflow-x-auto py-8">
          <div className="min-w-[900px] flex items-center justify-between gap-4">
            
            {/* Stage 1: Producer */}
            <div className="flex flex-col items-center w-40 text-center gap-3">
              <div className="w-16 h-16 rounded bg-[#F3F2F1] border border-[#D2D0CE] flex items-center justify-center shadow-sm">
                <Code className="w-8 h-8 text-[#605E5C]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#252423]">1. Data Generator</div>
                <div className="text-[11px] text-[#605E5C] mt-1">Python Synthetic UPI Event Generator</div>
              </div>
            </div>

            <Link className="text-[#A19F9D]" />

            {/* Stage 2: Ingestion */}
            <div className="flex flex-col items-center w-40 text-center gap-3">
              <div className="w-16 h-16 rounded bg-[#E1DFDD] border border-[#118DFF] flex items-center justify-center shadow-sm border-b-4">
                <Zap className="w-8 h-8 text-[#118DFF]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#252423]">2. Event Ingestion</div>
                <div className="text-[11px] text-[#605E5C] mt-1">Azure Event Hubs (High-Throughput)</div>
              </div>
            </div>

            <Link className="text-[#A19F9D]" />

            {/* Stage 3: Processing */}
            <div className="flex flex-col items-center w-40 text-center gap-3">
              <div className="w-16 h-16 rounded bg-[#DFF6DD] border border-[#107C10] flex items-center justify-center shadow-sm border-b-4">
                <Cpu className="w-8 h-8 text-[#107C10]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#252423]">3. Stream Processing</div>
                <div className="text-[11px] text-[#605E5C] mt-1">Azure Stream Analytics (SQL Aggregates)</div>
              </div>
            </div>

            <Link className="text-[#A19F9D]" />

            {/* Stage 4: Storage */}
            <div className="flex flex-col items-center w-48 text-center gap-3">
              <div className="w-20 h-20 rounded bg-[#F3F2F1] border border-[#A19F9D] flex flex-col items-center justify-center shadow-sm gap-1">
                <Database className="w-6 h-6 text-[#252423]" />
                <div className="text-[9px] font-semibold text-[#605E5C] uppercase tracking-wider">ADLS Gen 2</div>
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#252423]">4. Data Lake Storage</div>
                <div className="text-[11px] text-[#605E5C] mt-1">Raw Zone, Curated Zone, and KPI Zone</div>
              </div>
            </div>

            <Link className="text-[#A19F9D]" />

            {/* Stage 5: Serving & Viz */}
            <div className="flex flex-col items-center w-40 text-center gap-3">
              <div className="w-16 h-16 rounded bg-[#FFF4CE] border border-[#D9B300] flex items-center justify-center shadow-sm border-b-4">
                <LineChart className="w-8 h-8 text-[#D9B300]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#252423]">5. Analytics & Viz</div>
                <div className="text-[11px] text-[#605E5C] mt-1">Azure Synapse & Ops Dashboard (Power BI Replica)</div>
              </div>
            </div>

          </div>

          <div className="mt-8 bg-[#F3F2F1] p-4 rounded text-[13px] text-[#605E5C] border border-[#EDEBE9]">
            <strong>Incident Alerting Pipeline:</strong> Stream Analytics simultaneously pushes critical metric breaches to Azure Logic Apps and Functions, dropping alerts into CosmosDB and notifying Ops Teams via Webhooks.
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <Card className="p-6">
          <SectionTitle title="Technology Stack Applied" icon={Code} />
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <div className="w-1 bg-[#118DFF] rounded-full shrink-0" />
              <div>
                <div className="font-bold text-[#252423] text-[14px]">Python Synthetic Generator</div>
                <div className="text-[13px] text-[#605E5C] mt-1">Written to simulate UPI transaction flows, probabilities (95% success, timeouts, invalid PIN routing), latency delays, and format payloads gracefully before streaming.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-[#107C10] rounded-full shrink-0" />
              <div>
                <div className="font-bold text-[#252423] text-[14px]">Azure Event Hubs & Stream Analytics</div>
                <div className="text-[13px] text-[#605E5C] mt-1">Event Hubs secures ingest partitioning at scalable speeds without loss. Stream Analytics applies Tumbling Windows over SQL to bucket latencies and failures into 1-minute KPIs.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-[#8B5CF6] rounded-full shrink-0" />
              <div>
                <div className="font-bold text-[#252423] text-[14px]">React/Vite Real-Time Dashboard</div>
                <div className="text-[13px] text-[#605E5C] mt-1">The current UI serves as the immediate front-end observability portal bridging the gap of Synapse Analytics datasets into live React Recharts instances modeling a PowerBI structure.</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
           <SectionTitle title="Project Outcomes & KPIs Modeled" icon={Server} />
           <div className="mt-4 text-[13px] text-[#605E5C] leading-relaxed">
             <p className="mb-3">
               The implementation successfully isolated high-frequency transactional anomalies into direct alerts without human intervention. Instead of batch-based processing, the deployment modeled in this dashboard reflects actual **sub-second streaming analytics**.
             </p>
             <ul className="list-disc pl-5 space-y-2">
               <li><strong className="text-[#323130]">Scalability:</strong> Handling simulated millions of UPI JSON objects effortlessly through Event Hub multi-partitioning.</li>
               <li><strong className="text-[#323130]">Live Failure Analytics:</strong> Immediate breakdowns of Reason Codes (U19, U16, U52) routed actively against Bank & PSP origin points.</li>
               <li><strong className="text-[#323130]">Low-Latency Observability:</strong> Immediate insight delivery identifying Network vs Application-level CBS latency blockages across India's regional zones.</li>
               <li><strong className="text-[#323130]">Architecture Fidelity:</strong> Deep modularity separating Ingest, Storage, Compute, and Display resources entirely.</li>
             </ul>
           </div>
        </Card>
      </div>

    </div>
  );
}

// Ensure proper import inside App.tsx or wherever this is routed
function Building2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
}
