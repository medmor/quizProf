import { Component, Input } from "@angular/core";
import { CourseNodeModel } from "src/app/model/courseNode.model";
import { AppMapService } from "src/app/services/appMap.service";

@Component({
    template:
        `
        <ion-card-content>
            <img [src]="appMap.getCurrentChapterUrl()+'figures/'+content.content.substring(3,content.content.length-4)+'.png'"
                [alt]="appMap.getCurrentChapterUrl()+'figures/'+content.content.substring(3,content.content.length-4)+'.png'" />
        </ion-card-content>
    `,
    selector: "figure-view"
})
export class FigureViewComponent {

    @Input() content: CourseNodeModel;
    constructor(public appMap: AppMapService) {
    }

}