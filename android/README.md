# In this README I will go more into detail regarding the development of the Apache Cordova app itself
The starting point of this app is the [example app of the Beginning NFC book](https://github.com/tigoe/BeginningNFC/blob/master/NfcReader/www/js/index.js). For convenience sake I placed the original versions of Cordova's *config.xml* and the apps *index.html*, *index.css* and *index.js* in *android/res/staring-point*. 

## Roadmap

But it is way to simple to serve our purposes. What we need is:

- A second view containing a table listing the cards already read
- Therefore the app has to be able to persistently store information
- We should be able to rename each item in the table
- Each card should appear only once (even if read multiple times)
- We need a function to write the content of a chosen item to a tag

## References
- The official documentation of [Apache Cordova](https://cordova.apache.org/docs/en/latest/)
- [JavaScript tutorial](https://www.tutorialspoint.com/javascript/)

# Harden our app using a whitelist
On default we use the [cordova-plugin-whitelist](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/) which allows only specified web pages and protocols to be accessed. But since we do not need an API etc. let's configure the app to be able to access only local files.

Therefore we have to delete all tags in Cordova's *config.xml* called **<access>** and **<allow-intent>**. 
