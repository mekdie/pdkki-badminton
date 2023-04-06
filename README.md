# PDKKI-Badminton Registration Form

A simple registration form to register a badminton session with PDKKI Melbourne! Instead of using separate app like Google Form, manual invoice checks using Instagram or Whatsapp, why not use an all-in-one platform? Here, everything can be done all at once from registration, administrative, login, maintenance, etc.

Static form link: https://mekdie.github.io/pdkki-badminton/

----STILL ON DEVELOPMENT-----

## Release version plan:

-   v1 ALPHA: Public registration form with Captcha (to prevent spam) and administrative view with unique code URL access (RELEASED)
-   v1.x ALPHA: Upload image to firebase storage and verify invoice manually
-   v2 BETA: Add private login for administrative view (to view list of registration and invoice)
-   v3: Add login and registration for end-users (My profile, my bookings)
-   v4: Add an online payment system
-   v5: Verify payment automatically using image recognition

## Features (and TO-DO):

-   Basic HTML/CSS page for all pages (v1)
-   Implement with React for FrontEnd (v1)
-   Implement the Backend with Firebase (v1)
-   Add registration data to Database (Firebase) (v1)
-   Implement Google reCaptcha to prevent spam (v1)
-   Deploy to firebase hosting (v1)
-   Add upload image feature to cloud (v1.x)
-   Create login / registration page (Authentication) (v2)
-   Implement Authorization for those who is not logged in (v2)
-   Add login for end users, my profile (v3)
    (Advanced / Optional):
-   Online payment system Stripe Abacus, etc (v4)
-   Add image check for invoice feature (v5)
-   Add live chat feature
-   Add security or verification

## Pages

-   Public:
    -   Login page
    -   Registration page (Email, Google, Facebook, etc.)
    -   Form Registration
    -   My profile
    -   My registration
    -   Contact form
-   Private:

    -   Administrator page
    -   My profile (admin)
    -   List of registration
    -   Create, view, edit, and delete registration
    -   Content / Form Management
    -   Make administrative view for registration (participants crud)

-   Make login page for Admin

## Technologies Used:

-   HTML, CSS, JavaScript, CSS Libraries (Bootstrap / Tailwind)
-   Front-end Framework: ReactJS
-   Backend (Cloud): Firebase

## Version Changelog:

_Version 0.1:_

-   First release with basic form registration replicated from Google Form inspired
-   Basic HTML for responsive registration form

_Version 0.2:_

-   Make mock administrative view for registration
-   Make login page for Admin
-   Added mock dark mode (except login.html, but on dark mode toggle)

_Version 0.3:_

-   Connect backend with Firebase to test submitting data
-   Hosting deploy
-   Added confirmation page after submitting a form
-   Implement previous versions with React (Views ready for v1 BETA release)

_Version 1.0 ALPHA:_

-   Release v1 ALPHA to hosting server with limited features:
    -   Users are able to register
    -   Users are able to view the details of the event
    -   Users are able to view list of participants using unique url
-   Added reCAPTCHA to prevent spam and abuse
-   Added secret link to access participants (will add authorization and authentication in the future release)
-   Edit payment (manually)

_Version 1.1:_

-   Added timestamp to database
-   Added delete feature from the table

_Version 1.2:_

-   Added Separation of Concern
-   Fixed Footer

_Version 1.2.1:_

-   Added text message when there are no participants
-   Centered the table vertically and horizontally

_Version 1.3:_ (next)

-   Added 'Authentication' when visiting participants page with passcode instead of email and password which take more time

    _Version 1.x:_ (next):

-   Upload invoice (manual check)
-   Create an authentication for admin login
-   Authorization for participants page

TBA

## Copyright and Licenses

The MIT License (MIT):

Copyright (c) 2023-present McDony Lee - Mekdie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
