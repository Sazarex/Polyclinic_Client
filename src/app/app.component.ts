import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Polyclinic_Client';
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        login: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\p{P}\d]+$/u)]),
        name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]),
        patronymic: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]),
        surname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]),
        email: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required,Validators.minLength(8)]),
        sex: new FormControl('', Validators.required)
      }
    )
  }

  submitAccount() {
    if (this.form.valid) {

      this.http.post('https://localhost:5001/api/Auth/Register', null).subscribe(
        response => {
          console.log('Запрос успешно отправлен', response);
          // Обработка успешного ответа от сервера
        },
        error => {
          console.error('Произошла ошибка при отправке запроса', error);
          // Обработка ошибки
        }
      );
    }
    else {
      console.log('Invalid Fields', this.form);
    }
  }

  ///Показ компонентов валидации
  isShowValidation(field: string): boolean
  {
    ///Если formControl был тронут и невалиден
    return this.form.get(field).invalid && this.form.get(field).touched
  }


}
