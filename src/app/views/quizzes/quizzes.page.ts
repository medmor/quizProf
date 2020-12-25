import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { QuizStoreService } from '../../services/quizStore.service';
import { Quiz } from '../../model/quiz';



@Component({
    selector: 'app-quizzes',
    templateUrl: 'quizzes.page.html'
})
export class QuizzesPage implements OnInit {

    quizzes: Quiz[]
    selectedChoice = 'none'

    constructor(private quizStore: QuizStoreService) {}

    ngOnInit() {
        this.quizStore.getAllQuizzes().then(({ keysvalues }: any) => {
            this.quizzes = keysvalues.map(kv => JSON.parse(kv.value))
        })
    }



}
