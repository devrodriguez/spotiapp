import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQASNLSii5HIJpTDJR5VTHwV0yMcwyJRWB6PD9R3Yyai_EvDew408SNFUC_joqV0Me4oZqfAvx_jDG1MCEg'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
  }

  getArtista() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQASNLSii5HIJpTDJR5VTHwV0yMcwyJRWB6PD9R3Yyai_EvDew408SNFUC_joqV0Me4oZqfAvx_jDG1MCEg'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
