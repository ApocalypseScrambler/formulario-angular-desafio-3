import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formularioContacto: FormGroup
  submitted = false;

  constructor( private form: FormBuilder) {
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern("[0-9]{13}")]]
    })
  }

  hasError( controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar() {
    console.log(this.formularioContacto);
  }

  
}
