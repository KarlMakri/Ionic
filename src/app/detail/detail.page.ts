import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProducerService } from '../producer.service';
import { Producer } from '../../models/Producer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
 
  producer: Producer;
  isFavorite: boolean = false;

  constructor(
    private route : ActivatedRoute,
    private producerService: ProducerService
    ) { 
    // console.log(this.route.params);
    }

 

  ngOnInit() {
    // this.route.params est une source observable
    // par conséquent, il est possible d'intercale
    // des opérations de transformation avant la souscription (finale)

    this.route.params
    .pipe(
      // map((params) => params.index * 5 ),
      // map((data) => data + 8),
      // map((data) => this.square(data)),
      // // map((data) => {isRamadamOver})

    )
    .subscribe((data) => {
      // console.log(data);  
      this.producer =
         this.producerService.getProducerByIndex(data.index);

         // Déterminer si ce producteur est dans les favoris
         this.isFavorite = this.producerService.isFavorite(this.producer);
         console.log(this.isFavorite);
         
    })
  }

  toggleFavorite(producer: Producer) {
    this.producerService.toggleToFavorite(producer);
    // On évalue à nouveau la présence du producteur dans les favoris
    // afin de metter à jour le dom se basant sur this.isFavorite
    this.isFavorite = this.producerService.isFavorite(this.producer);
  }

}
