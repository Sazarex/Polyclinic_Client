import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlay-loader',
  templateUrl: './overlay.loader.component.html',
  styleUrls: ['./overlay.loader.component.css']
})
export class OverlayLoaderComponent {

///Флаг загрузки
@Input() isLoading: boolean;
}
