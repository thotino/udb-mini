## WHAT
This module describes and exports all the data models used in the MiNi project.

## INSTALL
### HTTPS
```sh
git clone https://github.com/thotino/udb-mini.git
cd udb-mini
npm install
```

### SSH
```sh
git clone git@github.com:thotino/udb-mini.git
cd udb-mini
npm install
```
## USE
Just import this module in your project, request the data models and use the static functions.
Example : 

```javascript

const models = require("udb-mini");

const userProfileData = {
    firstName: "John",
    lastName: "Doe",
    mailAdress: "john.doe@domain.com",
};

const userCreationPromise = models.userModel.customCreation(userProfileData);
```