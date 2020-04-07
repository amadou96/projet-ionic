import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User;
  constructor(private service : UserService, private router:Router, private toastController:ToastController) {
    this.user = new User();
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
 enregistrerUtilisateur():void{
 this.service.add(this.user).subscribe(success=>{
  this.presentToast(' Enregistrer avec succes! ');
  this.router.navigateByUrl("/login");
 },error=>{
  console.log("Erreur D'ajout");
 })
 }

}
