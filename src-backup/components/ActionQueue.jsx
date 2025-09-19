import React from 'react';
import { useActionQueueData } from '../hooks/useActionQueueData';
import { Calendar, Clock, Target, CheckCircle } from 'lucide-react';

const ActionQueue = () => {
  const { data: actionData, isLoading, error } = useActionQueueData();

  if (isLoading) {
    return <div className="loading">Loading action queue data...</div>;
  }

  if (error) {
    return <div className="error">Failed to load action queue data</div>;
  }

  const data = actionData || {
    today: [
      {
        category: 'SEO Quick Win',
        action: 'Optimize for "bali packages australia" - Not ranked',
        impact: 'Conversion rate boost: 20-30%',
        priority: 'high',
        revenueImpact: '>$500/month',
        executionTime: '<2 hours',
        strategicContext: 'Immediate ranking improvement opportunity'
      },
      {
        category: 'Ads Optimization',
        action: 'Scale VIARESORTS BRANDING budget by 50% - excellent performance',
        impact: '+$830 additional revenue',
        priority: 'high',
        revenueImpact: '>$500/month',
        executionTime: '<2 hours',
        strategicContext: 'Campaign performance optimization'
      },
      {
        category: 'SEO Quick Win',
        action: 'Optimize for "kuta packages australia" - Not ranked',
        impact: 'Conversion rate boost: 20-30%',
        priority: 'high',
        revenueImpact: '>$500/month',
        executionTime: '<2 hours',
        strategicContext: 'Immediate ranking improvement opportunity'
      }
    ],
    thisWeek: [
      {
        category: 'Ads Testing',
        action: 'Test new ad copy for BALI PACKAGES campaign',
        impact: 'ROAS improvement, conversion rate increase',
        priority: 'medium',
        revenueImpact: '$200-500/month',
        executionTime: '2-8 hours',
        strategicContext: 'A/B testing and validation required',
        successMetrics: 'ROAS improvement, conversion rate increase'
      },
      {
        category: 'SEO Testing',
        action: 'Test keyword targeting for "bali honeymoon packages"',
        impact: '$1,200/month potential',
        priority: 'medium',
        revenueImpact: '$200-500/month',
        executionTime: '4-8 hours',
        strategicContext: 'New keyword opportunity validation',
        successMetrics: 'Ranking improvement, organic traffic increase'
      }
    ],
    thisMonth: [
      {
        category: 'Strategic Initiative',
        action: 'Bali Market Expansion - Complete SEO Strategy',
        impact: 'High revenue potential - $2,000+/month',
        priority: 'normal',
        revenueImpact: '$2,000+/month',
        executionTime: '2-4 weeks',
        strategicContext: 'Geographic expansion to capture new market',
        successMetrics: 'Market penetration, brand awareness, booking volume'
      },
      {
        category: 'SEO Strategy',
        action: 'Develop comprehensive strategy for 5 high-impact keywords',
        impact: 'High revenue potential - $1,500+/month',
        priority: 'normal',
        revenueImpact: '$1,500+/month',
        executionTime: '2-3 weeks',
        strategicContext: 'Long-term organic growth strategy',
        successMetrics: 'Top 3 rankings, organic traffic growth, conversion rate improvement'
      }
    ]
  };

  const ActionItem = ({ action }) => (
    <div className={`action-item ${action.priority}`}>
      <div className="action-category">{action.category}</div>
      <div className="action-description">{action.action}</div>
      <div className="action-impact">{action.impact}</div>
      <div className="action-details">
        <small>Revenue Impact: {action.revenueImpact} | Time: {action.executionTime}</small>
        <br />
        <small>Context: {action.strategicContext}</small>
        {action.successMetrics && (
          <>
            <br />
            <small>Success Metrics: {action.successMetrics}</small>
          </>
        )}
      </div>
    </div>
  );

  const ActionSection = ({ title, icon: Icon, actions, timeFrame }) => (
    <div className="queue-section">
      <div className="queue-title">
        <Icon size={20} />
        {title}
      </div>
      {actions.length > 0 ? (
        actions.map((action, index) => (
          <ActionItem key={index} action={action} index={index} />
        ))
      ) : (
        <div className="action-item">
          <div className="action-category">No Actions</div>
          <div className="action-description">No actions scheduled for {timeFrame.toLowerCase()}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="action-queue">
      <ActionSection
        title="Today"
        icon={Calendar}
        actions={data.today}
        timeFrame="today"
      />
      <ActionSection
        title="This Week"
        icon={Clock}
        actions={data.thisWeek}
        timeFrame="this week"
      />
      <ActionSection
        title="This Month"
        icon={Target}
        actions={data.thisMonth}
        timeFrame="this month"
      />
    </div>
  );
};

export default ActionQueue;
