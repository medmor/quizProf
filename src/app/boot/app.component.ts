import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { StorageService } from '../services/storage.service';
//import { UserStoreService } from '../services/userStore.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        //private storageService: StorageService,
        //private userStore: UserStoreService
    ) {
        this.initializeApp();
    }

    async initializeApp() {
        await this.platform.ready()
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        //await this.storageService.openStore({ database: 'profQuiz' })
        //await this.userStore.clearUser()
    }
}
