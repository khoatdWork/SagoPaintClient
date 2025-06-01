import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InteriorComponent } from './pages/interior/interior.component';
import { InteriorProductsComponent } from './pages/interior-products/interior-products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "noi-that",
    component: InteriorComponent
  },
  {
    path: "noi-that/san-pham",
    component: InteriorProductsComponent
  },
  {
    path: "san-pham/chi-tiet/:productId",
    component: ProductDetailComponent
  },
];
