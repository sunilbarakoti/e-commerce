import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(value: number) {
    return Array(value)
      .fill('')
      .map(() => '<p>&#11088;</p>')
      .join('');
  }
}
