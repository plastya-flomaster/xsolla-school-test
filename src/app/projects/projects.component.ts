import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['../transactions-list/transactions-list.component.css']
})
export class ProjectsComponent {
    projects: any[] = [];
    constructor(private httpService: HttpClient) { } 
  
    ngOnInit() {
        this.httpService.get('./assets/data.json').subscribe(
            data => {
                var temp;
                for (var i in data) {
                    temp = data[i].transaction.project;
                    if (typeof temp !== "undefined") {
                        this.projects.push(temp);
                    }
                }
                function getUnique(arr, comp) {

                    const unique = arr
                         .map(e => e[comp])
                         .map((e, i, final) => final.indexOf(e) === i && i)
                         .filter(e => arr[e]).map(e => arr[e]);
                  
                     return unique;
                  }
                 this.projects= getUnique(this.projects,'id');
                },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }
}

