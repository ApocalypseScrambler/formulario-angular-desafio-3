import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { telefonoValidator } from '../../utils/validators';
import Swal from 'sweetalert2'

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
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
      telefono: ['', [Validators.required, telefonoValidator()]],
    });
  }
  
  telefonoValidator(): boolean {
    const telefonoControl = this.formularioContacto.get('telefono');
    if (telefonoControl) {
      return telefonoValidator()(telefonoControl) !== null;
    }
    return false; 
  }

  hasError(controlName: string, errorType: string) {
    const control = this.formularioContacto.get(controlName);
    return control?.touched && control?.hasError(errorType);
  }

  enviar() {
    if (this.formularioContacto.valid) {
      Swal.fire({
        title: 'Confirmación',
        text: 'Registro exitoso',
        icon: 'success',
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Algunos campos poseen errores.',
        icon: 'error',
      })
      this.formularioContacto.markAllAsTouched();
    }
  }
}
