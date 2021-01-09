import { Component } from "@angular/core";
import { AppMapService } from "src/app/services/appMap.service";

@Component({
    templateUrl: "levels.page.html"
})
export class LevelsPage {

    constructor(public appMap: AppMapService) { }

    onLevelClick(level: any) {
        this.appMap.setCurrentLevel(level)
    }
}