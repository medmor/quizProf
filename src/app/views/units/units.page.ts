import { Component } from "@angular/core";
import { AppMapService } from "src/app/services/appMap.service";

@Component({
    templateUrl: "units.page.html"
})
export class UnitsPage {
    constructor(public appMap: AppMapService) { }

    onUnitClick(unit: any) {
        this.appMap.setCurrentUnit(unit)
    }
}