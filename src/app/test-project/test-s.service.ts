import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TestSService {

  constructor(private http: HttpClient,  private domSanitizer: DomSanitizer) { }

  // this.domSanitizer.bypassSecurityTrustResourceUrl(this.onlineApprovalService.documentInformation.Url);

  getTest(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-COntrol-Allow-Mehtods': 'GET'
      })
    };
    this.http.get(' https://covidtracking.com/api/states', httpOptions).subscribe(data => console.log(data));
  }
}
