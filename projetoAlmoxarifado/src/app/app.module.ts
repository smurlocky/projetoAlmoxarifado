import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { PoPageLoginModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoPageLoginModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
