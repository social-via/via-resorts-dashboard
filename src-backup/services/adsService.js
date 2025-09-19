import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adsService = {
  async getAdsManagement() {
    try {
      const response = await api.get('/ads/management');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch ads management data:', error);
      // Return mock data for development
      return {
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
    }
  },

  async getCampaignPerformance(campaignId) {
    try {
      const response = await api.get(`/ads/campaigns/${campaignId}/performance`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch campaign performance:', error);
      throw error;
    }
  },

  async updateCampaignBudget(campaignId, budget) {
    try {
      const response = await api.put(`/ads/campaigns/${campaignId}/budget`, { budget });
      return response.data;
    } catch (error) {
      console.error('Failed to update campaign budget:', error);
      throw error;
    }
  },

  async getOptimizationRecommendations() {
    try {
      const response = await api.get('/ads/optimization-recommendations');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch optimization recommendations:', error);
      throw error;
    }
  }
};
