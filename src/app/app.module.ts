import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { FilterPipe }from './filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
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
