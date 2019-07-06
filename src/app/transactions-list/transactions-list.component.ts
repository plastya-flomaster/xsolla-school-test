import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'transactons-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {
  transactions: string [];
  constructor (private httpService: HttpClient) {}

  ngOnInit () {
      this.httpService.get('./assets/data.json').subscribe(
        data => {
          this.transactions = data as string [];
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
    }
}
 


