import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <section class="contact-page">
      <div class="page-banner">
        <h1>Contacto</h1>
      </div>
      <div class="container section">
        <div class="contact-container">
          <div class="contact-info">
            <h2>Información de Contacto</h2>
            <p>¡Nos encantaría saber de ti! Contáctanos para realizar pedidos, consultas o sugerencias.</p>
            
            <div class="info-item">
              <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
              <div>
                <h4>Dirección</h4>
                <p>Av. Rivadavia 1234, Venado Tuerto, Santa Fe, Argentina</p>
              </div>
            </div>
            
            <div class="info-item">
              <fa-icon [icon]="faPhone"></fa-icon>
              <div>
                <h4>Teléfono</h4>
                <p>(03462) 15-123456</p>
              </div>
            </div>
            
            <div class="info-item">
              <fa-icon [icon]="faEnvelope"></fa-icon>
              <div>
                <h4>Email</h4>
                <p>info&#64;coquitosvenado.com.ar</p>
              </div>
            </div>
            
            <div class="info-item">
              <fa-icon [icon]="faClock"></fa-icon>
              <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2>Envíanos un Mensaje</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name" 
                  [class.invalid]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                >
                <div class="error-message" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                  Por favor ingresa tu nombre
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.invalid]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                >
                <div class="error-message" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                  Por favor ingresa un email válido
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.invalid]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                >
                <div class="error-message" *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
                  Por favor ingresa un asunto
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  formControlName="message"
                  [class.invalid]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                ></textarea>
                <div class="error-message" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                  Por favor ingresa tu mensaje
                </div>
              </div>
              
              <button type="submit" class="btn" [disabled]="contactForm.invalid">Enviar Mensaje</button>
            </form>
            <div *ngIf="formSubmitted" class="success-message">
              ¡Gracias por tu mensaje! Te contactaremos a la brevedad.
            </div>
          </div>
        </div>
        
        <div class="map-container">
          <h2>Encuéntranos</h2>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26567.33292416352!2d-61.98333337910156!3d-33.74166682403101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c864d59aa38021%3A0x5c15533746b9ff1!2sVenado%20Tuerto%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1651522123456!5m2!1ses!2sar" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-page {
      padding-top: 80px;
    }

    .page-banner {
      background-image: url('https://images.pexels.com/photos/3972971/pexels-photo-3972971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cover;
      background-position: center;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .page-banner::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .page-banner h1 {
      color: white;
      font-size: 3rem;
      position: relative;
      z-index: 1;
    }

    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .contact-info h2,
    .contact-form h2,
    .map-container h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .contact-info h2:after,
    .contact-form h2:after,
    .map-container h2:after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: var(--accent);
      margin-top: 0.5rem;
    }

    .info-item {
      display: flex;
      margin-bottom: 1.5rem;
    }

    .info-item fa-icon {
      font-size: 1.5rem;
      color: var(--primary);
      margin-right: 1rem;
      width: 24px;
    }

    .info-item h4 {
      margin-bottom: 0.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
    }

    .form-group input.invalid,
    .form-group textarea.invalid {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }

    .success-message {
      background-color: #d4edda;
      color: #155724;
      padding: 1rem;
      border-radius: 4px;
      margin-top: 1rem;
    }

    .btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }

    .btn:hover {
      background-color: var(--secondary);
    }

    .btn:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }

    .map-container {
      margin-top: 3rem;
    }

    .map {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .page-banner h1 {
        font-size: 2.5rem;
      }

      .contact-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faClock = faClock;
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}