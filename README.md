# Introduction

Since NFC and RFID is imho a quite nice way to communicate with things you build which do not have any power supply I wanted to dive into this topic since quite a while. And be honest: who wants to have cables all over the place when you also could do it without?

A second thing which also bothered me was the security issue of RFID chips in all sorts of cards you have in your wallet. While I was buying a RFID block-condom for my ID at the 33C3 a guy from [digitalcourage](https://www.digitalcourage.de/themen/rfid) told me a lot of credit cards actually provide the credit card number as well as the date of expiration without any encryption. Creepy. So I decided (based on an idea by old [Justus](https://github.com/jusjusjus)) to check out the card of the cafeteria of the local university I'm doing my PhD at.

![cafeteria card](./res/cafeteria-card.jpg)

## Roadmap
1. First I write some code to extract the content of the cafeteria card.
2. I will write this content to a NFC-tag and see if I'm able to pay with it in the cafeteria.
3. Last I will check out how easy it is to read out the card's content with an NFC-enabled Android phone. So is it enough to stand next to someone while she/he has the card in her/his wallet? How large is the distant allowed to be or are the clothes and the wallet already protection enough?

## Requirements
- I will use an Huawei ALE-L21 phone running Android 6 and a Linux laptop running Ubuntu 16.10
- To build an app to read the card's content we will use [Apache Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html) as the underlying framework and the [Android debugging bridge (ADB)](https://developer.android.com/studio/command-line/adb.html) in order to install it.
- In addition I will use an Arduino Mega with an NFC shield to write the content to the tag. You could of course just use your phone for this task since you already set up the Cordova app anyway. But I have the urge of using my Arduino and mini computers more frequently. :)

## Reference 
For everyone how want to dive deeper into the subject of NFC I can recommend the [Beginning NFC](https://www.amazon.com/Beginning-NFC-Communication-Arduino-PhoneGap/dp/1449372066/ref=sr_1_1?s=office-products&ie=UTF8&qid=1483802943&sr=8-1&keywords=igoe+nfc) by Tom Igoe, Don Coleman and Brian Jepson. Its very applied and you find a lot of actual code in there. Clearly intended for makers and hardware enthusiasts.

# Reading the card's content via smartphone
## Setting up the development environment
Before we start building our own custom app we have to set up the Android development environment.

First we install the Java environment
```
sudo apt install default-jdk default-jre icedtea-plugin
```

Then we have to set up the Android SDK (software development kit). A year ago I would had suggest to go to the [Android web page](https://developer.android.com/studio/index.html) and download the newest kit. But it seems to be not available anymore separately from Android Studio. Which sucks. Also I'm *not* using Android Studio but Emacs for developing.

Fortunately the SDK is included in the Ubuntu package repositories so we don't have to think about setting the whole thing up and updating at all. 
```
sudo apt install android-sdk android-sdk-build-tools  android-sdk-platform-tools
```

To check if the setup was successful connect your Android phone via USB go to the *Settings > Developer options* and enable *USB debugging*. If you don't see the *Developer options* go to *Setting > About phone* and click about eight time on the *Build number*. Then check if you can see your phone via the *Android debugging bridge (ADB)*

```
adb devices
```

To install Apache Cordova just use the node.js package manager

```
sudo npm install -g cordova
```
