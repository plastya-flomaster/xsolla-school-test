import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    projects: Object[];
    constructor(private httpService: HttpClient) { } 
  
    ngOnInit() {
        this.httpService.get('./assets/data.json').subscribe(
            data => {
                var payments = [];
                var temp;
                for (var i in data) {
                    temp = data[i].transaction.projects;
                    if (typeof temp !== "undefined") {
                        payments.push(temp);
                    }
                }
                this.projects = payments;
                
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }
}

