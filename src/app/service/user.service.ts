import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   constructor(private httpClient:HttpClient) { }

   add(user:User):Observable<User>{
     return this.httpClient.post<User>('http://localhost:1337/User-Restos', user).pipe();
   }
   delete(id:number):Observable<User>{
     
   return this.httpClient.delete<User>('http://localhost:1337/User-Restos/'+id);
   }
   update(id:number, user:User):Observable<User>{
     return this.httpClient.put<User>('http://localhost:1337/User-Restos/'+id, user);
   }
 
   get(id:number):Observable<User>{
     return this.httpClient.get<User>('http://localhost:1337/User-Restos/'+id).pipe();
  
   }
   getAll():Observable<User[]>{
     return this.httpClient.get<User[]>('http://localhost:1337/User-Restos').pipe();
   }
   getUserByNumber(numero:number):Observable<User>{
    return this.httpClient.get<User>('http://localhost:1337/User-Restos?numero='+numero).pipe();
  }
}
