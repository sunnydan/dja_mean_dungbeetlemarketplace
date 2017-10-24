import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Dungbeetle {
  //beetle information
  _id: string;
  name: string;
  color: string;
  //account information
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor() {}
}

@Injectable()
export class DungbeetleService {
  //dungbeetles = [];

  constructor(private _http: Http) { }

  retrieveAll(callback) {
    return this._http.get(`/dungbeetles`).subscribe( 
      (response) => {
        console.log('Successful retrieval of dungbeetles from the server');
        //this.dungbeetles = response.json();
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  retrieveOne(id, callback) {
    return this._http.get(`/dungbeetles/${id}`).subscribe( 
      (response) => {
        console.log('retrieveOne: Successful retrieval of dungbeetle from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  retrieveLoggedIn(callback) {
    return this._http.get('/dungbeetles/l/oggedin').subscribe(
      (response) => {
        console.log('Response from retrieveLoggedIn function on server');
        console.log(response);
        callback(null, response['_body']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
 
  create(dungbeetle: Dungbeetle, callback) {
    this._http.post(`/dungbeetles`, dungbeetle).subscribe( 
      (response) => {
        console.log('Successful creation of dungbeetle on the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  login(dungbeetle: Dungbeetle, callback) {
    this._http.post('/dungbeetles/login', dungbeetle).subscribe(
      (response) => {
        console.log('Response from login function on server');
        console.log(response['_body']);
        callback(null, response['_body']);
      },
      (err) => {
        callback(err, null);
      }
    )
  }

  logout(callback) {
    this._http.get('/dungbeetles/l/ogout').subscribe(
      (response) => {
        console.log(response);
        callback();
      },
      (err) => {
        console.log(err);
      }
    );
  }
 
  update(dungbeetle: Dungbeetle, id, callback) {
    return this._http.put(`/dungbeetles/${id}`, dungbeetle).subscribe( 
      (response) => {
        console.log('Successful update of dungbeetle on the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  destroy(id, callback) {
    return this._http.get(`/dungbeetles/${id}`)
    .subscribe( 
      (response) => {
        console.log('Successful destruction of dungbeetle the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

}