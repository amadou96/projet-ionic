import { Injectable } from '@angular/core';
import { Plat } from '../Models/plat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  constructor(private httpClient:HttpClient) { }

  add(plat:Plat):Observable<Plat>{
    return this.httpClient.post<Plat>('http://localhost:1337/Plats', plat).pipe();
  }
  delete(id:number):Observable<Plat>{
    
  return this.httpClient.delete<Plat>('http://localhost:1337/Plats/'+id);
  }
  update(id:number, plat:Plat):Observable<Plat>{
    return this.httpClient.put<Plat>('http://localhost:1337/Plats/'+id, plat);
  }

  get(id:number):Observable<Plat>{
    return this.httpClient.get<Plat>('http://localhost:1337/Plats/'+id).pipe();
 
  }
  getAll():Observable<Plat[]>{

    return this.httpClient.get<Plat[]>('http://localhost:1337/Plats').pipe();
  }

}
