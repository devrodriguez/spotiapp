import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist:any = {};
  tracks:any[] = [];
  busy:boolean = false;

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) {
    activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTracks(params['id']);
    });
   }

  ngOnInit() {
  }

  getArtista(id:string) {
    this.busy = true;
    this.spotifyService.getArtista(id)
      .subscribe(artist => {
        this.artist = artist;
        this.busy = false;
      });
  }

  getTracks(id:string) {
    this.spotifyService.getTracks(id)
      .subscribe(tracks => {
        this.tracks = tracks;
      });
  }

}
