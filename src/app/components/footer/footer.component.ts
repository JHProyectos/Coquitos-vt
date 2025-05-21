import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>Coquitos Venado</h3>
            <p>Pastelería artesanal desde 2010</p>
            <p>Venado Tuerto, Santa Fe, Argentina</p>
          </div>
          <div class="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a routerLink="/">Inicio</a></li>
              <li><a routerLink="/menu">Productos</a></li>
              <li><a routerLink="/about">Nosotros</a></li>
              <li><a routerLink="/contact">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contacto</h4>
            <p>Email: info&#64;coquitosvenado.com.ar</p>
            <p>Teléfono: (03462) 15-123456</p>
            <div class="social-icons">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                <fa-icon [icon]="faFacebook"></fa-icon>
              </a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                <fa-icon [icon]="faInstagram"></fa-icon>
              </a>
              <a href="https://wa.me/5493462123456" target="_blank" aria-label="WhatsApp">
                <fa-icon [icon]="faWhatsapp"></fa-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Coquitos Venado. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: var(--dark);
      color: white;
      padding: 3rem 0 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-info h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .footer-links h4,
    .footer-contact h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: white;
    }

    .footer-links ul {
      list-style: none;
    }

    .footer-links ul li {
      margin-bottom: 0.5rem;
    }

    .footer-links ul li a,
    .social-icons a {
      color: var(--light);
      transition: color 0.3s ease;
    }

    .footer-links ul li a:hover,
    .social-icons a:hover {
      color: var(--accent);
    }

    .social-icons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-icons a {
      font-size: 1.5rem;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  `]
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  currentYear = new Date().getFullYear();
}