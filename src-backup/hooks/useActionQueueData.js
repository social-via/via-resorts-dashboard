import { useQuery } from '@tanstack/react-query';
import { actionService } from '../services/actionService';

export const useActionQueueData = () => {
  return useQuery({
    queryKey: ['actions', 'queue'],
    queryFn: actionService.getActionQueue,
    refetchInterval: 30 * 60 * 1000, // Refetch every 30 minutes
    staleTime: 15 * 60 * 1000, // Consider data stale after 15 minutes
  });
};
