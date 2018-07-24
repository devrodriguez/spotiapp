import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  busy:boolean = false;

  constructor(private spotifyService:SpotifyService) { 
    this.busy = true;
    this.spotifyService.getNewReleases()
    .subscribe((res:any) => {
      console.log(res);
      this.nuevasCanciones = res;
      this.busy = false;
    });
  }

  ngOnInit() {
  }

}
