### NPM
>npm is basically a package manager that manages all the dependencies that you need during the project like parcel, express, node etc..,

> [!NOTE]
>package.json = configuration of project dependencies
>For example in package.json file:
```
  "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
```

### why do we need npm?
>   * our project is dependent on many packages, therefore npm will take care of these packages version basically it act as a configuration that have 
    - package version EX: parcel: "^3.8.2"

> [!NOTE]
>### There are two dependencies a package can have
>    - DEV: generally required for development face (-D)
>    - NORMAL: used in production also 


> [!IMPORTANT]
>### install package with right depedencies
>    - npm install -D parcel


### Difference B/W (tilde) "~" and (caret) "^"
    - "~" will automatically updates to the next major version ex: version: 1.2 to 2.0
    - "^"  will auto update to next minor version ex: version 1.2 to 1.2.1

### Transive dependencies
    - if you install parcel dependency package by typing "**npm i -D parcel**" then package parcel have other package that are needed so these folder therfore install another package and that package install another folder which are dependent, therefore the **node modules** folder have more folder plus the folder or package you installed like **parcel**

