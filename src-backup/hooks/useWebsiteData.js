import { useQuery } from '@tanstack/react-query';
import { websiteService } from '../services/websiteService';

export const useWebsiteData = () => {
  return useQuery({
    queryKey: ['website', 'performance'],
    queryFn: websiteService.getWebsitePerformance,
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
    staleTime: 10 * 60 * 1000, // Consider data stale after 10 minutes
  });
};
