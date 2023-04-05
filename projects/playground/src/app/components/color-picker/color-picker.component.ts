import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ColorPickerComponent,
      multi: true
    }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor {
  @Input() color ='blue';
  @Input() disabled = false;

  onChange: (_: any) => void = (_: any) => {}
  onTouched: () => void = () => {}


  setColor(color: string): void {
    this.color = color;
    this.onChange(this.color);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(color: string): void {
    this.color = color;
  }

}
