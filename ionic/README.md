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
- Using [data storage in Cordova](https://cordova.apache.org/docs/en/latest/cordova/storage/storage.html)
- Using [data storage in Ionic](https://github.com/gylippus/ionic-offline-storage)
- [IndexDB-API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) including
  tons of helpful links for further reading
- For getting start with *IndexDB* in Ionic I actually used this
  [Github tutorial](https://github.com/akhil110/Recipe-Book) by
  Akhilesh Srivastava. It comes along with a [video](https://www.youtube.com/watch?v=Yqkow3fOvug&feature=youtu.be) but it's not that
  well done and one learns most by just jumping into the code with the
  reference at hand ;)

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

# Building a database for the cards read by the app
When storing information in an app there are more or less two ways to
do it: saving it as session/persistent key-values pairs or saving it
persistently in a database.

## Key-values pairs
This is quite handy if you want to store some quick values e.g. to
initialize your app at a certain position after it got terminated
while switching to another application. In addition it is also much
more simple to use compared to a database. But keep in mind you are just
allowed to store key-value pairs! (at least in the Cordova native
version. Not your about the Angular extensions).

The framework Cordova supports native is
called
[localStorage](https://cordova.apache.org/docs/en/latest/cordova/storage/storage.html). It's
a nice feature but fairly limited. That's why I won't use it in my
mensacard-app.

In addition to the Cordova basic implementation there are also other
ones introduced by AngularJS and the Ionic framework. For example
[Angular-cache](http://www.pseudobry.com/angular-cache/) (which
doesn't seem to be developed anymore) and
[ngStorage](https://github.com/gsklee/ngStorage). The big advantage
using those frameworks over the *localStorage* is that they will also
work with web applications outside of the Cordova framework. So in
exchange to the overhead of diving into the documentations you add
quite a nice tools to your programmer's toolbox. If I need to store
some data at a later point in the app I most probably will use the
*ngStorage*.

## Database

In times of big data and app stores databases are THE way to store
your data because:

1. They are efficient to use.
2. They scale!

### With remote synchronization
Due to the intention of this app I will only talk about local storage
of the data and not about databases which can be synchronized with a
server-side counterpart like [Firebase](https://firebase.google.com/)
or [Backand](https://devdactic.com/ionic-backend-database/). Both are
backend-as-a-service meaning the provider also hooks you up with a
server your database is running on. (If it's sensible data make sure
the servers arn't running in the USA!)

### Just local databases
In the
pure
[Apache Cordova](https://cordova.apache.org/docs/en/latest/cordova/storage/storage.html) implementation
there are to databases you can use to store your data in:

1. WebSQL
2. IndexDB

I would highly recommend using *IndexDB* over *WebSQL* since Mozilla
[decided](https://en.wikipedia.org/wiki/Web_SQL_Database) to vote for
*IndexDB* and for the deprecation of *WebSQL*

You could also
use [localForage](https://github.com/localForage/localForage) which is
a wrapper around all three of the Cordova storing systems:
localStorage, WebSQL and IndexDB. 

There is a whole zoo of additional
databases out there with each of them having its pros and cons. Since
our app is intended to run an Android devices I choose to use the
*IndexDB* and the plain one; not a wrapper. This way I can finally
learn a little bit about the handling of a noSQL database. :)

# Getting our hands dirty
If you are not familiar with databases
this
[side](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB) provides
a nice overview. Before using *IndexDB* you should definitely check
out
[this](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Creating_or_updating_the_version_of_the_database) quite
comprehensive guide.

The *indexDB* database can
be
[purged by the browser](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) if
it takes too much space. But this will most likely not happen.

In my opinion Ionic and Angular have main problem: They are quite new
and still evolving. I implicitly assume it but all the time I am
speaking actually of Ionic2 and Angular2 and all the code would not
run using the previous version since they are not
compatible. [This](http://blog.ionic.io/angular-2-series-components/)
explains quite nicely why most of the samples on e.g. StackOverflow
are obsolete and the author of the post also claims its code should
not be used anymore since its deprecated because of changes in
Angular2 as well. Okay. Quite nice.

[code examples](https://github.com/driftyco/ionic-preview-app/tree/master/src)

I stopped right here:

- Tutorial
  Nr. [1](https://www.pluralsight.com/guides/software-engineering-best-practices/ionic-2-database-management-and-versioning) and
  [2](http://gonehybrid.com/how-to-use-pouchdb-sqlite-for-local-storage-in-ionic-2/) for
  using databases in an Ionic2 application
- [http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html](Typescript) reference
- [ionic v2 doc](http://ionicframework.com/docs/v2/cli/generate/)
- [Dependency Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html) in
  Angular apps


Beware: I added the plugins folder to the .gitignore!
