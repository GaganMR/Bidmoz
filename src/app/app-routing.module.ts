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
    path: 'user-account/:user_id',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'coupon-purchase',
    loadChildren: () => import('./coupon-purchase/coupon-purchase.module').then( m => m.CouponPurchasePageModule)
  },
  {
    path: 'feature-product-details',
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
  {
    path: 'upcomming-session-details/:session_id',
    loadChildren: () => import('./upcomming-session-details/upcomming-session-details.module').then( m => m.UpcommingSessionDetailsPageModule)
  },
  {
    path: 'current-sessions',
    loadChildren: () => import('./current-sessions/current-sessions.module').then( m => m.CurrentSessionsPageModule)
  },
  {
    path: 'featured-product-list',
    loadChildren: () => import('./featured-product-list/featured-product-list.module').then( m => m.FeaturedProductListPageModule)
  },
  {
    path: 'current-session-details/:session_id',
    loadChildren: () => import('./current-session-details/current-session-details.module').then( m => m.CurrentSessionDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
