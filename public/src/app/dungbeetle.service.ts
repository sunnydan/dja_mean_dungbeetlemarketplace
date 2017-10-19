import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DungbeetleService {
  dungbeetles = [];

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get(`/dungbeetles`)
    .subscribe( 
      (dungbeetles) => {
        console.log('Successful response from the server');
        this.dungbeetles = dungbeetles.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  retrieveOne(id) {
    return this._http.get(`/dungbeetles/${id}`)
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
 
  create(dungbeetle) {
    return this._http.post(`/dungbeetles`, dungbeetle)
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
 
  update(dungbeetle, id) {
    return this._http.put(`/dungbeetles/${id}`, dungbeetle)
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
    return this._http.get(`/dungbeetles/${id}`)
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
