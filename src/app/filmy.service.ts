import { Injectable } from '@angular/core';
import { Film} from './modele/film';



@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {id: 0, tytul:'Avatar', opis: 'Avatar – amerykański film science fiction z 2009, wyreżyserowany, napisany oraz wyprodukowany przez Jamesa Camerona. Produkcja została wykonana przy użyciu przełomowych technik filmowych.', rok: 2009},
    {id: 1, tytul: 'Mis', opis: 'Miś – polska komedia filmowa z 1980 w reżyserii Stanisława Barei, według scenariusza Stanisława Barei i Stanisława Tyma.', rok: 1981},
    {id: 2, tytul: 'Terminator', opis: 'Tytułowy Terminator w pierwszej części serii jest androidem, który został wysłany w przeszłość w celu zlikwidowania Sary Connor , matki przywódcy rebeliantów.', rok: 1984},
  ]

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
