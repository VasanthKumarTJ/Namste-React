## Q:NPM
>npm is basically a package manager that manages all the dependencies that you need during the project like parcel, express, node etc..,

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

