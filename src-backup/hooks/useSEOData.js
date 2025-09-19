import { useQuery } from '@tanstack/react-query';
import { seoService } from '../services/seoService';

export const useSEOData = () => {
  return useQuery({
    queryKey: ['seo', 'intelligence'],
    queryFn: seoService.getSEOIntelligence,
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
    staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
  });
};
