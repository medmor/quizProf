import { Component, Input } from "@angular/core";
import { CourseNodeModel } from "src/app/model/courseNode.model";

@Component({
    template:
        `
        <ion-card-content [innerHTML]="content.content"></ion-card-content>
    `,
    selector: "simple-content-view"
})
export class SimpleContentViewComponent {

    @Input() content: CourseNodeModel;

}