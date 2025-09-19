import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export const useDashboardData = () => {
  return useQuery({
    queryKey: ['dashboard', 'summary'],
    queryFn: dashboardService.getExecutiveSummary,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000, // Consider data stale after 2 minutes
  });
};
