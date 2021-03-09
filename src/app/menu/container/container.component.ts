import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../menu.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  imageUrl = './assets/images/btag-menu/menu.png';
	imageSafeUrl: SafeUrl;
	checkIfCN = false;
	constructor(
		public menuService: MenuService,
		private sanitizer: DomSanitizer,
		private router: Router,
		private title: Title,
		private toastr: ToastrService
	) {
		const env = this.router.url.split('/');
		env.forEach(data => {
			if (data === 'TW') {
				this.checkIfCN = false;
			}
			if (data === 'CN') {
				this.checkIfCN = true;
			}
		});
	}

	ngOnInit(): void {
		// this.menuService.saveForAddNewMenuRequest();
		this.title.setTitle('目錄程式設定');
		this.imageSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl);
	}

	notify() {
		this.toastr.warning('選擇目錄站台 <br> 設定目錄程式要先點選後拖曳到目錄中 <br> 這邊的目錄程式與程式管控表不同，目錄程式連結目錄之用，程式名稱可能跟程式管控表不同', '使用教學', {
			disableTimeOut: true,
			positionClass: 'toast-top-right',
			closeButton: true,
			enableHtml: true,
			timeOut: 3000,
		});
	}

	clickedMain() {
		this.router.navigate(['/A0A1/ADUP020S00M/TW/station']);
		this.checkIfCN = false;
	}

	changeCN() {
		const urlLen = this.router.url.split('/').length;
		const env = this.router.url.split('/');
		env.forEach(data => {
			if (data === 'TW') {
				this.router.navigate(['/A0A1/ADUP020S00M/CN/station']);
				this.checkIfCN = true;
			}
			if (data === 'CN') {
				this.router.navigate(['/A0A1/ADUP020S00M/TW/station']);
				this.checkIfCN = false;
			}
		});
	}

	downloadFile() {
		window.open('./assets/file/menu.pdf', '_blank');
	}
}
