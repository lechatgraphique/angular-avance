import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input()
  color ='blue';
  constructor() { }

  ngOnInit(): void {
  }

}
