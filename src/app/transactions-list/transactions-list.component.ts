import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterPipe }from '../filter.pipe'

@Component({
  selector: 'transactons-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {
  constructor (private httpService: HttpClient) {}
  
  transactions: string [];
   
  ngOnInit () {
      this.httpService.get('./assets/data.json').subscribe(
        data => {
          this.transactions = data as string [];
          console.log(this.transactions[4]);

        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
    }
  }
 


