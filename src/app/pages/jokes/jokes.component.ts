import { Component } from '@angular/core';
import { JokeApiService } from 'src/app/core/services/joke-api.service';

interface Joke {
  setup: { first: string; last: string; };
  punchline: { large: string; };
}

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes.component.html'
})

export class JokesComponent {
  joke: Joke | null = null;
  status: boolean = false;
  
  constructor(private jokeApiService: JokeApiService){}

  ngOnInit(){
    this.jokeApiService.getRandomJoke()
    .then(response =>{
      this.joke = response.data
    })
    .catch(error =>{
      console.log(error)
    })
  }

  getJoke(){
    this.status = false

    this.jokeApiService.getRandomJoke()
    .then(response =>{
      this.joke = response.data
    })
    .catch(error =>{
      console.log(error)
    })
  }

  getPunch(){
    this.status = true
  }
}
