import { AddMenuComponent } from './../add-menu/add-menu.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { CommonService } from 'src/app/btag-common/common.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RenderButtonComponent } from '../render-button/render-button.component';
import { GetOneMenuPgList, MenuInfo, MenuListProgram, MenuPgInfo, ModuleList, ProgramInfo } from '../menu';
import { MenuEditComponent } from '../menu-edit/menu-edit.component';
import { AlertComponent } from 'ngx-bootstrap/alert';


@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {
  imageUrl = './assets/images/btag-menu/edit.png';
	imageSafeUrl: SafeUrl;
	stationInfo = '';
	checkIfCN = false;
	modalRef: BsModalRef;
  filterWord = '';

	saveMenuName: string = '測試目錄';
	saveMenuID: string = '123';
  // alert
  alerts: any[] = [];
  ProgramInfo: ProgramInfo[] = [];
  ModuleList: ModuleList[] = [];
  MenuPgInfo: MenuPgInfo[] = [];

  programListForUse: MenuListProgram[] = [];
  programListForUseStatic: MenuListProgram[] = [];
  fullMenuProgramList: MenuListProgram[] = [];


	// grid
	gridApi: any;
	gridColumnApi: any;

	rowData: MenuInfo[];
	columnDefs: any[];

	sysUrl: string;

	// check
	ifNew = false;
	ifMove = false;
	newMenuInfo: MenuInfo;

	counterForDrag = 0;

	defaultColDef = {
		// flex: 1,
		// minWidth: 80,
		filter: true,
		sortable: true,
		resizable: true,
		autoHeight: true,
		autoWidth: true
	};
	autoGroupColumnDef = { Width: 100 };
	frameworkComponents = {
		RenderButtonComponent
	};



	// check
	checkIfFirstTime = true;


	gridOptions: GridOptions = {
		localeText: this.commonService.internationalization(),
		paginationPageSize: 20,
	};

	selectList: MenuListProgram[] = [];

  constructor(
    private menuService: MenuService,
    private modalService: BsModalService,
    private router: Router,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.imageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl);
		this.counterForDrag = 0;
		this.ifMove = false;
		this.filterWord = '';
		this.ifNew = false;
		this.ModuleList = this.menuService.getModuleList();
    this.MenuPgInfo = this.menuService.getOneMenuProgramList();
    this.MenuPgInfo.forEach(data => {
       const MenuListProgram: MenuListProgram = {
            MENU: '測試目錄',
						PRG_NO: '',
						MENU_DESC: '測試目錄',
						PRG: data.PRG,
						RONLY: '',
						ENV1: 1,
						ENV2: 1,
						ENV3: 0,
						SEND_EMPNO: '',
						RONLY1: '',
						RONLY2: '',
						MODULE: '測試單位',
						COMP: '測試',
						DBNM: '測試',
						FLAG_PRG: data.PRG_FLAG.toString(),
						PRG_DESC: data.PRG_DESC,
						COUNTRY: 'TW',
      }
      this.fullMenuProgramList.push(MenuListProgram);
    });
    this.ProgramInfo = this.menuService.getProgramList();
    const item: MenuListProgram = {
					MENU: '測試目錄',
					PRG_NO: '',
					MENU_DESC: '測試目錄',
					PRG: ' 請直接拖曳',
					RONLY: '',
					ENV1: 100,
					ENV2: 1,
					ENV3: 0,
					SEND_EMPNO: '',
					RONLY1: '',
					RONLY2: '',
					MODULE: '測試目錄',
					COMP:  '測試目錄',
					DBNM:  '測試目錄',
					FLAG_PRG: '',
					PRG_DESC: '',
					COUNTRY: 'TW',
					select: false
				};
    this.programListForUse.push(item);
    this.ProgramInfo.forEach(data => {
      const MenuListProgram: MenuListProgram = {
            MENU: '測試目錄',
						PRG_NO: '',
						MENU_DESC: '測試目錄',
						PRG: data.PRG,
						RONLY: '',
						ENV1: 1,
						ENV2: 1,
						ENV3: 0,
						SEND_EMPNO: '',
						RONLY1: '',
						RONLY2: '',
						MODULE: '測試單位',
						COMP: '測試',
						DBNM: '測試',
						FLAG_PRG: data.PRG_FLAG.toString(),
						PRG_DESC: data.PRG_DESC,
						COUNTRY: 'TW',
      }
      this.programListForUse.push(MenuListProgram);
    });
    this.programListForUseStatic = this.programListForUse;
    this.getData();
    this.rowData = this.menuService.getMenuList();

  }

  addNew() {
     this.addAlert('warning', '提示' , '請向部門主管提出申請', false, 1000);
  }

  edit() {
		this.ifMove = false;
    this.addAlert('success', '提示' , '保存成功', false, 1000);
	}

  editMenu(data: MenuListProgram): void {
		this.ifMove = true;
		console.log(data);
		const temp = Object.assign({}, data);
		const initialState = {
			item: data,
			changeItem: temp,
			title: '編輯狀態'
		};
		this.modalRef = this.modalService.show(MenuEditComponent, { initialState });
		this.modalRef.setClass('modal-md-sm');
		this.modalRef.content.onClose.subscribe((result: MenuListProgram) => {
			this.ifMove = false;
			if (result) {
				// console.log(result);
				// const index = this.fullMenuProgramList.indexOf(result);
				// if (index >= 0){
				// 	this.fullMenuProgramList[index] = result;
				// }
				// data = result;
				// console.log('create new');
				// this.saveMenuID = result.MENU;
				// this.saveMenuName = result.MENU_DESC;
				// this.newMenuInfo = result;
				// console.log(this.newMenuInfo);
			}
		});
	}

  backClicked() {
		this.router.navigate(['../../../info'], { relativeTo: this.activatedRoute });
	}

  getData() {
		this.columnDefs = [
			{
				headerName: '目錄代號',
				field: 'MENU',
				width: 100,
				suppressSizeToFit: false,
				// editable: true
				// checkboxSelection: true
				filterParams: {
					buttons: ['reset', 'apply'],
					debounceMs: 200,
					defaultJoinOperator: 'OR'
				}
			},
			{
				headerName: '目錄名稱',
				field: 'MENU_DESC',
				width: 200,
				// suppressSizeToFit: false,
				// editable: true
				filterParams: {
					buttons: ['reset', 'apply'],
					debounceMs: 200,
					defaultJoinOperator: 'OR'
				}
			}
		];

	}

  onGridReady(params: any) {
		this.gridApi = params.api;
		params.api.setRowData(this.rowData);
		this.gridColumnApi = params.columnApi;
		params.columnApi.autoSizeColumns();
		params.api.sizeColumnsToFit();
	}

	initList(event: CdkDragDrop<MenuListProgram[]>) {
		console.log(event.container);
	}

  delete(item: MenuListProgram) {
		this.ifMove = true;
		item.select = false;
		if (this.fullMenuProgramList.length > 1) {
			this.fullMenuProgramList.splice(this.fullMenuProgramList.indexOf(item), 1);
			this.programListForUseStatic.push(item);
		} else {
			this.addAlert('warning', '提示' , '至少要有一隻程式', false, 1000);
		}
	}

  drop(event: CdkDragDrop<MenuListProgram[]>) {
		this.ifMove = true;
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			console.log(event);
		} else {
      if(event.previousContainer.data.length > 1){
        transferArrayItem(event.previousContainer.data, event.container.data, event.currentIndex, event.currentIndex);
      } else {
        this.addAlert('warning', '提示' , '至少要有一隻程式', false, 1000);
      }

		}

	}

  dropmMenu(event: CdkDragDrop<MenuListProgram[]>) {
		this.counterForDrag++;

		if (this.counterForDrag >= 3) {
       		// this.addAlert('warning', '提示' , '點選程式再拖曳', false, 1000);
		}
		this.ifMove = true;
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			console.log(event);
		} else {
			// const tempList = event.container.data.filter((unit) => unit.PRG.indexOf(event.previousContainer.data[event.previousIndex].PRG) > -1);
			// console.log(tempList);
			console.log(event);

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

			// if (tempList.length === 0 && event.previousContainer.data[event.previousIndex].PRG !== ' 請先點擊要添加的程式後再拖曳 可支援多程式拖曳') {
			// 	this.selectList.forEach(index => {
			// 		if (index.select) {
			// 			const dataIndex = this.programListForUse.indexOf(index);
			// 			const dataIndexStatic = this.programListForUseStatic.indexOf(index);
			// 			// console.log(dataIndex);
			// 			if (dataIndex >= 0) {
			// 				transferArrayItem(event.previousContainer.data, event.container.data, dataIndexStatic, event.currentIndex);
			// 				event.currentIndex++;
			// 				if (dataIndexStatic >= 0) {
			// 					this.programListForUseStatic.splice(dataIndexStatic, 1);
			// 				}
			// 			}
			// 		}
			// 	});
			// }

		}

	}

  select(data: MenuListProgram, i: number) {
		this.counterForDrag = 0;
		if (data.select) {
			data.select = false;
			const index = this.selectList.indexOf(data);
			this.selectList.splice(index, 1);
			this.selectList.push(data);
		} else {
			data.select = true;
			this.selectList.push(data);
			// console.log(data, i);
		}
	}

	filterList(e: Event) {
		const el = e.target as HTMLInputElement;
		this.filterByKeyWord(el.value);
	}

  private filterByKeyWord(keyWord: string): void {
		keyWord = keyWord.trim();
		let tempList = this.programListForUseStatic.filter((unit) => unit.PRG.indexOf(keyWord) > -1);
		if (tempList.length === 0) {
			tempList = this.programListForUseStatic.filter((unit) => unit.PRG_DESC.indexOf(keyWord) > -1);
		}
		this.programListForUse = tempList.slice(0, 40);
		if (keyWord.length <= 0) {
			const emptyList: MenuListProgram[] = [];
			const item: MenuListProgram = {
				MENU: '',
				PRG_NO: '',
				MENU_DESC: '',
				PRG: ' 請先點擊要添加的程式後再拖曳 可支援多程式拖曳',
				RONLY: '',
				ENV1: 100,
				ENV2: 1,
				ENV3: 0,
				SEND_EMPNO: '',
				RONLY1: '',
				RONLY2: '',
				MODULE: '',
				COMP: '測試',
				DBNM: '測試',
				FLAG_PRG: '',
				PRG_DESC: '',
				COUNTRY: 'TW',
				select: false
			};
			emptyList.push(item);
			this.programListForUse = emptyList;
		}
	}

  programSearch(searchWord: string) {
		this.filterByKeyWord(searchWord);
	}





  // alert
  addAlert(type: string, header: string, msg: string, dismissible: boolean, timeout: number ): void {
  this.alerts.push({
    type,
    header,
    msg,
    dismissible,
    timeout
  });
  }

  onClosed(dismissedAlert: AlertComponent): void {
  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


}
