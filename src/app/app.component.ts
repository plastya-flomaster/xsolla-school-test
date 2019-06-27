import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test xsolla';
  constructor (private httpService: HttpClient) {}
  transactions: string [];

    ngOnInit () {
      this.httpService.get('./assets/data.json').subscribe(
        data => {
          this.transactions = data as string [];
          console.log(this.transactions[0]);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
    }
  }

