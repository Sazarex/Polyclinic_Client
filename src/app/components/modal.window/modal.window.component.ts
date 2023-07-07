import { Component } from '@angular/core';

//Для открытия модалки от бутстрап
declare var bootstrap: any;

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal.window.component.html',
  styleUrls: ['./modal.window.component.css']
})

export class ModalWindowComponent  {

  open(titleText, bodyText) {
    var modal = document.getElementById('modal');
    modal.querySelector('.modal-body').innerHTML = '<p>'+ bodyText+ '</p>';
    modal.querySelector('#modalLabel').textContent = titleText;

    var myModal = new bootstrap.Modal(modal);
    myModal.show();
  }
}
