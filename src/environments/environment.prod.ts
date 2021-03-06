// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  keyCloak: {
    issuer: 'http://localhost:9080/auth/realms/MicroServices',
    clientId: 'SimpleAngularUI',
    redirectUri: window.location.origin,
    scope: 'openid profile email',
  },
  okta: {
    issuer: 'https://dev-376411.okta.com',
    clientId: '0oa5vg37tblmP82zz357',
    redirectUri: window.location.origin,
    scope: 'openid profile email',
  },
  authO: {
    issuer: 'https://dev-r1e4o7ny.us.auth0.com/',
    clientId: 'WApFnlytcBQgmv06LB6d1r8X4vBfAASO',
    redirectUri: window.location.origin,
    scope: 'openid profile email',
    response_type: 'id_token token',
    logoutUrl:
      'https://dev-r1e4o7ny.us.auth0.com/v2/logout?federated&returnTo=https://dchacko-simple-angular-ui.herokuapp.com',
    postLogoutRedirectUri: 'https://dchacko-simple-angular-ui.herokuapp.com',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
