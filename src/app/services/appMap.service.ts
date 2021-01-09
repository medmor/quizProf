import { Injectable } from '@angular/core';
import { levels } from "../model/appMap/appMap.model"
import { AppMapNode } from '../model/appMap/appMapNode.model';


@Injectable({
    providedIn: 'root',
})
export class AppMapService {

    levels = levels;
    currentLevel: AppMapNode;
    currentUnit: AppMapNode;
    currentChapter: AppMapNode;

    constructor() { }

    setCurrentLevel(level: AppMapNode) {
        this.currentLevel = level;
    }

    setCurrentUnit(unit: AppMapNode) {
        this.currentUnit = unit;
    }

    setCurrentChapter(chapter: AppMapNode) {
        this.currentChapter = chapter;
    }

    getCurrentChapterUrl() {
        return `/assets/levels/${this.currentLevel.key}/${this.currentUnit.key}/${this.currentChapter.key}/`
    }
}