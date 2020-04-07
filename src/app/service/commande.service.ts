import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../Models/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient:HttpClient) { }

  add(commande:Commande):Observable<Commande>{
    return this.httpClient.post<Commande>('http://localhost:1337/Commandes', commande).pipe();
  }
  getAll():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://localhost:1337/Commandes').pipe();
  }
}
