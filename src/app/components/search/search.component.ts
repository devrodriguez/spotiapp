import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  busy:boolean = false;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string) {
    if(termino.length == 0){
      this.artistas = [];
      return;
    }

    this.busy = true;
    this.spotifyService.getArtistas(termino)
      .subscribe(res => {
        this.artistas = res;
        this.busy = false;
      });
  }

}
