import React, { useState } from 'react';
import { useSEOData } from '../hooks/useSEOData';
import { Search, TrendingUp, Eye, AlertTriangle } from 'lucide-react';

const SEOIntelligence = () => {
  const [activeRegion, setActiveRegion] = useState('bali');
  const { data: seoData, isLoading, error } = useSEOData();

  if (isLoading) {
    return <div className="loading">Loading SEO intelligence data...</div>;
  }

  if (error) {
    return <div className="error">Failed to load SEO intelligence data</div>;
  }

  const regions = [
    { id: 'bali', label: '🏝️ Bali', name: 'Bali' },
    { id: 'kuta', label: '🏖️ Kuta', name: 'Kuta' }
  ];

  const currentData = seoData?.[activeRegion] || {
    quickWins: [],
    opportunities: [],
    competitorMovements: []
  };

  const QuickWinsCard = ({ wins }) => (
    <div className="module-card">
      <div className="module-title">
        <TrendingUp size={20} />
        Quick Wins
      </div>
      {wins.length > 0 ? (
        wins.map((win, index) => (
          <div key={index} className="metric-item">
            <span className="metric-label">{win.keyword}</span>
            <span className="metric-value">{win.impactEstimate}</span>
          </div>
        ))
      ) : (
        <div className="metric-item">
          <span className="metric-label">No quick wins identified</span>
          <span className="metric-value">-</span>
        </div>
      )}
    </div>
  );

  const OpportunitiesCard = ({ opportunities }) => (
    <div className="module-card">
      <div className="module-title">
        <Search size={20} />
        New Opportunities
      </div>
      {opportunities.length > 0 ? (
        opportunities.map((opp, index) => (
          <div key={index} className="metric-item">
            <span className="metric-label">{opp.keyword}</span>
            <span className="metric-value">{opp.revenuePotential}</span>
          </div>
        ))
      ) : (
        <div className="metric-item">
          <span className="metric-label">No new opportunities</span>
          <span className="metric-value">-</span>
        </div>
      )}
    </div>
  );

  const CompetitorMovementsCard = ({ movements }) => (
    <div className="module-card">
      <div className="module-title">
        <Eye size={20} />
        Competitor Movements
      </div>
      {movements.length > 0 ? (
        movements.map((move, index) => (
          <div key={index} className="metric-item">
            <span className="metric-label">{move.competitor}</span>
            <span className="metric-value">{move.opportunity}</span>
          </div>
        ))
      ) : (
        <div className="metric-item">
          <span className="metric-label">No competitor movements detected</span>
          <span className="metric-value">-</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="seo-intelligence">
      {/* Geographic Tabs */}
      <div className="geo-tabs">
        {regions.map(region => (
          <button
            key={region.id}
            className={`geo-tab ${activeRegion === region.id ? 'active' : ''}`}
            onClick={() => setActiveRegion(region.id)}
          >
            {region.label}
          </button>
        ))}
      </div>

      {/* SEO Data Grid */}
      <div className="module-grid">
        <QuickWinsCard wins={currentData.quickWins} />
        <OpportunitiesCard opportunities={currentData.opportunities} />
        <CompetitorMovementsCard movements={currentData.competitorMovements} />
      </div>

      {/* Additional Insights */}
      <div className="module-card">
        <div className="module-title">
          <AlertTriangle size={20} />
          Strategic Insights
        </div>
        <div className="metric-item">
          <span className="metric-label">Market Focus</span>
          <span className="metric-value">{regions.find(r => r.id === activeRegion)?.name} Primary</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Competitive Position</span>
          <span className="metric-value">Strong</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Growth Opportunity</span>
          <span className="metric-value">High</span>
        </div>
      </div>
    </div>
  );
};

export default SEOIntelligence;
