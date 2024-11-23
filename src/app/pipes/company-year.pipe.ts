import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyYear'
})
export class CompanyYearPipe implements PipeTransform {
  transform(company: string, year: number): string {
    console.log('Custom Pipe Initialized - Version 2.0');
    return `${company} (${year})`;
  }
}
