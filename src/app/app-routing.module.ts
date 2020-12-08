import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user-register',
    loadChildren: () => import('./user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  {
    path: 'terms-and-condtions',
    loadChildren: () => import('./terms-and-condtions/terms-and-condtions.module').then( m => m.TermsAndCondtionsPageModule)
  },
  {
    path: 'bid-plans',
    loadChildren: () => import('./bid-plans/bid-plans.module').then( m => m.BidPlansPageModule)
  },
  {
    path: 'featured-product',
    loadChildren: () => import('./featured-product/featured-product.module').then( m => m.FeaturedProductPageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'coupon-purchase',
    loadChildren: () => import('./coupon-purchase/coupon-purchase.module').then( m => m.CouponPurchasePageModule)
  },
  {
    path: 'feature-product-details/:featured_product_id/:product_id',
    loadChildren: () => import('./feature-product-details/feature-product-details.module').then( m => m.FeatureProductDetailsPageModule)
  },
  {
    path: 'sign-in-or-sin-up',
    loadChildren: () => import('./sign-in-or-sin-up/sign-in-or-sin-up.module').then( m => m.SignInOrSinUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'coupon-details/:coupon_id',
    loadChildren: () => import('./coupon-details/coupon-details.module').then( m => m.CouponDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
