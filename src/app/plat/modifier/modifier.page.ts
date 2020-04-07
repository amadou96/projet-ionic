import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plat } from 'src/app/Models/plat';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/service/plat.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
nomControl:FormControl;
prixControl:FormControl;
descriptionControl:FormControl;
formGroup:FormGroup;
platId:number;
plat:Plat
  constructor(private builder:FormBuilder, private route:ActivatedRoute, private service:PlatService, private router:Router) {
   this.platId = Number(this.route.snapshot.paramMap.get('id'));
   this.service.get(this.platId).subscribe(plat=>{
    this.plat = plat;
    this.nomControl = new FormControl(this.plat.nom, [Validators.required, Validators.minLength(3)]);
    this.prixControl = new FormControl(this.plat.prix, Validators.required);
    this.descriptionControl = new FormControl(this.plat.description);
    this.formGroup = this.builder.group({
      nom : this.nomControl,
      prix : this.prixControl,
      description : this.descriptionControl

    })
   }); 
   }
  modifierPlat():void{
    this.service.update(this.plat.id, this.formGroup.value).subscribe(plat=>{
      this.router.navigateByUrl("/tabs/plat");
    });
  }
  ngOnInit() {
  }

}
