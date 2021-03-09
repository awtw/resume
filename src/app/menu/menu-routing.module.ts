import { MenuContentComponent } from './menu-content/menu-content.component';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'center',
    component: ContainerComponent,
    children: [
      {
        path: 'centent',
        component: MenuContentComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'center/centent'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
