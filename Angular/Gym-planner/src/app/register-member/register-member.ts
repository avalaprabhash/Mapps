import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MemberService } from '../member';


@Component({
  selector: 'app-register-member',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-member.html',
  styleUrl: './register-member.css'
})
export class RegisterMember {

  private fb = inject(FormBuilder);
  private memberService = inject(MemberService);

  gymForm: FormGroup = this.fb.group({
    name: ['',Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    height: ['', Validators.required],
    weight: ['', Validators.required],
    goal: ['', Validators.required],
    trainer: ['', Validators.required],

    medicalConditions: this.fb.array([]),
    workoutDays: this.fb.array([])
  });

  get medicalConditions(): FormArray {
    return this.gymForm.get('medicalConditions') as FormArray;
  }

  get workoutDays(): FormArray {
    return this.gymForm.get('workoutDays') as FormArray;
  }

  addMedicalCondition() {
    this.medicalConditions.push(
  this.fb.control('', Validators.required)
);
  }

  removeMedicalCondition(index: number) {
    this.medicalConditions.removeAt(index);
  }

  addWorkoutDay() {
    this.workoutDays.push(
  this.fb.control('', Validators.required)
);
  }

  removeWorkoutDay(index: number) {
    this.workoutDays.removeAt(index);
  }

  submit() {

    if (this.gymForm.invalid) {
      this.gymForm.markAllAsTouched();
      return;
    }

    this.memberService.addMember(this.gymForm.value);

    console.log(this.memberService.getMembers());

    this.gymForm.reset();
  }
}