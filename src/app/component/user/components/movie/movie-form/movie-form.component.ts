import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Genre} from '../enum/Genre';
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  genres = Genre;
  movieForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    genre: new FormControl('Select movie genre', Validators.required),
    releaseDate: new FormControl('', Validators.required),
    totalTickets: new FormControl('', Validators.required),
    ticketPrice: new FormControl('', Validators.required)
  });

  constructor(private movieService: MovieService, private router: Router) {
  }

  get formControls() {
    return this.movieForm.controls;
  }

  ngOnInit(): void {
    console.log('hello');
  }

  onSubmit() {
    const formValue = this.movieForm.value;
    formValue.ticketDto = {
      ticketPrice: formValue.ticketPrice,
      totalTickets: formValue.totalTickets
    };
    console.log(formValue);
    this.movieService.save(this.movieForm.value).subscribe(
      data => this.router.navigate(['user/movies'])
    );
  }

  getGenres(genre: any) {
    return Object.keys(genre);
  }

}
