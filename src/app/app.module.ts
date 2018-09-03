import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Route} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProducCreateGuard } from './guards/produc-create.guard';
import { JobListComponent } from './job-list/job-list.component';
import { EspacePersoComponent } from './espace-perso/espace-perso.component';
import { ProfilComponent } from './profil/profil.component';
import { ForumComponent } from './forum/forum.component';
import { PostulationComponent } from './postulation/postulation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeDemandeursComponent } from './liste-demandeurs/liste-demandeurs.component';
import { LoginComponent } from './login/login.component';


const routes: Route [] = [
  {path: 'welcome', 'component': WelcomeComponent},
  {path: 'jobs', 'component': JobListComponent},
  {path: 'jobs-add', 'component': ProductsAddComponent, canActivate: [ProducCreateGuard]},
  {path: 'detail/:id', 'component': ProductsDetailsComponent},
  {path: 'postulation', 'component': PostulationComponent},
  {path: 'inscription', 'component': InscriptionComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'espace-perso', 'component': EspacePersoComponent},
  {path: 'profil', 'component': ProfilComponent},
  {path: 'forum', 'component': ForumComponent},
  {path: 'demandeurs', 'component': ListeDemandeursComponent},
  {path: 'login', 'component': LoginComponent},
  {path: '**', 'component': NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductsDetailsComponent,
    NotFoundComponent,
    ProductsAddComponent,
    JobListComponent,
    EspacePersoComponent,
    ProfilComponent,
    ForumComponent,
    PostulationComponent,
    InscriptionComponent,
    ListeDemandeursComponent,
    LoginComponent

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
