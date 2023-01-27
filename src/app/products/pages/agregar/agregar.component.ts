import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  miFormulario!: FormGroup 
  errorMsg: string = 'este campo es requerido.'
  color: string = 'red'
  
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this._fb.group({
      nombre: ['', [Validators.required]]
    })
  }

  hasError(field: string): boolean {
    return this.miFormulario.controls[field]?.invalid;
  }

  cambiarNombre(){
    this.errorMsg = 'lol'
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color
  }
}
