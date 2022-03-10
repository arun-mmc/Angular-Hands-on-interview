import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpConfigInterceptor } from './intreceptor/httpconfig.interceptor';
// import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
// import { ErrorDialogService } from './error-dialog/errordialog.service';

import { HeaderComponent } from './components/header/header.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfilepageComponent,
    HomeComponent,
    ProductComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([ {path:'home',component:HomeComponent},{path:'my-profile',component:ProfilepageComponent}]),
    
  ],
  exports: [
    HeaderComponent,
    ProductComponent
  ]
})
export class SharedModule { }
