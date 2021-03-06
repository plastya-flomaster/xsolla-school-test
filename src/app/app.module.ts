import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { FilterPipe }from './filter.pipe'
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    PaymentMethodsComponent,
    ProjectsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,    
    ReactiveFormsModule, 
    RouterModule.forRoot([
      { path: '', component: TransactionsListComponent },
         ])
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
