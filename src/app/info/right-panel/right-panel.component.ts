import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AboutMeComponent } from '../about-me/about-me.component';
import { PaymeComponent } from '../payme/payme.component';
import { PublicDiseaseComponent } from '../public-disease/public-disease.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  rocket = 'assets/images/info/rocket.png';
  github = 'assets/images/info/github.png';
  behance = 'assets/images/info/behance.png';
  support = 'assets/images/info/protest.png';
  me = 'assets/images/info/me-sm.png';
  modalRef: BsModalRef;
  // alert
  alerts: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  apiRegister(): void {
    this.router.navigate(['../api-register'], { relativeTo: this.activatedRoute });
  }

  projectManage(): void {
    this.router.navigate(['../project-manage'], { relativeTo: this.activatedRoute });

  }
  menu(): void {
    this.router.navigate(['../menu'], { relativeTo: this.activatedRoute });
  }

  aboutMe(): void {
    const initialState = {
      title: '關於我'
    };
    this.modalRef = this.modalService.show(AboutMeComponent, { initialState });
    this.modalRef.setClass('modal-msd');
    // this.modalRef.content.onClose.subscribe((result: boolean) => {
    // });
  }
  supportMe(): void {
    const initialState = {
      title: '支持我'
    };
    this.modalRef = this.modalService.show(PaymeComponent, { initialState });
    // this.modalRef.setClass('modal-md');
    // this.modalRef.content.onClose.subscribe((result: boolean) => {
    // });
  }

  beHance(): void{
    window.open('https://www.behance.net/alex012332fd01', '_blank');
  }

  gitHub(): void{
    window.open('https://github.com/awtw', '_blank');
  }

  publicDisease(): void {
    const initialState = {
      title: 'PowerBI 專案'
    };
    this.modalRef = this.modalService.show(PublicDiseaseComponent, { initialState });
    this.modalRef.setClass('modal-msd');
  }

  covidApi(): void{
    this.addAlert('warning', '提示' , '維護中', false, 1000);
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
