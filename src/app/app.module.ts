import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }