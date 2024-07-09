import MainLayout from '@layouts/MainLayout';
import ShortUrlLayout from '@layouts/ShortUrlLayout/index';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import ShortUrl from '@pages/ShortUrl/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: ShortUrl,
    layout: ShortUrlLayout,
  },
  {
    path: '/shorturl',
    name: 'Short URL',
    protected: false,
    component: ShortUrl,
    layout: ShortUrlLayout,
  },

  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
