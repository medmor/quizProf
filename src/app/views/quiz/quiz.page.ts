import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";

import { QuizStoreService } from "../../services/quizStore.service";
import { Quiz } from "../../model/quiz";
import { Router } from "@angular/router";

@Component({
	selector: "app-quiz",
	templateUrl: "quiz.page.html",
})
export class QuizPage implements OnInit {
	public quizForm: FormGroup;
	public choices = new FormArray([new FormControl("")]);

	constructor(private quizStore: QuizStoreService, private formBuilder: FormBuilder, private router: Router) {
		this.quizForm = this.formBuilder.group({
			level: ["", Validators.required],
			unit: ["", Validators.required],
			chapter: ["", Validators.required],
			question: ["", Validators.required],
			answer: ["", Validators.required],
		});
	}

	ngOnInit() {}

	addChoice() {
		this.choices.push(new FormControl(""));
	}

	postQuiz() {
		const quiz = new Quiz(
			uuidv4(),
			this.quizForm.controls.level.value,
			this.quizForm.controls.unit.value,
			this.quizForm.controls.chapter.value,
			this.quizForm.controls.question.value,
			this.quizForm.controls.answer.value,
			this.choices.controls.map((c) => c.value)
		);
		this.quizStore.postQuiz(quiz).then(() => {
			this.router.navigateByUrl("quizzes");
		});
	}
}
