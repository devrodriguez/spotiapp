import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  TOKEN:string = 'BQCHiH4HIS75la0ttBQdGirfdXdmhIkeVbXtTiENyZpMCakjCIWUpa4DRbAVlIYjrIvJfiQfDZ8GDUMPQXI';

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

  getArtista(termino:string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => {
        return data['artists'].items;
      }));

  }
}
