import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://example.com/app-api/v1',
          login: {
            endpoint: '/auth/sign-in',
            method: 'post'
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post'
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post'
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post'
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post'
          }
        })
      ],
      forms: {}
    })
  ]
})
export class AuthModule {}
