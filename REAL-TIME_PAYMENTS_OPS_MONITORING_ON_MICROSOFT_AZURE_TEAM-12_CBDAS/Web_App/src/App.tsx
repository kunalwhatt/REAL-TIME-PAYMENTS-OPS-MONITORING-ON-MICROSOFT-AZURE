import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { BankAnalytics } from './pages/BankAnalytics';
import { PSPAnalytics } from './pages/PSPAnalytics';
import { RegionAnalytics } from './pages/RegionAnalytics';
import { FailureAnalytics } from './pages/FailureAnalytics';
import { LatencyAnalytics } from './pages/LatencyAnalytics';
import { AdvancedInsights } from './pages/AdvancedInsights';
import { RawData } from './pages/RawData';
import { ProjectDocs } from './pages/ProjectDocs';

export default function App() {
  const [page, setPage] = useState('overview');

  return (
    <Layout page={page} setPage={setPage}>
      {page === 'overview' && <Overview />}
      {page === 'bank' && <BankAnalytics />}
      {page === 'psp' && <PSPAnalytics />}
      {page === 'region' && <RegionAnalytics />}
      {page === 'failure' && <FailureAnalytics />}
      {page === 'latency' && <LatencyAnalytics />}
      {page === 'advanced' && <AdvancedInsights />}
      {page === 'data' && <RawData />}
      {page === 'docs' && <ProjectDocs />}
    </Layout>
  );
}
