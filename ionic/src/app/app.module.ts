import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { DatabasePage } from '../pages/database/database';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

/* export function provideStorage(){
 *   return new Storage([ 'sqlite', 'websql', 'indexdb' ],
 * 		     { name: '__mydb' });
 * }*/


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DatabasePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DatabasePage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    //{ provide: Storage, useFactory: provideStorage }
  ]
})
export class AppModule {}

