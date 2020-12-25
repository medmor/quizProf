import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';
const { CapacitorDataStorageSqlite, Device } = Plugins;

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    public storage: any = {};

    constructor() {
    }

    async init(): Promise<void> {
        const info = await Device.getInfo();
        console.log('platform ', info.platform);
        if (info.platform === 'ios' || info.platform === 'android') {
            this.storage = CapacitorDataStorageSqlite;
        } else {
            this.storage = CapacitorSQLPlugin.CapacitorDataStorageSqlite;
        }
    }

    public async openStore(options: any): Promise<boolean> {
        await this.init();
        const { result } = await this.storage.openStore({ database: 'profquiz' });
        return result;
    }

    public async setTable(table: any): Promise<any> {
        const { result, message } = await this.storage.setTable(table);
        return Promise.resolve([result, message]);
    }

    public async setItem(key: string, value: string): Promise<void> {
        await this.storage.set({ key, value });
        return;
    }

    public async getItem(key: string): Promise<string> {
        const { value } = await this.storage.get({ key });
        return value;
    }

    public async getAllKeys(): Promise<Array<string>> {
        const { keys } = await this.storage.keys();
        return keys;
    }

    public async getAllKeysValues(): Promise<any> {
        const ret = await this.storage.keysvalues()
        return ret
    }

    public async removeItem(key: string): Promise<void> {
        await this.storage.remove({ key });
        return;
    }

    public async clear(): Promise<void> {
        await this.storage.clear();
        return;
    }

    public async deleteStore(options: any): Promise<boolean> {
        await this.init();
        const { result } = await this.storage.deleteStore(options);
        return result;
    }

}