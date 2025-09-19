import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dashboardService = {
  async getExecutiveSummary() {
    try {
      const response = await api.get('/dashboard/executive-summary');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch executive summary:', error);
      // Return mock data for development
      return {
        executiveSummary: {
          portfolioHealth: 'Strong',
          dailyRevenue: 320,
          priorityAlerts: 10,
          actionsDue: 7
        }
      };
    }
  },

  async getDashboardData() {
    try {
      const response = await api.get('/dashboard/data');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
      throw error;
    }
  }
};
