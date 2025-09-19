import React from 'react';
import { useDashboardData } from '../hooks/useDashboardData';

const ExecutiveSummary = () => {
  const { data: dashboardData, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <div className="executive-summary">
        <div className="loading">Loading executive summary...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="executive-summary">
        <div className="error">Failed to load executive summary data</div>
      </div>
    );
  }

  const summary = dashboardData?.executiveSummary || {
    portfolioHealth: 'Strong',
    dailyRevenue: 320,
    priorityAlerts: 10,
    actionsDue: 7
  };

  return (
    <div className="executive-summary">
      <div className="summary-item">
        <span className="summary-value">
          <span className="status-indicator healthy"></span>
          {summary.portfolioHealth}
        </span>
        <div className="summary-label">Portfolio Health</div>
      </div>
      
      <div className="summary-item">
        <span className="summary-value">${summary.dailyRevenue}</span>
        <div className="summary-label">Daily Revenue</div>
      </div>
      
      <div className="summary-item">
        <span className="summary-value">{summary.priorityAlerts}</span>
        <div className="summary-label">Priority Alerts</div>
      </div>
      
      <div className="summary-item">
        <span className="summary-value">{summary.actionsDue}</span>
        <div className="summary-label">Actions Due</div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
