import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: LoginScreenComponent,
    title: "Tela de Login"
  },
  {
    path: "home",
    component: AppComponent,
    title: "Tela principal"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
