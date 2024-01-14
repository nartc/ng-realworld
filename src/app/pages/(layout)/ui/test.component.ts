import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-test',
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
		<h1>Welcome to Test!</h1>

		<form [formGroup]="form" (submit)="onSubmit()">
			<label for="firstName">FirstName:</label>
			<input type="text" formControlName="firstName" />

			<label for="lastName">LastName:</label>
			<input type="text" formControlName="lastName" />

			<button type="submit">Submit</button>
		</form>
	`,
	styles: [],
})
export default class Test {
	fb = inject(FormBuilder);
	form = this.fb.group({
		firstName: [''],
		lastName: [''],
	});

	onSubmit() {
		console.log(this.form);
	}
}
