import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Offline from '../views/pages/offline';

const routes = {
  '/': Home, // default page or home page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/offline': Offline,
};

export default routes;
