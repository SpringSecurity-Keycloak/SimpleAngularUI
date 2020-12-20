import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {
  OAuthModule,
  AuthConfig,
  JwksValidationHandler,
  ValidationHandler,
  OAuthStorage,
  OAuthModuleConfig,
} from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
//import { AuthGuardService } from './shared/auth/authguard.service';

export const keyCloakConfig: AuthConfig = {
  issuer: environment.keyCloak.issuer,
  clientId: environment.keyCloak.clientId,
  redirectUri: environment.keyCloak.redirectUri,
  scope: environment.keyCloak.scope,
};

export const oktaConfig: AuthConfig = {
  issuer: environment.okta.issuer,
  clientId: environment.okta.clientId,
  redirectUri: environment.okta.redirectUri,
  scope: environment.okta.scope,
};

export const authOConfig: AuthConfig = {
  issuer: environment.authO.issuer,
  clientId: environment.authO.clientId,
  redirectUri: environment.authO.redirectUri,
  scope: environment.authO.scope,
  logoutUrl: environment.authO.logoutUrl,
  postLogoutRedirectUri: environment.authO.postLogoutRedirectUri,
  showDebugInformation: true,
};

@NgModule({
  declarations: [AppComponent, SplashScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    OAuthModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useValue: localStorage },
    { provide: AuthConfig, useValue: keyCloakConfig },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
