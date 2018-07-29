import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent}     from './components/route/catalog/catalog.component';
import {WelcomeComponent}     from './components/route/welcome/welcome.component';
import {CardsResolver}        from './resolvers/previews';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: {
      cards: CardsResolver
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }

];

export const AppRoutes = RouterModule.forRoot(routes);
