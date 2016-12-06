import { IProduct } from './iproduct';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], search: string): any {
    return products.filter(p => 
        p.description.toLocaleLowerCase().includes(
            search.toLocaleLowerCase()
        )
      );
  }

}
