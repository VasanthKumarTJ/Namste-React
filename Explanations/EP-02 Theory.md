# Steps  🚀
  - to dwnld parcel package
    ```
    npm i -D parcel
    ```
  - to dwnld react and react-dom
    ```
    npm i react
    npm i react-dom
    ```
  - to run using parcel in a localserver as a development build 
    ```
    npx parcel index.html 
    ```
  - write in top of app.js file
    ```
    import React from "react"
    import ReactDOM from "react-dom" 
    ```

    
# Explanations  🚀

# EP-02 Part-01 [ignating our app]  🚀
## Q:NPM
   - npm is basically a package manager that manages all the dependencies that you need during the project like parcel, express, node etc..,

> [!NOTE]
>package.json = configuration of project dependencies
>For example in package.json file:
> ```
>  "{
>      "name": "episode-02---igniting-our-app",
>      "version": "1.0.0",
>      "description": "learning react",
>      "main": "index.js",
>      "scripts": {
>        "test": "jest"
>      },
>      "keywords": [],
>      "git repository": "https://github.com/VasanthKumarTJ/Namste-React.git",
>      "author": "Vasanth Kumar",
>      "license": "ISC",
>      "devDependencies": {
>        "parcel": "^2.10.3"
>      }
>    }"
> ```

## Q:why do we need npm?
>   * our project is dependent on many packages, therefore npm will take care of these packages version basically it act as a configuration that have 
>   - package version EX: 
>    ```
>    "dependencies": {
>    "react": "^18.2.0",
>    "react-dom": "^18.2.0"
>    }
>  ```

> [!NOTE]
>## Q:types of dependencies a package can have
>    - ### learnt in namaste-react by akshay:
>        - DEV: generally required for development face (-D)
>        - NORMAL: used in production also
>
>    - ### others:
>        - peer dependencies.
>        - optional dependencies.
>        - bundled dependencies.


> [!IMPORTANT]
>## Q: install package with right depedencies
> ```
>   npm install -D parcel
> ```


## Q:Difference B/W (tilde) "~" and (caret) "^"
    - "~" will automatically updates to the next major version ex: version: 1.2 to 2.0
    - "^"  will auto update to next minor version ex: version 1.2 to 1.2.1

## Q:Transive dependencies
   - if you install parcel dependency package by typing "**npm i -D parcel**" then package parcel have other package that are needed so these folder therfore install another package and that package install another folder which are dependent, therefore the **node modules** folder have more folder plus the folder or package you installed like **parcel**

# EP-02 part-02 🚀

## Q: What is Parcel/Webpack? Why do we need it?
   - A: Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application     with different type functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires   zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to   start. Parcel/ Webpack are type of bundlers that we use to power our application with different type functionalities and features.

## Parcel Features:
    - dev build
    - local server 
    - HMR (Hot Module Replacement) 
    - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
    - File watcher algorithm [ made with C++] 
    - caching [faster builds]
    - IMAGE optimization
    - Bundling
    - MINIFY in production build
    - compress
    - consistent hasing
    - code splitting
    - differential Bundling - support older browsers
    - Diagnostics
    - Gives better error suggestions
    - HTTPs
    - Tree Shaking - remove unused code for you
    - Diff bundles for DEV and Prod

# installation commands:
## Install:
   ```
   npm install -D parcel
   ```
   - D is used for development and as a development dependency.

## Q: what is npx
   - npx is like node  that executes the package and index.html file in the server so we can host the file in the server
   -  npx is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## Q: diff between "npx" and "npm"
   - npm means we are installing the package
   - npx means we are executing a particular package
   

## Parcel Commands :
   - for development build
     ```
     npx parcel <entry_point> 
     npx parcel index.html
     ```
  - For production build :
  - we have to remove the entry point in ``npm package.json, "main": App.js`` cause we use ``entry point`` in our parcel
    ```
    npx parcel build <entry_point> 
    ```

> [!IMPORTANT]
>## npm and react
>   - using react by cdn link is ``not prefereable`` because we make a network call to that link so we can get react but why do we need
to make netework call if we have react on our node modules 
>   - another advantage is ```we need update the link if another version of react comes``` but if we use npm the ```caret will update automatically```
>
>   ```
>   npm i react
>   npm i react-dom
>   ```
>   - even after installing react and react-dom as a package when  you run the server useing npx it will throw a errow saying react is not defined because we installed it but the file doest not know where React keyword coming from yet  so we have to import it using
>   ```
>   import React from "react"
>   import ReactDOM from "react-dom"
>   ```
>   - at the top☝
