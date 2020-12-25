import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
//import { QuizPage } from './quiz/quiz.page'
//import { QuizzesPage } from './quizzes/quizzes.page'

const routes: Routes = [
    { path: 'home', component: HomePage },
    /*{ path: 'quiz', component: QuizPage },
    { path: 'quizzes', component: QuizzesPage },*/
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }