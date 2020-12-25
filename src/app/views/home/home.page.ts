import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../../model/user';
//import {UserStoreService} from '../../services/userStore.service'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html'
})
export class HomePage implements OnInit {

    userForm: FormGroup
    authorizationForm: FormGroup
    user: User
    authorized = false

    constructor(private formBuilder: FormBuilder) {



    }

    ngOnInit() {

    }
    
    onclick(level: string){
        console.log(level)
    }

}
