import React from 'react';
import { useWebsiteData } from '../hooks/useWebsiteData';
import { BarChart3, FileText, Users, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const WebsitePerformance = () => {
  const { data: websiteData, isLoading, error } = useWebsiteData();

  if (isLoading) {
    return <div className="loading">Loading website performance data...</div>;
  }

  if (error) {
    return <div className="error">Failed to load website performance data</div>;
  }

  const data = websiteData || {
    trafficHealth: {
      dailyVisits: 1250,
      targetVisits: 1200,
      conversionRate: 2.1,
      bounceRate: 45.2,
      avgSessionDuration: '3:24'
    },
    contentPerformance: [
      { page: '/bali-resorts', visits: 450, conversions: 12 },
      { page: '/kuta-resorts', visits: 320, conversions: 8 },
      { page: '/packages', visits: 280, conversions: 6 },
      { page: '/deals', visits: 190, conversions: 4 }
    ],
    attributionAnalysis: {
      googleDiscovery: 45,
      metaConversion: 90,
      directBooking: 12,
      emailMarketing: 8
    }
  };

  const getTrendIcon = (current, target) => {
    if (current > target) return <TrendingUp className="trend-up" size={16} />;
    if (current < target) return <TrendingDown className="trend-down" size={16} />;
    return <Minus className="trend-neutral" size={16} />;
  };

  const TrafficHealthCard = () => (
    <div className="module-card">
      <div className="module-title">
        <BarChart3 size={20} />
        Traffic Health
      </div>
      <div className="metric-item">
        <span className="metric-label">Daily Visits</span>
        <span className="metric-value">
          {data.trafficHealth.dailyVisits}
          <span className="metric-trend">
            {getTrendIcon(data.trafficHealth.dailyVisits, data.trafficHealth.targetVisits)}
          </span>
        </span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Target Visits</span>
        <span className="metric-value">{data.trafficHealth.targetVisits}</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Conversion Rate</span>
        <span className="metric-value">{data.trafficHealth.conversionRate}%</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Bounce Rate</span>
        <span className="metric-value">{data.trafficHealth.bounceRate}%</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Avg Session Duration</span>
        <span className="metric-value">{data.trafficHealth.avgSessionDuration}</span>
      </div>
    </div>
  );

  const ContentPerformanceCard = () => (
    <div className="module-card">
      <div className="module-title">
        <FileText size={20} />
        Content Performance
      </div>
      {data.contentPerformance.map((page, index) => (
        <div key={index} className="metric-item">
          <span className="metric-label">{page.page}</span>
          <span className="metric-value">{page.visits} visits, {page.conversions} conv</span>
        </div>
      ))}
    </div>
  );

  const AttributionCard = () => (
    <div className="module-card">
      <div className="module-title">
        <Users size={20} />
        Attribution Analysis
      </div>
      <div className="metric-item">
        <span className="metric-label">Google Discovery</span>
        <span className="metric-value">{data.attributionAnalysis.googleDiscovery}%</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Meta Conversion</span>
        <span className="metric-value">{data.attributionAnalysis.metaConversion}%</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Direct Booking</span>
        <span className="metric-value">{data.attributionAnalysis.directBooking}%</span>
      </div>
      <div className="metric-item">
        <span className="metric-label">Email Marketing</span>
        <span className="metric-value">{data.attributionAnalysis.emailMarketing}%</span>
      </div>
    </div>
  );

  return (
    <div className="website-performance">
      <div className="module-grid">
        <TrafficHealthCard />
        <ContentPerformanceCard />
        <AttributionCard />
      </div>

      {/* Performance Insights */}
      <div className="module-card">
        <div className="module-title">
          <TrendingUp size={20} />
          Performance Insights
        </div>
        <div className="metric-item">
          <span className="metric-label">Traffic Status</span>
          <span className="metric-value">
            <span className="status-indicator healthy"></span>
            Above Target
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Conversion Health</span>
          <span className="metric-value">
            <span className="status-indicator healthy"></span>
            Strong
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Attribution Gap</span>
          <span className="metric-value">Google → Meta path</span>
        </div>
      </div>
    </div>
  );
};

export default WebsitePerformance;
