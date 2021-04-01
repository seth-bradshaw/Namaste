# Namaste
## About
The purpose behind this application is to provide users with a resource to improve their mental health. Currently Namaste consists of a calendar with the ability to monitor tasks, and a text editor to write in a journal. The final product will include fitness tracking, calorie tracking with macros, and meditation courses. Namaste aims to make the world happier one person at a time.

## Installation
> Currently the backend is hosted on heroku, so there is a possibility that the server may be down when you try to log in or sign up. The server should be up within a minute after your first request. Sorry for any inconvenience this may cause.
* Clone repository <br>
* Cd into ./client <br>
* Install dependencies <br>
  ```
  npm i
  ``` 
* Compile <br>
  ```
  npm start
  ``` 
* Login/Signup (I would suggest logging in to the following account to see populated data) <br>
    * Username: **sethbrad**
    * Password: *password*

## Bugs
* When adding a task or journal locally the dashboard will render the new task/journal right away, however since deploying to heroku there has been an issue where that works half the time due to the longer response time from herokus servers. If you don't see your journal/task being added right away, please click onto another page and go back to the previous dashboard, then it should be there.
    * This bug should be mostly resolved. I used a setTimeout method to delay the change of state that triggers a re-render on the dashboard. Once release 1 is done the re-render will be triggered by the status of the API request.
