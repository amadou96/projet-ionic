import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../Models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  numero: number;
  user:User;
  constructor(private userService : UserService, private router:Router,private toastController:ToastController, private route:ActivatedRoute) {

  }
  ngOnInit() {
  }
  async presentToast(message:string,color:string){
    const toast = await this.toastController.create({
      message:message,
      duration:2000,
      color:color,
      position:'top'
    });
    toast.present();
  }
seConnecter():void{
  this.userService.getUserByNumber(this.numero).subscribe(user=>{
    this.user = user;
    this.presentToast(' Bienvenue! ', 'success');
    localStorage.setItem('userConnected', String(this.numero));
    this.router.navigateByUrl("/tabs/menu");
   },error=>{
    this.presentToast('Erreur De connexion', 'danger');
    this.router.navigateByUrl("/login");
   })}
}
