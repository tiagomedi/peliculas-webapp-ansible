import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Movie, CarteleraResponse } from '../interfaces/pelicula.interface';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {

    private apiMovieDB: string = environment.apiMovieDB //'https://api.themoviedb.org/3';
    private carteleraPage = 1;
    public cargando: boolean = false;

    constructor( private http: HttpClient
    ) { }

    get params() {
        return {
            api_key: environment.keymovieDB, 
            language: environment.language,
            page: this.carteleraPage.toString()
        }
    }
    
    
    /* resetCarteleraPage() {
        this.carteleraPage = 1;
    } */
    
    
    getCartelera():Observable<Movie[]> {            
        this.cargando = true;
        return this.http.get<CarteleraResponse>(`${ this.apiMovieDB }/movie/now_playing`,{
            params: this.params
        }).pipe(
            map( (resp) => resp.results ),
            tap( () => {
                this.carteleraPage += 1;
                this.cargando = false;
            })
        );
    }
    
    /* buscarPeliculas( texto: string ):Observable<Movie[]> {
        const params = {...this.params, page: '1', query: texto };
        
        // https://api.themoviedb.org/3/search/movie
        return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
            params
        }).pipe(
            map( resp => resp.results )
        )
    } */
        
    /* getPeliculaDetalle( id: string ) {
        return this.http.get<MovieResponse>(`${ this.baseUrl }/movie/${ id }`, {
            params: this.params
        }).pipe(
            catchError( err => of(null) )
        );
    }
    
    getCast( id: string ):Observable<Cast[]> {
        return this.http.get<CreditsReponse>(`${ this.baseUrl }/movie/${ id }/credits`, {
            params: this.params
        }).pipe(
            map( resp => resp.cast ),
            catchError( err => of([]) ),
        );
    } */
}

