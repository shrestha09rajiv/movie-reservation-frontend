import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieService} from "./movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any;

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  addMovie() {
    this.router.navigate(['user/add/movie']);
  }


  private getMovies() {
    this.movieService.getAll().subscribe((data: any) => {
      console.log(data);
      this.movies = data;
    }, error => {
      console.log("error");
    });
  }

}
