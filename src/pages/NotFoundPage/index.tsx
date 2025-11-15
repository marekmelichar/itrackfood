import { Navigate } from 'react-router-dom';

import { ROUTE_HOME } from '@/config';

export const NotFoundPage: React.FC = () => {
  return <Navigate to={ROUTE_HOME} />;
};
