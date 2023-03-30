# PDKKI-Badminton Registration Form

A simple registration form to register a badminton session with PDKKI Melbourne! Instead of using separate app like Google Form, manual invoice checks using Instagram or Whatsapp, why not use an all-in-one platform? Here, everything can be done all at once from registration, administrative, login, maintenance, etc.

Static form link: https://mekdie.github.io/pdkki-badminton/

----STILL ON DEVELOPMENT-----

## Release version plan:

-   v1 BETA: Public registration form with Captcha (to prevent spam or robot) and private login for administrative view (to view list of registration and invoice)
-   v2: Add login and registration for end-users (My profile, my bookings)
-   v3: Add a payment system (finale)
-   v4: tba

## Features (and TO-DO):

-   Basic HTML/CSS page for all pages (v1)
-   Implement with React for FrontEnd (v1)
-   Implement the Backend with Firebase (v1)
-   Add registration data to Database (Firebase) (v1)
-   Create login / registration page (Authentication) (v2)
-   Implement Authorization for those who is not logged in (v2)
-   Implement Google reCaptcha to prevent spam (v1)
-   Deploy to firebase hosting (v1)
    (Advanced / Optional):
-   Add live chat feature
-   Add image check for invoice feature
-   Add security or verification
-   Online payment system Stripe Abacus, etc

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

_Version 0.2:_ (next)

-   Make mock administrative view for registration
-   Make login page for Admin

_Version 0.3:_ (next)

-   Implement previous versions with React (Views ready for v1 BETA release)

_Version 0.4:_ (next):

-   Connect backend with Firebase to test submitting data
-   Create an authentication for admin login
-   Authorization for admin only page

_Version 0.5:_ (next)

-   CRUD on registration

.
.
.
.

_Version 1.0:_ (BETA release testing)

-   Release v1 BETA on Firebase

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
