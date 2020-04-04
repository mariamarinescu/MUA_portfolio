import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ServicesComponent } from '../components/services/services.component';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';
import { MakeupGalleryComponent } from '../components/makeup-gallery/makeup-gallery.component';
import { LoginComponent } from '../components/login/login.component';
import { ProjectComponent } from '../components/admin/project/project.component';
import { ProjectGalleryComponent } from '../components/admin/project-gallery/project-gallery.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { ProjectUploadComponent } from '../components/admin/project-upload/project-upload.component';
import { UploaderComponent } from '../components/admin/project-upload/uploader/uploader.component';


export const routes: Routes = [
  {
    path: 'pagina-principala',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'servicii',
    component: ServicesComponent
  },
  {
    path: 'politica-de-confidentialitate',
    component: PrivacyPolicyComponent
  },
  {
    path: 'galerie/:category',
    component: MakeupGalleryComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'logare-admin',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'pagina-principala',
    pathMatch: 'full'
  },
  { 
    path: 'parola-uitata', 
    component: ForgotPasswordComponent 
  },
{
    path: 'pagenotfound',
    component: PageNotFoundComponent
  },
  {
    path: 'admin/meniu',
    component: ProjectComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'admin/upload',
    component: ProjectUploadComponent,
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'admin/upload/:category',
    component: UploaderComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/galerie",
    component: ProjectGalleryComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: "admin/galerie/:category",
    component: ProjectGalleryComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
