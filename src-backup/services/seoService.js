import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const seoService = {
  async getSEOIntelligence() {
    try {
      const response = await api.get('/seo/intelligence');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch SEO intelligence:', error);
      // Return mock data for development - Bali/Kuta focus as per strategy
      return {
        bali: {
          quickWins: [
            { keyword: 'bali packages australia', impactEstimate: 'Conversion rate boost: 20-30%' },
            { keyword: 'bali resort deals', impactEstimate: 'Revenue potential: $2,000+/month' },
            { keyword: 'bali luxury resorts', impactEstimate: 'Organic traffic: +500 visitors/month' }
          ],
          opportunities: [
            { keyword: 'bali honeymoon packages', revenuePotential: '$1,200/month potential' },
            { keyword: 'bali family resorts', revenuePotential: '$800/month potential' },
            { keyword: 'bali beach resorts', revenuePotential: '$600/month potential' },
            { keyword: 'bali spa resorts', revenuePotential: '$400/month potential' },
            { keyword: 'bali all inclusive', revenuePotential: '$300/month potential' }
          ],
          competitorMovements: [
            { competitor: 'Competitor A', opportunity: 'New keyword: bali eco resorts' },
            { competitor: 'Competitor B', opportunity: 'New keyword: bali yoga retreats' },
            { competitor: 'Competitor C', opportunity: 'New keyword: bali cultural tours' },
            { competitor: 'Competitor D', opportunity: 'New keyword: bali adventure tours' },
            { competitor: 'Competitor E', opportunity: 'New keyword: bali wellness retreats' }
          ]
        },
        kuta: {
          quickWins: [
            { keyword: 'kuta packages australia', impactEstimate: 'Conversion rate boost: 20-30%' },
            { keyword: 'kuta resort deals', impactEstimate: 'Revenue potential: $1,500+/month' },
            { keyword: 'kuta luxury resorts', impactEstimate: 'Organic traffic: +300 visitors/month' }
          ],
          opportunities: [
            { keyword: 'kuta honeymoon packages', revenuePotential: '$900/month potential' },
            { keyword: 'kuta family resorts', revenuePotential: '$600/month potential' },
            { keyword: 'kuta beach resorts', revenuePotential: '$500/month potential' },
            { keyword: 'kuta spa resorts', revenuePotential: '$350/month potential' },
            { keyword: 'kuta all inclusive', revenuePotential: '$250/month potential' }
          ],
          competitorMovements: [
            { competitor: 'Competitor A', opportunity: 'New keyword: kuta eco resorts' },
            { competitor: 'Competitor B', opportunity: 'New keyword: kuta yoga retreats' },
            { competitor: 'Competitor C', opportunity: 'New keyword: kuta cultural tours' },
            { competitor: 'Competitor D', opportunity: 'New keyword: kuta adventure tours' },
            { competitor: 'Competitor E', opportunity: 'New keyword: kuta wellness retreats' }
          ]
        }
      };
    }
  },

  async getKeywordRankings(keyword) {
    try {
      const response = await api.get(`/seo/rankings/${encodeURIComponent(keyword)}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch keyword rankings:', error);
      throw error;
    }
  }
};
