import { Injectable } from '@angular/core';

export interface Movie {
  id?: string;
  name?: string;
  date?: string;
  state?: string;
}

@Injectable()
export class MoviesService {

  private movies: Movie[] = [
    {
      id: 'dece42d8-8c31-47ea-8291-59239a0d4c51',
      name: 'Joker',
      date: '2020-02-13',
      state: 'true',
    }
  ];

  constructor() {}

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: string): any {
    let result;
    this.movies.forEach((item, index) => {
      if(item.id === id){
        result =  this.movies[index];
      }
    })
    return result;
  }

  save(movie :Movie){
    let update = [];
    this.movies.forEach((item, index) => {
      if(item.id === movie.id){
        update.push(this.movies[index]);
        this.movies[index].name = movie.name;
        this.movies[index].date = movie.date;
        this.movies[index].state = movie.state;
      }
    })
    if(update.length === 0){
      this.movies.push(movie);
    }
  }

  deleteById(id: string){
    let subindex;
    this.movies.forEach((item, index) => {
      if(item.id === id){
        subindex = index
      }
    });
    this.movies.splice( subindex, 1 );
  }
}


