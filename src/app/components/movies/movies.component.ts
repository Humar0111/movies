import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { MoviesService } from '../../services/movies.service';
import { v4 as uuid } from 'uuid';

// Intefaces
import { Movie } from '../../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  id: string = '';
  movie: Movie;

  movieForm: FormGroup;
  nameCtrl = new FormControl('', Validators.required);

  constructor(
    private _movieSrv: MoviesService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getMovies();
    this.movieForm = this._buildForm();
  }

  getMovies(){
    this.movies = [];
    this.movies = this._movieSrv.getMovies();
  }

  private _buildForm() {
    let form = this._formBuilder.group({
      name: this.nameCtrl,
      date: ['', Validators.required],
      state: ['', Validators.required],
    });

    return form;
  }

  save(){
    try {
      let controls = this.movieForm.controls;
      this._buildForm();
      let movie = this._buildModelExists(controls);

      this._movieSrv.save(movie);
      this.getMovies();
      const close = document.getElementById('closeButton');
      close.click();
      this._clearInputs();
    } catch (error) {
        console.log(error);
    }
  }

  private _clearInputs(){
    let controls = this.movieForm.controls;
    controls.name.setValue('');

    controls.date.setValue('');
    controls.state.setValue('');
    this.id = '';
    this.nameCtrl = new FormControl('', Validators.required);
  }

  private genreUuid(){
    return uuid();
  }

  private _buildModelExists(controls: any){
    let model = {
      id: this.id ? this.id : this.genreUuid(),
    };
    Object.keys(controls).forEach(key => {
      if(model[key] === "state"){
        if(controls[key].value === "true"){
          model[key] = true;
        } else {
          model[key] = false;
        }
      } else {
        model[key] = controls[key].value;
      }
    });

    return model;
  }

  private _updateForm(moviesearch: Movie) {
    let controls = this.movieForm.controls;
    controls.name.setValue(moviesearch.name);

    controls.date.setValue(moviesearch.date);
    controls.state.setValue(moviesearch.state);

    this.id = moviesearch.id;
  }

  editMovie(id: string){
    const moviesearch = this._movieSrv.getMovieById(id);
    const modal = document.getElementById('openModal');
    modal.click();
    this._updateForm(moviesearch);
  }

  deleteMovie(id){
    this._movieSrv.deleteById(id);
  }

}
