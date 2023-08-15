import { Injectable } from '@angular/core';
import { appart } from 'src/app/share/models/appart';
@Injectable({
  providedIn: 'root',
})
export class AppartService {
  constructor() {}

  getAllAppart(): appart[] {
    return [
      {
        id: 1,
        name: 'Appartement 1',
        description: 'Description 1',
        longDescription: 'Long Description 1',
        commune: 'Commune 1',
        bailleur: 'Bailleur 1',
        favorite: false,
        image: 'assets/maison_1.avif',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
      {
        id: 2,
        name: 'Appartement 2',
        description: 'Description 2',
        longDescription: 'Long Description 2',
        commune: 'Commune 2',
        bailleur: 'Bailleur 2',
        favorite: false,
        image: 'assets/maison_2.avif',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
      {
        id: 3,
        name: 'Appartement 3',
        description: 'Description 3',
        longDescription: 'Long Description 3',
        commune: 'Commune 3',
        bailleur: 'Bailleur 3',
        favorite: false,
        image: 'assets/maison_3.avif',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
      {
        id: 4,
        name: 'Appartement 4',
        description: 'Description 4',
        longDescription: 'Long Description 4',
        commune: 'Commune 4',
        bailleur: 'Bailleur 4',
        favorite: false,
        image: 'assets/maison_4.jpg',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
      {
        id: 5,
        name: 'Appartement 5',
        description: 'Description 5',
        longDescription: 'Long Description 5',
        commune: 'Commune 5',
        bailleur: 'Bailleur 5',
        favorite: false,
        image: 'assets/maison_5.avif',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
      {
        id: 6,
        name: 'Appartement 6',
        description: 'Description 6',
        longDescription: 'Long Description 6',
        commune: 'Commune 6',
        bailleur: 'Bailleur 6',
        favorite: false,
        image: 'assets/maison_6.avif',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
      {
        id: 7,
        name: 'Appartement 7',
        description: 'Description 7',
        longDescription: 'Long Description 7',
        commune: 'Commune 7',
        bailleur: 'Bailleur 7',
        favorite: false,
        image: 'assets/maison_7.avif',
        star: 0,
        tags: ['tag1', 'tag2'],
      },
    ];
  }
}
