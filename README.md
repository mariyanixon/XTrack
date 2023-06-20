# XTrack


# FrontEnd
## cd frontend
## npm install
## npm start

# Backend
## npm install 
## npm start

# Deploy to versel
## Front end app folder => npm build
## copy build folder contents  to  public folder
## add below line in index.js 
 
```JS 
app.use(express.static("public"));
```
## add vercel.json

## copy index.js to api/index.js 

## https://vercel.com/new   => Continue with github, Add the repo , deploy with default settings.