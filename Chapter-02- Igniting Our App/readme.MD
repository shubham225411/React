 **Topics Covered** 

 * what is npm, parcel.
 * node_modules, package.json, package-lock.json
 * whatever change we make to our code it reflects imeediately in browser and parcel is doing it, it is called  **HMR- Hot Module Reloading**


# How does HMR works?
* It is because of File Watcher Algorithm, written in C++


# What is Parcel-cache folder?

* Parcel is using the files inside this folder to do the stuffs which parcel does.

# what is dist folder?
* Dist folder does the minifying
*** when we run npx parcel build index.html , it will build production file for us and will push it to dist folder.**



# what all does parcel do for us?
* HMR
* File Watch Algorithm
* Bundling
* Minify
* Cleaning our Code
* Dev and Production build
* Image optimization
* Caching while development
* Compressions
* Compatible iwth older version of browsers
* HTTPS on dev -> npx parcel index.html --https
* Consistent Hashing Algorithm

#### Parcel is able to do all so much because of different helper-code in node_modules.
#### parcel has some dependency and those dependencies has some dependencies, it's called transitive dependencies.

# We should put parcel-cache in gitignore, bcz it can be auto-generated later




# npx browserlist - > to check for what all browser/versions our app is optimized for