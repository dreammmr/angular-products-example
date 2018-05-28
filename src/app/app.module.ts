import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

const appRoutes: Routes = [
  // { path: '', component: LobbyComponent },
  { path: '', component: ProductsComponent },
  { path: 'shopping-card', component: ShoppingCardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
