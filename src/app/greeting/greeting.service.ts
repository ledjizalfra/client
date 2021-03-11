import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as config from '../../assets/config/greeting-config.json';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  greetingUrl = config.greetingUrl;
  greetingMessage: string;

  constructor(private http: HttpClient) { }

  getGreeting(name: string) {
    this.http.get(this.greetingUrl + name)
      .subscribe((data: string) => this.greetingMessage = data);
  }
}
