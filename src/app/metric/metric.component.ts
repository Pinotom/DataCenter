import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {

  @Input() title = '';
  @Input() description = '';
  private _value = 0;
  private _max = 100;

  @Input()
  set value(value: number) {
    if (isNaN(value)) { value = 0; }
    this._value = value;
  }
  get value(): number { return this._value; }

  @Input()
  set max(max: number) {
    if (isNaN(max)) { max = 100; }
    this._max = max;
  }
  get max(): number { return this._max; }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}