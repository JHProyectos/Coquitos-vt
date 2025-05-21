import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials section">
      <div class="container">
        <h2 class="section-title">Lo que dicen nuestros clientes</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials">
            <div class="testimonial-image">
              <img [src]="testimonial.image" [alt]="testimonial.name">
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <div class="testimonial-author">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      background-color: var(--light);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
    }

    .testimonial-card:hover {
      transform: translateY(-5px);
    }

    .testimonial-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 2rem auto 1rem;
      border: 3px solid var(--light);
    }

    .testimonial-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .testimonial-content {
      padding: 0 2rem 2rem;
      text-align: center;
    }

    .testimonial-text {
      font-style: italic;
      color: var(--gray);
      margin-bottom: 1.5rem;
    }

    .testimonial-author h4 {
      margin-bottom: 0.2rem;
      color: var(--dark);
    }

    .testimonial-author p {
      font-size: 0.9rem;
      color: var(--gray);
    }

    @media (max-width: 768px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'María González',
      role: 'Cliente frecuente',
      text: 'Los coquitos son simplemente increíbles. Siempre pedimos para los cumpleaños familiares y nunca nos decepcionan.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Carlos López',
      role: 'Dueño de café local',
      text: 'Como proveedor de nuestra cafetería, Coquitos Venado nos ha brindado productos de excelente calidad que nuestros clientes adoran.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Laura Martínez',
      role: 'Organizadora de eventos',
      text: 'He trabajado con ellos para varios eventos y siempre entregan a tiempo y con la mejor calidad. Sus tortas son espectaculares.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
}