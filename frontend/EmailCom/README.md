# EmailCom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Title: MasterEmail
Group: Group 5
Project: Project 4
Group Members: Dinesh Padhi, Chandraprakash Kushwaha, Pranay Adavade
Team Leader: Varun Mishra

1. User Template Form
   Inputs:
   i) Template Name: user need to fill the value manually and it is also required
   ii) Template Code:user need to fill the value manually and it is also required
   iii) Scenario: user need to select the value and also it is not mandatory
   iv) Providers : user need to select the value and also it is required
   v) User : user need to select the value and also it is required
   vi) Tier : user need to select the value and also it is required
   vii) Email Type : user need to select the value and also it is required
   viii) Activity : user need to select the value and also it is not mandatory
   ix) Status : user need to select the value and also it is required
   x) Target Audience : user need to select the value and also it is required
   xi) Subject : user need to fill the value manually and it is also required
   x) Body : user need to fill the value manually and it is also required

2. Search fields
   Inputs:
   i) Template Name: user need to fill the value manually
   ii) Template Code: user need to fill the value manually
   iii) status: user need to fill the value manually
   All the data in the below table will show according to the fields that have been filled by the user

3. MySQL Architecture:
   i) templateName: it is of varchar type and 100 characters can be inserted
   ii) templateCode: it is of varchar type and 50 characters can be inserted
   iii) scenario: it is of varchar type and 255 characters can be inserted but it is not mandatory
   iv) providers: it is of varchar type and 100 characters can be inserted
   v) user: it is of varchar type and 100 characters can be inserted
   vi) tier: it is of varchar type and 100 characters can be inserted
   vii) emailType: it is of varchar type and 255 characters can be inserted
   viii) activity: it is of varchar type and 100 characters can be inserted but it is not mandatory
   ix) status: it is of varchar type and 10 characters can be inserted
   x) targetAudience: it is of varchar type and 255 characters can be inserted
   xi) subject: it is of varchar type and 255 characters can be inserted
   xii) body: it is of text type and and maximum of 65,535 characters can be inserted
4. MongoDB Architecture

5. Backend:

   to start the backend:
   in the current directive:
   i) cd backend
   ii) npm i
   iii) npm run dev

6. Frontend:

   to start the frontend:
   in the current directive:
   i) cd frontend/EmailCom
   ii) npm i
   iii) npm start
