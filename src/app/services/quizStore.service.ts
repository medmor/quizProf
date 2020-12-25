import { Injectable } from '@angular/core'
import { StorageService } from './storage.service';
import { Quiz } from '../model/quiz';

@Injectable({
    providedIn: 'root'
})
export class QuizStoreService {


    constructor(
        public storageService: StorageService
    ) { }

    setQuizTable(): Promise<any> {
        return this.storageService.setTable({ table: 'quizzes' })
    }

    async getAllQuizzesKeys(): Promise<string[]> {
        await this.setQuizTable()
        return this.storageService.getAllKeys()
    }

    async getAllQuizzes(): Promise<any>{
        await this.setQuizTable()
        return this.storageService.getAllKeysValues();
    }

    async getQuiz(id): Promise<string> {
        await this.setQuizTable()
        return this.storageService.getItem(id)
    }

    async postQuiz(quiz: Quiz): Promise<void> {
        await this.setQuizTable()
        return this.storageService.setItem(quiz.id, JSON.stringify(quiz))
    }

}
