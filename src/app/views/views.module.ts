import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from '../views/home/home.page';
import { ViewsRoutingModule } from './views-routing.module';
import { IonicModule } from '@ionic/angular';
//import { QuizPage } from './quiz/quiz.page';
//import { QuizzesPage } from './quizzes/quizzes.page';

@NgModule({
    declarations: [HomePage, /*QuizPage, QuizzesPage*/],
    imports: [IonicModule, CommonModule, ViewsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ViewsModule { }