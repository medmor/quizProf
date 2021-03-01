import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CourseNodeModel } from "src/app/model/courseNode.model";
import { AppMapService } from "src/app/services/appMap.service";

@Component({
    templateUrl: "contentView.component.html",
    selector: "content-view"
})
export class ContentViewComponent {

    @Input() content: CourseNodeModel;

    constructor(public appMap: AppMapService, public modalController: ModalController) {

    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ContentViewComponent,
            componentProps: {
                "content": this.content.children[1]
            }
        });
        return await modal.present();
    }

}