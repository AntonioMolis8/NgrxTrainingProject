import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { task_reducer } from './store/task/task.reducer';
import { TaskEffects } from './store/task/task.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideEffects([TaskEffects]), provideState({name: 'tasks', reducer: task_reducer}), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), importProvidersFrom(HttpClientModule)]
};
