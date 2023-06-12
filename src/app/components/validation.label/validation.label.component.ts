import { Component, Input } from '@angular/core';
import { AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation-label',
  templateUrl: './validation.label.component.html',
  styleUrls: ['./validation.label.component.css']
})
export class ValidationLabelComponent {
///Контрол для валидации
  @Input() control: AbstractControl;
///Тип ошибки валидации
  @Input() errorType: string;

  ///Показ блока с валидацией
  isShowValidation(): boolean {
    ///Если formControl был тронут и невалиден
    return this.control.touched && this.control.invalid && this.control.errors[this.errorType]
  }

}
