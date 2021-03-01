import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChapterPage } from '../views/chapter/chapter.page';
import { ViewsRoutingModule } from './views-routing.module';
import { IonicModule } from '@ionic/angular';
import { SectionViewComponent } from './shared/sectionView/sectionView.component';
import { LevelsPage } from './levels/levels.page';
import { UnitsPage } from './units/units.page';
import { ChaptersPage } from './chapters/chapters.page';
import { HomePage } from './home/home.page';
import { ContentViewComponent } from './shared/contentView/contentView.component';
import { SimpleContentViewComponent } from './shared/contentView/simpleContentView.component';
import { FigureViewComponent } from './shared/contentView/figureView.component';

@NgModule({
    declarations: [
        ChapterPage,
        LevelsPage,
        UnitsPage,
        SectionViewComponent,
        ChaptersPage,
        HomePage,
        ContentViewComponent,
        SimpleContentViewComponent,
        FigureViewComponent
    ],
    imports: [IonicModule, CommonModule, ViewsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ViewsModule { }