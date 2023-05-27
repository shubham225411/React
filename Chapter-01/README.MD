first go through the index.html, then complexedHtml file while revision

**topics covered**
* React.createelement
* reactDOM
* react CDN
* react.render

#
* # Why do we need package-lock?
* In the package.json we have dependencies version declared as caerat(^) or tilde(~), which can later get upgraded tpo some other version but we will still
* see the older version on package.json. SO to know the exact version what is being used in production we need package-lock.json file.
* it also maintains the hash of the version
* Never keep it in gitignore

* Dependencies means our project is dependent on packages
* Dev dependencies means 

**Commands**
* npm i -D parcel -> then it get installed as the dev dependencies
* npm i react react-dom
* npx parcel index.html  -> to ignite the app



## node_modules

* Like our project has depency on parcel, in the same way even has dependencies on some other tools and all these codes/functions are present in node_modules
* Add it in gitignore, bcz package-lock.json has enough resource to regenerate the node_modules again