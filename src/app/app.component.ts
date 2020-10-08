import { Component } from '@angular/core';
import {
  OAuthService,
  JwksValidationHandler,
  AuthConfig,
} from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const config: AuthConfig = {
  issuer: environment.issuer,
  clientId: environment.clientId,
  redirectUri: window.location.origin,
  scope: environment.scope,
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SimpleAngularUI';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(config);
    (this.oauthService.tokenValidationHandler = new JwksValidationHandler()),
      // Load Discovery Document and then try to login the user
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
