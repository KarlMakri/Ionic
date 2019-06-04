import { Injectable } from '@angular/core';
import { Producer } from '../models/Producer';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  producers: Producer[];
  favoriteProducers: Producer[] = [];

  constructor() {
    this.producers = [
      new Producer('Bio Coop', 'https://assets.afcdn.com/recipe/20161010/64090_w1024h768c1cx3680cy2456.jpg'),
      new Producer('Pofta Mare', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIn3Q_RkonA-M-BenPc9XALnIIvL3s5rGEyyGyum_69NKlLQs'),
      new Producer('Jardin des délices', 'https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/4n/salade-composee-au-thon-123.jpg') 
    ];


    for(var i=0; i<this.producers.length; i++) {
      this.producers[i]
      .setDescription("Chaîne implentée dans toute l'Alsace depuis 1963");
    }
   }

   getProducers() {
     // Généralement: requête http ici 
     return this.producers
   }

   getProducerByIndex(index) {
     return this.producers[index];
   }

   toggleToFavorite(producer: Producer) {
    //  this.favoriteProducers.push(producer)
    let index = -1;
    for ( var i = 0; i<this.favoriteProducers.length; i++){
        if (producer.name == this.favoriteProducers[i].name) {
          index = i;
          break;
        }
    }
    if (index == -1) {
      // L'élément Producteur recherché n'est pas dans le tableau des favoris
      this.favoriteProducers.push(producer)
      // console.log('Producteur ajouté aux Favoris');
      
    } else {
      // Le producteur est déjà dans le favori => on le retire du tableau
      this.favoriteProducers.splice(index, 1)
      // console.log('Producteur Éjecté ! ');
      
    }
   }

   isFavorite(producer: Producer): boolean {
     let index = -1;
     for (var i = 0; i<this.favoriteProducers.length; i++) {
       if (producer.name == this.favoriteProducers[i].name) {
         index = i;
         break;
       }
     }
     return index != -1; // retourne le résultat booléen de la comparaison
   }
}
