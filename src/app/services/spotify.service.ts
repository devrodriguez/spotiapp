import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN:string = 'BQBGEWMMHru9uM5_B0UtAaf1mlOE4LBqcr3_YDsJ4UJYzAnDM3QlXWAR3NGcu6X-Ewnc_J9HNsB8sryQcV8';

  constructor(private http:HttpClient) { }

  getQuery(query:string) {

    const url:string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.TOKEN }`
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
    
  }

  getArtistas(termino:string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  getArtista(id:string) {
    return this.getQuery(`artists/${id}`);
  }

  getTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => {
        return data['tracks'];
      }))
  }
}
