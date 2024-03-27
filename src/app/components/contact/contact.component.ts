import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formularioContacto: FormGroup;
  nombreCorrecto? = true;
  apellidoCorrecto? = true;
  telefonoCorrecto? = true;
  emailCorrecto? = true;

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{13}')]],
    });
  }

  hasError(controlName: string, errorType: string) {
    const control = this.formularioContacto.get(controlName);
    return control?.touched && control?.hasError(errorType);
  }

  enviar() {
    if (this.formularioContacto.valid) {
      console.log('Envío exitoso');
    } else {
      console.log('Formulario inválido');
      this.formularioContacto.markAllAsTouched();
    }
  }
}
