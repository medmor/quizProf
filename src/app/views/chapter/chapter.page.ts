import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { parse } from "flatted";
import { CourseNodeModel } from "../../model/courseNode.model"
import { AppMapService } from 'src/app/services/appMap.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: 'chapter.page.html'
})
export class ChapterPage implements OnInit {

    course: CourseNodeModel;
    constructor(private http: HttpClient, private appMap: AppMapService, private router: Router) {

        this.http.get(this.appMap.getCurrentChapterUrl() + this.appMap.currentChapter.key + ".json").subscribe(data => {
            this.course = parse(JSON.stringify(data));
        }, err => {
            console.log(err);
            this.router.navigateByUrl('/home')
        })
    }

    ngOnInit() {

    }


}
