import { Suspense } from 'react';
import { CONSTANT_ROUTE } from '@shared/utils/constants';
import { useRoutes } from 'react-router-dom';

import { Category, Error, Home, LayoutDefault } from './PageLazy';

const AppRouter = () => {
  const router = useRoutes([
    {
      loader: () => null,
      children: [
        {
          element: <LayoutDefault />,
          children: [
            {
              path: CONSTANT_ROUTE.ROOT,
              element: <Home />,
            },
            {
              path: CONSTANT_ROUTE.CATEGORY,
              element: <Category />,
            },
          ],
        },
        {
          element: <Error />,
          path: '*',
        },
      ],
    },
  ]);

  return <Suspense fallback={<LayoutDefault />}>{router}</Suspense>;
};

export default AppRouter;
