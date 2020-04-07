import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../Models/user';
import { PlatService } from '../service/plat.service';
import { Plat } from '../Models/plat';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage { 
  plats:Plat[];
  constructor(private serviceUser:UserService, private service:PlatService) {
    this.service.getAll().subscribe(plats => {
      this.plats=plats;
    }); 
  }

}
