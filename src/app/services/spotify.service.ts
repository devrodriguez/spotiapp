import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDmnF_brlm09Pv3N0ME6XwyrWv5ngczU4jilY-9nDc5u4MYU-5rbP00fZQnwz7ajscTsL5gJh6F5b0gozk'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
  }
}
