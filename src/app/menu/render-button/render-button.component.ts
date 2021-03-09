import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-render-button',
  templateUrl: './render-button.component.html',
  styleUrls: ['./render-button.component.scss']
})
export class RenderButtonComponent implements ICellRendererAngularComp, OnDestroy {

  public title: any;
	public params: any;

	agInit(params: any): void {
		this.params = params;
	}

	btnClickedHandler($event: any) {
		this.params.clicked(this.params.data);
		// console.log(this.params.value);
	}

	ngOnDestroy() {
	}

	refresh(): boolean {
		return false;
	}

	constructor() { }

}
