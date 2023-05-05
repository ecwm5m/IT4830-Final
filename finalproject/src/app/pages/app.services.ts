import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class AppService {
  constructor(private http: HttpClient){}
  public serverTest: string = ''

  getPosts(){
    this.http.get<{TEST: string}>('http://localhost:3000/api/posts').
    subscribe((testMessage)=>{
      this.serverTest = testMessage.TEST;
    })

    return this.serverTest
  }
}
