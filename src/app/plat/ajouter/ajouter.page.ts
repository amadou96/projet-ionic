import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/Models/plat';
import { PlatService } from 'src/app/service/plat.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
plat:Plat;
  constructor(private service:PlatService, private router:Router, private toastController:ToastController) { 
    this.plat = new Plat();

  }

  ngOnInit() {
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
 enregistrerPlat():void{
 this.service.add(this.plat).subscribe(success=>{
  this.presentToast('Un nouveau plat enregistre avec succes! ');
  this.router.navigateByUrl("/tabs/plat");
 },error=>{"/tabs/plat"

 })
 }
}
