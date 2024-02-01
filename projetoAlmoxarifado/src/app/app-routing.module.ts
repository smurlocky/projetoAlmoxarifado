import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  {
    path: "",
    component: LoginScreenComponent,
    title: "Tela de Login"
  },
  {
    path: "home",
    component: HomePageComponent,
    title: "Tela principal"
  },
  {
    path: "productPage",
    component: ProductPageComponent,
    title: "product page"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
