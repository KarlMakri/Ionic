import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  fruits: string[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService
      .getFruits()
      .pipe(
        //map((fruits: any[]) => fruits.length)
        // map((fruits: any[]) => fruits[0].name.toUpperCase())
        map((fruits: any[]) => {
          let fruitsCapitalized = [];
          fruits.forEach(fruit => fruitsCapitalized.push(fruit.name.toUpperCase()))
          // console.log(fruitsCapitalized);
          return fruitsCapitalized;
          
        })
      )
      .subscribe((fruitNames) => {
        this.fruits = fruitNames;
        // console.log(res)
      })
  }

}