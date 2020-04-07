import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'plat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plat/plat.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () => 
            import('../plat/ajouter/ajouter.module').then( m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id',
            loadChildren: () => import('../plat/modifier/modifier.module').then( m => m.ModifierPageModule)
          }
        
        ]
      },
      {
        path: 'compte',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../compte/compte.module').then(m => m.ComptePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
