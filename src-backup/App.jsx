import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('seo');

  const tabs = [
    { id: 'seo', label: '🔍 SEO Intelligence' },
    { id: 'website', label: '📊 Website Performance' },
    { id: 'ads', label: '💰 Ads Management' },
    { id: 'actions', label: '🎯 Action Queue' },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>🏨 Via Resorts Intelligence Dashboard</h1>
        <p>Unified SEO, Website & Ads Performance</p>
      </header>

      {/* Executive Summary */}
      <div className="executive-summary">
        <div className="summary-item">
          <span className="summary-value">Strong</span>
          <div className="summary-label">Portfolio Health</div>
        </div>
        <div className="summary-item">
          <span className="summary-value">$320</span>
          <div className="summary-label">Daily Revenue</div>
        </div>
        <div className="summary-item">
          <span className="summary-value">10</span>
          <div className="summary-label">Priority Alerts</div>
        </div>
        <div className="summary-item">
          <span className="summary-value">7</span>
          <div className="summary-label">Actions Due</div>
        </div>
      </div>

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
          {activeTab === 'seo' && (
            <div>
              <h2>SEO Intelligence</h2>
              <p>Bali and Kuta market analysis coming soon...</p>
            </div>
          )}
          {activeTab === 'website' && (
            <div>
              <h2>Website Performance</h2>
              <p>Traffic and conversion data coming soon...</p>
            </div>
          )}
          {activeTab === 'ads' && (
            <div>
              <h2>Ads Management</h2>
              <p>Campaign performance data coming soon...</p>
            </div>
          )}
          {activeTab === 'actions' && (
            <div>
              <h2>Action Queue</h2>
              <p>Priority actions coming soon...</p>
            </div>
          )}
        </main>
      </div>

      <footer className="timestamp">
        Last Updated: {new Date().toLocaleString()}
      </footer>
    </div>
  );
}

export default App;
