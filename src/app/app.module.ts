import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Router, Route} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProducCreateGuard } from './guards/produc-create.guard';


const routes: Route [] = [
  {path: 'welcome', 'component': WelcomeComponent},
  {path: 'list', 'component': ProductsListComponent},
  {path: 'add', 'component': ProductsAddComponent, canActivate: [ProducCreateGuard]},
  {path: 'detail/:id', 'component': ProductsDetailsComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', 'component': NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FooterComponent,
    WelcomeComponent,
    ProductsDetailsComponent,
    NotFoundComponent,
    ProductsAddComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
