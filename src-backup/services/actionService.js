import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const actionService = {
  async getActionQueue() {
    try {
      const response = await api.get('/actions/queue');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch action queue:', error);
      // Return mock data for development
      return {
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
    }
  },

  async markActionComplete(actionId) {
    try {
      const response = await api.put(`/actions/${actionId}/complete`);
      return response.data;
    } catch (error) {
      console.error('Failed to mark action as complete:', error);
      throw error;
    }
  },

  async createAction(action) {
    try {
      const response = await api.post('/actions', action);
      return response.data;
    } catch (error) {
      console.error('Failed to create action:', error);
      throw error;
    }
  },

  async getActionHistory() {
    try {
      const response = await api.get('/actions/history');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch action history:', error);
      throw error;
    }
  }
};
