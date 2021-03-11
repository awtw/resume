import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { CardContent, ExpByYear, LicenseType } from '../content';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  title: string;
  public onClose: Subject<boolean>;
  cardContent: CardContent
  licenseImage = 'assets/images/info/medal.png';
  study = 'assets/images/info/graduation-hat.png';
  exp = 'assets/images/info/drivers-license.png';
  searchImage = 'assets/images/info/loupe.png';
  ExpByYearList: ExpByYear[];
  type: any = LicenseType.證照;

  constructor(
    private bsModalRef: BsModalRef,
    private infoService: InfoService,
  ) { }

  ngOnInit(): void {
    this.ExpByYearList = this.infoService.getExpList();
  }

  notSave(): void {
    this.bsModalRef.hide();
  }

}
