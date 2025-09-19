import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const websiteService = {
  async getWebsitePerformance() {
    try {
      const response = await api.get('/website/performance');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch website performance:', error);
      // Return mock data for development
      return {
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
    }
  },

  async getPageAnalytics(page) {
    try {
      const response = await api.get(`/website/analytics/${encodeURIComponent(page)}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch page analytics:', error);
      throw error;
    }
  },

  async getConversionFunnel() {
    try {
      const response = await api.get('/website/conversion-funnel');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch conversion funnel:', error);
      throw error;
    }
  }
};
