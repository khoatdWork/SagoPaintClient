import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InteriorComponent } from './pages/interior/interior.component';
import { ExteriorComponent } from './pages/exterior/exterior.component';
import { WaterproofComponent } from './pages/waterproof/waterproof.component';
import { InteriorProductsComponent } from './pages/interior-products/interior-products.component';
import { ExteriorProductsComponent } from './pages/exterior-products/exterior-products.component';
import { WaterproofProductsComponent } from './pages/waterproof-products/waterproof-products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ColorMeaningComponent } from './pages/color-meaning/color-meaning.component';
import { ColorInspirationComponent } from './pages/color-inspiration/color-inspiration.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noi-that', component: InteriorComponent },
  { path: 'ngoai-that', component: ExteriorComponent },
  { path: 'chong-tham', component: WaterproofComponent },
  { path: 'noi-that/san-pham', component: InteriorProductsComponent },
  { path: 'ngoai-that/san-pham', component: ExteriorProductsComponent },
  { path: 'chong-tham/san-pham', component: WaterproofProductsComponent },
  { path: 'san-pham/:id', component: ProductDetailComponent },
  { path: 'y-nghia-mau-sac', component: ColorMeaningComponent },
  { path: 'cam-hung-mau-sac', component: ColorInspirationComponent },
  { path: 've-chung-toi', component: AboutUsComponent },
  { path: '**', redirectTo: '' }
];
