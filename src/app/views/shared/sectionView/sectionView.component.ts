import { Component, Input } from "@angular/core";
import { CourseNodeModel, courseNodeTypes } from "src/app/model/courseNode.model";

@Component({
    selector: "section-veiw",
    templateUrl: "sectionVeiw.component.html"
})
export class SectionViewComponent {

    courseNodeTypes = courseNodeTypes
    constructor() { }

    @Input() section: CourseNodeModel;

    onSectionClick(section: CourseNodeModel) {
        this.section = section
    }

    onBackButtonClick() {
        if (this.section.parent)
            this.section = this.section.parent;
    }
}