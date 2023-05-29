import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _todoService: TodoService) {}

  public formGroup!: FormGroup;

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = this._formBuilder.group({
      priority: [ 'high', [ Validators.required ] ],
      description: [ , [ Validators.required ] ],
      dueDate: [ , [ Validators.required ] ]
    });
  }

  public onSave(): void {
    this._todoService.addTodo(this.formGroup.value);
    this.formGroup.reset();
    this.formGroup.controls['priority'].setValue('high');
  }
}
