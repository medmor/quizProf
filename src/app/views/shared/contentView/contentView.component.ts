import { Component, Input } from "@angular/core";
import { CourseNodeModel } from "src/app/model/courseNode.model";
import { AppMapService } from "src/app/services/appMap.service";

@Component({
    templateUrl: "contentView.component.html",
    selector: "content-view"
})
export class ContentViewComponent {

    @Input() content: CourseNodeModel;

    constructor(public appMap: AppMapService) {
    }


}