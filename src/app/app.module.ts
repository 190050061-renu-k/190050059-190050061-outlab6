import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './form.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {RouterModule,Routes} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

const routes:Routes=[
      {path:'contact', component:ContactComponent},
      {path:'form', component:FormComponent},
      {path:'**', redirectTo:'contact'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
