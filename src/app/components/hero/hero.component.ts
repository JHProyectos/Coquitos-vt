import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Coquitos Venado</h1>
        <h2>Pastelería artesanal</h2>
        <p>Delicias caseras hechas con amor y los mejores ingredientes</p>
        <div class="hero-buttons">
          <a routerLink="/menu" class="btn">Nuestros Productos</a>
          <a routerLink="/contact" class="btn btn-outline">Contacto</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      background-image: url('https://images.pexels.com/photos/6165966/pexels-photo-6165966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 0 1rem;
    }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn-outline {
      background-color: transparent;
      border: 2px solid white;
      color: white;
    }

    .btn-outline:hover {
      background-color: white;
      color: var(--primary);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroComponent {}