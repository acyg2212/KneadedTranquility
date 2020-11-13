# Kneaded Tranquility

![Alt text](client/src/assets/homePage-screenshot.png)

## User Stories

* As a typical user I want to be able to schedule an appointment without picking up the phone.
* As a typical user I would like to see my past and future appointments and who they were with.
* As a user I would like to be able to navigate through a spas website wihtout confusion.
* As a spa owner I would like to see the appoinments in a user friendly way.

## Features MVP
* Sign Up Page with First Name, Last Name, Email, Phone Number
* Log-in Page with Email and Password authentication
* A way for the user to schedule a spa appointment and certain employee availability
* When a user is logged in will be able to see their past and future appointments

## Stretch Goals
* A sign in page for employees to see clients that are scheduled.

## Overall Structure

### Back end
The app was built using Express with a PostgreSQL Database. The Kneaded Tranquility App is RESTful

### Front end
The front end is completely built with React and JavaScript. Using React there wasn't any need for refreshes or extra calls to the database. 

### Libraries
* React.js
* BCrypt
* Express
* Sequelize
* Redux
* React-datepicker

## Primary Components

### User Authorization
User Authentication is handled in Express by the BCrypt library. Passwords are not saved in the database, only the hashed passwords. When a client logs in, the password is hashed and checked against the original encrypted password.

![Alt text](client/src/assets/logInScreen.png)

### Scheduling Appointments
Using React components, useState, and useEffect hooks, to dynamically render the appointment form. It is then sent to the back end and stored in the Services table in the database.

![Alt text](client/src/assets/AppointmentScreen.png)

### Clients Appointment Screen
React's useEffect hook is used to make a call to the backend API to get all appointments for the client. The current date is then found using JavaScript Date object. Then the appointments are filtered to either past or future appointments.

![Alt text](client/src/assets/Appointments.png)

## Tables

* Users(clients)
    * First Name
    * Last Name 
    * Password Hashed
    * Phone Number
* Service
    * Type
        * massage
        * Facial
        * nails
    * Price
* Appointment
    * Day
    * Month
    * Year
    * Time
    * Service Id (belongs to service.id)
    * user Id (belongs to user.id)

