import { Component } from "@angular/core";
import { AppMapNode } from "src/app/model/appMap/appMapNode.model";
import { AppMapService } from "src/app/services/appMap.service";

@Component({
    templateUrl: "chapters.page.html"
})
export class ChaptersPage {
    constructor(public appMap: AppMapService) { }

    onChapterClick(chapter: AppMapNode) {
        this.appMap.currentChapter = chapter;
    }
}