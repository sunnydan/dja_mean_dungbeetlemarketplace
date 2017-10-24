import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Dungball {
  //practical information
  short_desc: string;
  long_desc: string;
  img_url: string;
  radius: number;
  color: string;
  price: number;
  //location information
  city: string;
  state: string;
  //technical information
  owner_id: string;
  _id: string;
  created_at: Date;
  updated_at: Date;
  last_viewed: Date;
  
  constructor() {}
}

@Injectable()
export class DungballService {

  constructor(private _http: Http) { }

  retrieveAll(callback) {
    this._http.get(`/dungballs`).subscribe( 
      (response) => {
        console.log('Successful response of all dungballs from the server');
        callback(null, response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  retrieveOne(id, callback) {
    this._http.get(`/dungballs/${id}`).subscribe( 
      (response) => {
        console.log('Successful response of single dungball from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  create(dungball, callback) {
    this._http.post(`/dungballs`, dungball).subscribe( 
      (response) => {
        console.log('Successful creation of dungball on the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  update(dungball, id, callback) {
    this._http.put(`/dungballs/${id}`, dungball).subscribe( 
      (response) => {
        console.log('Successful dungball update from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  destroy(id, callback) {
    this._http.delete(`/dungballs/${id}`).subscribe();
  }

}
