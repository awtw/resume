import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { MenuListProgram } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {

  title: string;
	public onClose: Subject<MenuListProgram>;
	item: MenuListProgram;
	changeItem: MenuListProgram;
	constructor(
		public menuService: MenuService,
		private router: Router,
		private toastr: ToastrService,
		public bsModalRef: BsModalRef,
	) { }

	ngOnInit(): void {
		this.onClose = new Subject();
	}

	notSave(){
		this.bsModalRef.hide();
		// tslint:disable-next-line:prefer-for-of
		this.onClose.next(this.item);
	}

	add(){
		this.item = this.changeItem;
		this.onClose.next(this.item);
		this.bsModalRef.hide();

	}

}
