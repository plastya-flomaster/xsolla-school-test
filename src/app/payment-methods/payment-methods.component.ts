import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'payment-methods',
    templateUrl: './payment-methods.component.html',
    styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent {
    public chartLabels: any[] = [];
    public chartData = [];
    public chartType ='doughnut';
    isShown: Boolean = true;   
    rating: Object[];
    constructor(private httpService: HttpClient) { } 
  
    ngOnInit() {
        this.httpService.get('./assets/data.json').subscribe(
            data => {
                var payments = [];
                var temp;
                for (var i in data) {
                    temp = data[i].transaction.payment_method.name;
                    if (typeof temp !== "undefined") {
                        payments.push(temp);
                    }
                }

                var methods = payments.reduce(function (rating, value) {
                    //если рейтинг 0, то ставим 1, а если система уже была, то +1
                    rating[value] = rating[value] ? rating[value] + 1 : 1;
                    return rating;
                }, {});

                this.rating = Object.keys(methods).map(function (key) {
                    return [key, methods[key]];
                });

                this.rating.sort(function (a, b) {
                    return b[1] - a[1];
                });
                this.chartData = this.rating.map(function (elem) {return elem[1]})
                this.chartLabels = this.rating.map(function (elem) {return elem[0]})
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }
    toggleShow(){
        this.isShown = !this.isShown;
      }
}

