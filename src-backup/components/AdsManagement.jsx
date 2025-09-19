import React from 'react';
import { useAdsData } from '../hooks/useAdsData';
import { DollarSign, Zap, Link, Star, TrendingUp, AlertCircle } from 'lucide-react';

const AdsManagement = () => {
  const { data: adsData, isLoading, error } = useAdsData();

  if (isLoading) {
    return <div className="loading">Loading ads management data...</div>;
  }

  if (error) {
    return <div className="error">Failed to load ads management data</div>;
  }

  const data = adsData || {
    campaignHealth: [
      { name: 'VIARESORTS BRANDING', roas: 2.74, status: 'excellent' },
      { name: 'SEPTEMBER 2025 CAMPAIGN PM', roas: 1.84, status: 'good' },
      { name: 'BALI PACKAGES', roas: 2.15, status: 'good' },
      { name: 'KUTA PACKAGES', roas: 1.65, status: 'needs_attention' }
    ],
    optimizationQueue: [
      { campaign: 'VIARESORTS BRANDING', action: 'Scale budget by 50%', priority: 'High' },
      { campaign: 'KUTA PACKAGES', action: 'Review targeting', priority: 'Medium' },
      { campaign: 'BALI PACKAGES', action: 'Test new ad copy', priority: 'Medium' }
    ],
    crossPlatformAttribution: {
      googleDiscovery: 4405.83,
      metaConversion: 8645.14,
      crossPlatformROAS: 1.96,
      attributionGap: 'Google → Meta path'
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return <Star className="trend-up" size={16} />;
      case 'good':
        return <TrendingUp className="trend-up" size={16} />;
      case 'needs_attention':
        return <AlertCircle className="trend-down" size={16} />;
      default:
        return <AlertCircle className="trend-neutral" size={16} />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'high';
      case 'medium':
        return 'medium';
      default:
        return '';
    }
  };

  const CampaignHealthCard = () => (
    <div className="module-card">
      <div className="module-title">
        <DollarSign size={20} />
        Campaign Health
      </div>
      {data.campaignHealth.map((campaign, index) => (
        <div key={index} className="metric-item">
          <span className="metric-label">{campaign.name}</span>
          <span className="metric-value">
            {campaign.roas}:1 ROAS
            {getStatusIcon(campaign.status)}
          </span>
        </div>
      ))}
    </div>
  );

  const OptimizationQueueCard = () => (
    <div className="module-card">
      <div className="module-title">
        <Zap size={20} />
        Optimization Queue
      </div>
      {data.optimizationQueue.map((opt, index) => (
        <div key={index} className="metric-item">
          <span className="metric-label">{opt.campaign}</span>
          <span className="metric-value">
            <span className={`action-item ${getPriorityColor(opt.priority)}`}>
              {opt.priority}
            </span>
          </span>
        </div>
      ))}
    </div>
  );

  const CrossPlatformCard = () => (
    <div className="module-card">
      <div className="module-title">
        <Link size={20} />
        Cross-Platform Attribution
      </div>
      <div className="metric-item">
        <span className="metric-label">Google Discovery</span>
        <span className="metric-value">${data.crossPlatformAttribution.googleDiscovery.toLocaleString()}</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Meta Conversion</span>
        <span className="metric-value">${data.crossPlatformAttribution.metaConversion.toLocaleString()}</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Cross-Platform ROAS</span>
        <span className="metric-value">{data.crossPlatformAttribution.crossPlatformROAS}:1</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Attribution Gap</span>
        <span className="metric-value">{data.crossPlatformAttribution.attributionGap}</span>
      </div>
    </div>
  );

  return (
    <div className="ads-management">
      <div className="module-grid">
        <CampaignHealthCard />
        <OptimizationQueueCard />
        <CrossPlatformCard />
      </div>

      {/* Performance Insights */}
      <div className="module-card">
        <div className="module-title">
          <TrendingUp size={20} />
          Performance Insights
        </div>
        <div className="metric-item">
          <span className="metric-label">Overall ROAS</span>
          <span className="metric-value">
            <span className="status-indicator healthy"></span>
            2.15:1
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Budget Utilization</span>
          <span className="metric-value">
            <span className="status-indicator healthy"></span>
            85%
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Attribution Accuracy</span>
          <span className="metric-value">
            <span className="status-indicator warning"></span>
            Needs Improvement
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdsManagement;
