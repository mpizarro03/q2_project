TODO:

- HTML  
  - privacy policy page
  - link xperiencegarage.com to problem form
  - reCAPTCHA
  - return general location not lat and long (Success message Boulder, Colorado)

- Styling:
  - style error message for no search results

- backend
  - routes
    - logic in server.js for 'other' topic option

  - query search page
    - can only search by other, logic for if not one of these, show it.
    - full sentence for noun, action, reason

- stretch
  - user login
    - post routes to get logins
    - bcrypt - auth
    - reset password
    - save favorites
  - Full admin panel
  - keyword search
  - mark problems as shitty that we never want to see again
  - make fields on problem form required

- Presentation
  - Inspire people to vent
  - setting up the context
  - Start by sharing xperiencegarage.com (follow path through the website)
  - trends in problems across demographics
  - diversity, prism of perspectives
  - Demo export to CSV



```

Done List

1. Created a new repo on gitHub
2. cloned to local computer
3. Created a .gitignore
   1. added node_modules, .env and DS_Store
4. Created a package.json
   1. npm init -y
5. Created following folders/files:
   1.Public folder created
      1. HTML
      2. CSS
   2. Server.js
6. Created branches: azbranch and mpBranch
7. create .env file
8. npm install:
    -Express
    -Body-parser
    -Bcrypt
    -Knex
    -dotenv
    -pg
