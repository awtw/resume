import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuService } from './menu.service';
import { ContainerComponent } from './container/container.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RenderButtonComponent } from './render-button/render-button.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContainerComponent, MenuContentComponent, RenderButtonComponent, AddMenuComponent, MenuEditComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AgGridModule.withComponents([RenderButtonComponent]),
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
		TooltipModule.forRoot(),
  ],
  providers:[MenuService]
})
export class MenuModule { }
