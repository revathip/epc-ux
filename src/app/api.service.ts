import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getProductsData(){
    return this.httpClient.get(`https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json`);
  }
}
