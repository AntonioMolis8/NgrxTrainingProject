import { Routes } from '@angular/router';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'home', component: HomeComponent},
    {path: 'task', component: TaskPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'notFound', component: NotFoundComponent},
    {path: '**', pathMatch:'full', redirectTo: 'notFound'}
];
