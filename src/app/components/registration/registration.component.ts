import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { namesRoute } from '../../data/name-roures';
import { finalize } from 'rxjs';
import { ModalWindowComponent } from '../modal.window/modal.window.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  isLoading = false;
  title = 'Polyclinic_Client';
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router, private modal: ModalWindowComponent) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\p{P}\d]+$/u)]),
        name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]),
        patronymic: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]),
        surname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        sex: new FormControl('', Validators.required)
      }
    )
  }

  submitAccount() {
    this.isLoading = true;
    if (this.form.valid) {
      this.http.post('https://localhost:5001/api/Auth/Register', this.form.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        response => {
          console.log('Запрос успешно отправлен', response);
          this.router.navigate([`/${namesRoute.HOME}`])
          // Обработка успешного ответа от сервера
        },
        error => {
          console.error('Произошла ошибка при отправке запроса', error);
          this.modal.open('Возникла ошибка',error.error);
          // Обработка ошибки
        }
      );
    }
    else {
      console.log('Invalid Fields', this.form);
    }
  }

}
