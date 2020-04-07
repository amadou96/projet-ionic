import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-tab3',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})
export class ComptePage {
  user:User;
  constructor(private serviceUser:UserService) {
    this.serviceUser.getUserByNumber(Number(localStorage.getItem("userConnected"))).subscribe(user => {
      this.user = user;
      console.log(this.user[0].numero);
    });  
  }
}
