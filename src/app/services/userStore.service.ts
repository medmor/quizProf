import { Injectable } from '@angular/core'
import { StorageService } from './storage.service';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {


    constructor(
        public storageService: StorageService
    ) { }

    setUserTable(): Promise<any> {
        return this.storageService.setTable({ table: 'users' })
    }

    async getUser(): Promise<string> {
        await this.setUserTable()
        return this.storageService.getItem('user')
    }

    async postUser(user: User): Promise<void> {
        await this.setUserTable()
        return this.storageService.setItem('user', JSON.stringify(user))
    }

    async clearUser(): Promise<void> {
        await this.setUserTable()
        return this.storageService.clear()
    }

}