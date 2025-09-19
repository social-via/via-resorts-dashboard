import { useQuery } from '@tanstack/react-query';
import { adsService } from '../services/adsService';

export const useAdsData = () => {
  return useQuery({
    queryKey: ['ads', 'management'],
    queryFn: adsService.getAdsManagement,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000, // Consider data stale after 2 minutes
  });
};
