import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: '',
    loadChildren: () =>
      import("./shared/shared.module").then(m => m.SharedModule)
  },
  {
    path: "cart",
    loadChildren: () =>
      import("./feature/feature.module").then(m => m.FeatureModule)
  },
  {
    path: "product-details/:id",
    loadChildren: () =>
      import("./core/core.module").then(m => m.CoreModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
