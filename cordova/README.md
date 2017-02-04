# Introduction

The starting point of this app is the [example app of the Beginning NFC book](https://github.com/tigoe/BeginningNFC/blob/master/NfcReader/).

# References
- The official documentation of [Apache Cordova](https://cordova.apache.org/docs/en/latest/)
- [JavaScript tutorial](https://www.tutorialspoint.com/javascript/)
- [Beginning NFC](https://www.overdrive.com/media/1542006/beginning-nfc) book by Tom Igoe, Don Coleman, and Brian Jepson

# Create an AVD (Android virtual device)
Using the android CLI, you con create a virtual Android device using the following command

```
android create avd -n first-try -t android-23 -c 1000M --abi x86
```

This will create an AVD named "first-try" with the *target* android-23 resembling Android 6. You can view all available targets using 

```
android list targets
```

With the *-c* Option you can specify the amount of memory granted to the Android virtual device. But be careful, it actually uses more than that. E.g. for the 1GB I used, it created a file of 3GB in size.

Last I also had to specify the [ABI](https://en.wikipedia.org/wiki/Application_binary_interface). I choose a X86 architecture since this is the one my laptop is based on. Not sure if this is the right choice to make. But it works for me.

# Installing the app on the AVD

To power up the AVD, run

```
android avd
```
(Be sure to wait until it's completely loaded). Then go to the root android path of our cordova project and install the app via 

``` 
cordova run --emulator
```

But keep in mind, there is no straight forward way to test the NFC capabilities of the app using a laptop. It's just a nice way to check the validity of all the JavaScript code.

# Harden the app using whitelisting
On default, we use the [cordova-plugin-whitelist](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist/), which allows only specified web pages and protocols to be accessed from the app. 

But since we do not need an API etc., I configured the app to be able to access local files only. 

Therefore I deleted/commented all tags in Cordova's *config.xml* called **<access>** and **<allow-intent>**. 
