import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ListTarjetas } from '../../interfaces/interface';

@Component({
  selector: 'app-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html',
  styleUrls: ['./tarjeta-de-credito.component.css']
})
export class TarjetaDeCreditoComponent implements OnInit {

   listaTarjetas: ListTarjetas[] =[
    {
     titulo:'Goku Sama',
     numeroTarjeta:'4567665856410201',
     fechaExpiracion:'07/24',
     cvv:'879'
   },
   {
    titulo:'Naruto',
    numeroTarjeta:'4567665888068555',
    fechaExpiracion:'12/25',
    cvv:'677'
  }
];

// form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService)
  { 

  }
  form : FormGroup= this.fb.group({
    titulo: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
    numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
    cvv:['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
  })
  ngOnInit(): void {
  }
  
  addCard(){
    console.log(this.form);

    const ccard: any = {
      titulo: this.form.get('titulo')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listaTarjetas.push(ccard);
    this.toastr.success('Registrada con exito!', 'Tarjeta registrada!');
    this.form.reset();
  }
  deleteCcard(index: number){
    this.listaTarjetas.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada con exito!', 'Tarjeta eliminada!');
  }
  editCcard(){
    
  }

}
