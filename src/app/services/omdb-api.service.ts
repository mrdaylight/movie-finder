import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import {Observable}from'rxjs';
import{catchError,tap}from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
private _siteURL="https://www.omdbapi.com/";
private _key='?apikey=47ebcb6d&t=";';
  constructor(private _http:HttpClient) { }
  
  getMovieData(movieName):Observable<IOMDBresponse>{
    return this._http.get<IOMDBresponse>(this._siteURL+this._key+movieName)
    .pipe(
      tap(data=>console.log('Moviedata/error'+JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  private handleError(err:HttpErrorResponse){
    console.log('OmdbApiService:' + err.message);
    return Observable.throw(err.message);
  }
    
  
}
