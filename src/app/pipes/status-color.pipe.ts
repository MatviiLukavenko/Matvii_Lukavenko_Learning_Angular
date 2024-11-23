import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {
  transform(value: string, isActive: boolean): string {
    return `<span style="color: ${isActive ? 'green' : 'gray'}">${value}</span>`;
  }
}
