1. install vs code
2. install node js "check pdf file section 2"
3. install npm
4. open vs code
5. open a new terminal
6. traverse to the project directory
7. run "npm init -y"
8. make a new directory called config
9. make a new file called ".env"
10. type in it:
"
    PORT=3000
    MONGOODB_URL=mongodb://127.0.0.1:27017/notification-manager-api
"
11. install mongodb "check pdf file section 10" 
12. run mongodb server using "/Users/Andrew/mongodb/bin/mongod --dbpath=/Users/Andrew/mongodb-data" replacing with your correct path
13. to run the server in development mode run "npm run dev"
14. to run the server in deployment mode run "npm run start"
15. (optional) download "robo 3t" and "postman"