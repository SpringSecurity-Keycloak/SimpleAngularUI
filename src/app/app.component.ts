import { Component } from '@angular/core';
import { OAuthService, OAuthErrorEvent, AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SimpleAngularUI';
  username = '';

  get token() {
    return this.oauthService.getAccessToken();
  }

  get claims() {
    return this.oauthService.getIdentityClaims();
  }

  constructor(private oauthService: OAuthService) {
    oauthService.events.subscribe((e) =>
      e instanceof OAuthErrorEvent ? console.error(e) : console.warn(e)
    );

    // Load information from Auth0 (could also be configured manually)
    oauthService
      .loadDiscoveryDocument()

      // See if the hash fragment contains tokens (when user got redirected back)
      .then(() => oauthService.tryLogin())

      // If we're still not logged in yet, initiate implicit Flow
      .then(() => {
        if (!oauthService.hasValidAccessToken()) {
          return oauthService.initImplicitFlow();
        }
      })

      // Get username, if possible.
      .then(() => {
        if (oauthService.getIdentityClaims()) {
          this.username = oauthService.getIdentityClaims()['name'];
        }
      });
  }

  logout() {
    this.oauthService.logOut();
    //this.oauthService.initImplicitFlow();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
