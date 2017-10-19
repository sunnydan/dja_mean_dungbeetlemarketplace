import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DungballService {
  dungballs = [];

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get(`/dungballs`)
    .subscribe( 
      (dungballs) => {
        console.log('Successful response from the server');
        this.dungballs = dungballs.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  retrieveOne(id) {
    return this._http.get(`/dungballs/${id}`)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  create(dungball) {
    return this._http.post(`/dungballs`, dungball)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  update(dungball, id) {
    return this._http.put(`/dungballs/${id}`, dungball)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  destroy(id) {
    return this._http.get(`/dungballs/${id}`)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
