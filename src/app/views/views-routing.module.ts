import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterPage } from './chapter/chapter.page';
import { ChaptersPage } from './chapters/chapters.page';
import { HomePage } from './home/home.page';
import { LevelsPage } from './levels/levels.page';
import { UnitsPage } from './units/units.page';

const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'levels', component: LevelsPage },
    { path: 'units', component: UnitsPage },
    { path: 'chapters', component: ChaptersPage },
    { path: 'chapter', component: ChapterPage },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }