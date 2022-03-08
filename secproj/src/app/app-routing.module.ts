import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dbhome',
    pathMatch: 'full'
  },
 
  {
    path: 'dbhome',
    loadChildren: () => import('./dbhome/dbhome.module').then( m => m.DbhomePageModule)
  },  {
    path: 'editnews',
    loadChildren: () => import('./editnews/editnews.module').then( m => m.EditnewsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
