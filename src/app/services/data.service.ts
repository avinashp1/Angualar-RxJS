import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  configUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getConfig(): any {
    // now returns an Observable of Config
    return this.http.get(this.configUrl);
  }
}
