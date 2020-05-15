import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeformat'})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string, exponent?: string): string {
    if (value != null) {
        const H = +value.substr(0, 2);
        const h = H % 12 || 12;
        const ampm = (H < 12 || H === 24) ? " AM" : " PM";
        return h + value.substr(2, 3) + ampm;
    }else{
        return null;
    }
  }
}