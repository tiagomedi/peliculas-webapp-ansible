import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Movie } from './interfaces/pelicula.interface';
import { ApiResponse } from './interfaces/response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blockstellart: Películas App';
  public peliculas: Movie[] = [];
  public favoritos: any[] = [];
  public miRating = 0; // Valor inicial

  
  constructor(private peliculasService: PeliculasService
  ) {    
  }
  ngOnInit(): void {    
    this.peliculasEnCartelera();
  }

  peliculasEnCartelera(){
    this.peliculasService.getCartelera().subscribe(cartelera => {
      this.peliculas = cartelera;
    })
  }
}
