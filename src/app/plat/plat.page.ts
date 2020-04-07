import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatService } from '../service/plat.service';
import { Plat } from '../Models/plat';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { UserService } from '../service/user.service';
import { Commande } from '../Models/commande';
import { ToastController } from '@ionic/angular';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class PlatPage {
plats:Plat[];
user:User;
platname:string;
commande:Commande;
commandes:Commande[];
  constructor(private router:Router, private service:PlatService,private serviceCommande:CommandeService, private route:ActivatedRoute, private serviceUser:UserService, private toastController:ToastController) {
    this.commande = new Commande();  
    this.service.getAll().subscribe(plats => {
      this.plats=plats;
    }); 

    this.serviceCommande.getAll().subscribe(commandes => {
      this.commandes=commandes;
    }); 

    this.serviceUser.getUserByNumber(Number(localStorage.getItem('userConnected'))).subscribe(user => {
      this.user = user;
    });  
  }
  ionViewWillEnter(){
    this.service.getAll().subscribe(plats => {
      this.plats=plats;
    });  
  }
  modifierPlat(id:number):void{
    this.router.navigateByUrl("/tabs/plat/modifier/"+id);
  }

  supprimerPlat(id:number){
    this.service.delete(id).subscribe(success=>{
      this.ionViewWillEnter();
    })
  }
  compare(chaine1:string, chaine2:string):boolean{
    return chaine1.startsWith(chaine2, 0);
  }


  async presentToast(message:string){
    const toast = await this.toastController.create({
      message:message,
      duration:2000,
      color:'success',
      position:'top'
    });
    toast.present();
  }
 enregistrerCommande():void{
   this.commande.plat = this.platname;
   this.commande.proprietaire = this.user[0].prenom
 this.serviceCommande.add(this.commande).subscribe(success=>{
  this.presentToast('Votre Commande a été prise en compte! ');
  this.router.navigateByUrl("/tabs/plat");
 },error=>{"/tabs/plat"
 this.presentToast('Votre Commande n a pas été prise en compte! ');

 })
 }

}
