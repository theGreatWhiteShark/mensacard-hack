# Initialization
Upon the adding to the Git repository this Ionic project was created
via

``` 
ionic start --v2 mensacard-hack tabs
```

# Structure and features (roadmap)
- three tabs: home, database, about
- 'home': 
  - logo
  - paragraph saying "turn on NFC|ready to scan card"
  - displays (partial) information of scanned card
  - button to import card information to database| paragraph saying it
    is already present
  - *toast* on successful saving to database
- 'database':
  - list containing all the cards (partial information)
  - names can be modified
  - on click: *card* displaying cards information + date of adding
  - *fab*s for deleting or writing card information
  - *confirmation::alert* on information deletion
  - using *list::divider* to highlight most recent written card
- 'about':
  - general information, link to Github
  - disclaimer to not misuse the app
  
# References
So the switch from Cordova to Ionic actually gives use several
overheads:
- It is build
  on [AnuglarJS](https://angular.io/docs/js/latest/quickstart.html)
- Which uses [TypeScript](https://en.wikipedia.org/wiki/TypeScript)
- and introduces several
  new
  [graphical components](http://ionicframework.com/getting-started/).

I highly recommend to do the Angular and Ionic tutorial. Else the
structure of the app is simple too much to handle. TypeScript on the
other hand is quite similar to JavaScript and you will pick up its
usage along the way.

# Development with Ionic
But there is a huge plus in development with Ionic: we can develop in
the browser with an underlying npm server which refreshes the app
whenever we save some changes in the source files!

```
ionic serve
```
