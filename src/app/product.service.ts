import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api: string = "https://api.myjson.com/bins/agyrb";

  constructor(private http: HttpClient) { 
    // console.log(this.http);
    
  }

  getFruits() {
    // fetch(api).then() c'est du natif, on sort du framework.
  
    // Attention: asunchronie. getFruits() retourne toujours
    // avant la requête asynchrone this.http.get

    // // this.http.get(this.api).subscribe((fruits) => {
    //   console.log(fruits);
    //   return this.getFruits;
      
    // })
    // return 'blabla';

    // On retourne la source observable, le composant consommateur
    // devra souscrire à cette source
    return this.http.get(this.api)
  }
}
