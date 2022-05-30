import {Component, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovieDetailInterface} from "../../interfaces/movie-detail";
import {ActivatedRoute} from "@angular/router";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {
  movieDetail: IMovieDetailInterface
  urls: string;

  constructor(private moviesService: MovieService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.moviesService.getMovieById(id).subscribe(value => console.log(this.movieDetail = value));
    });
    this.urls=urls.image

  }

}