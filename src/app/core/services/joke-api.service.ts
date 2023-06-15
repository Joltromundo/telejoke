import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class JokeApiService {

  constructor() { }

  getRandomJoke(){
    return axios
    .get('https://official-joke-api.appspot.com/random_joke')
  }
}
