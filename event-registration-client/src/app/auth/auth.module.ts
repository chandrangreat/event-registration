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
          baseEndpoint: 'http://localhost:3000/api/v1',
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
          // requestPass: {
          //   endpoint: '/auth/request-pass',
          //   method: 'post'
          // },
          // resetPass: {
          //   endpoint: '/auth/reset-pass',
          //   method: 'post'
          // }
        })
      ],
      forms: {
        login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      strategy: 'email',  // strategy id key.
      rememberMe: false,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
      requestPassword: false
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: false,
    },
      }
    })
  ]
})
export class AuthModule {}
