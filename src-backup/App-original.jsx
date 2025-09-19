import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ExecutiveSummary from './components/ExecutiveSummary';
import SEOIntelligence from './components/SEOIntelligence';
import WebsitePerformance from './components/WebsitePerformance';
import AdsManagement from './components/AdsManagement';
import ActionQueue from './components/ActionQueue';
import './App.css';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    },
  },
});

function App() {
  const [activeTab, setActiveTab] = useState('seo');

  const tabs = [
    { id: 'seo', label: '🔍 SEO Intelligence', component: SEOIntelligence },
    { id: 'website', label: '📊 Website Performance', component: WebsitePerformance },
    { id: 'ads', label: '💰 Ads Management', component: AdsManagement },
    { id: 'actions', label: '🎯 Action Queue', component: ActionQueue },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="header">
          <h1>🏨 Via Resorts Intelligence Dashboard</h1>
          <p>Unified SEO, Website & Ads Performance</p>
        </header>

        <ExecutiveSummary />

        <div className="dashboard-container">
          <nav className="tab-navigation">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <main className="tab-content">
            {ActiveComponent && <ActiveComponent />}
          </main>
        </div>

        <footer className="timestamp">
          Last Updated: {new Date().toLocaleString()}
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;