# Register a SPA application with Okta

Step by step instuction on registrering a SPA application in Okta to support OpenId Connection implict login flow

# Create a free Okta development account

Create a free Okta development account at [Okta.com](https://developer.okta.com/signup/). Once this account is created, you can then login to your Okta account [Login to Okta](https://login.okta.com/)

# Register your SPA application

| Register SPA                                |
| ------------------------------------------- |
| ![Register SPA](./Okta_Add_application.png) |

# Choose Single-Page App

| Choose SPA as the application type                             |
| -------------------------------------------------------------- |
| ![Choose Single-Page App Option](./Choose_Single_Page_App.png) |

# Enter the application details

- Base URIs : http://localhost:4200
- Login redirect URIs : http://localhost:4200
- Logout redirect URIs : http://localhost:4200
- Group Assignments : Everyone
- Grant Type Allowed : Implicit
- Click on the Done Button

| Enter SPA details                                    |
| ---------------------------------------------------- |
| ![Enter Applcation Details](./Enter_App_Details.png) |

Your Registered application should look similar to the screenshot below:

| SPA General Settings                                                      |
| ------------------------------------------------------------------------- |
| ![Final General Settings for SPA Application](./SPA_General_Settings.png) |

# Make a note of the Client ID

| Copy Client Id                                       |
| ---------------------------------------------------- |
| ![Copy the Client ID](./Copy_Client_Credentials.png) |

# Make a note of your account's issuer URL

| Copy Issuer URL                                     |
| --------------------------------------------------- |
| ![Copy Account's Issuer URL](./Copy_issuer_url.png) |
