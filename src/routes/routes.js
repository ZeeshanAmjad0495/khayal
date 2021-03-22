import Cart from '../components/pages/Cart';
import HomePage from '../components/pages/Homepage';

export const defaultRedirect = '/homepage';

export const routes = [
  {
    path: '/homepage',
    component: HomePage,
  },
  {
    path: '/cart',
    component: Cart,
  },
];
