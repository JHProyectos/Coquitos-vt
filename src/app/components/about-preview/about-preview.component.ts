import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about-preview section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/7144182/pexels-photo-7144182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nuestra historia">
          </div>
          <div class="about-text">
            <h2>Nuestra Historia</h2>
            <p>Fundada en 2010 en Venado Tuerto, Coquitos nació de la pasión por la repostería artesanal y el amor por los sabores tradicionales.</p>
            <p>Todos nuestros productos están hechos a mano, utilizando recetas heredadas de generaciones y los mejores ingredientes locales.</p>
            <p>Nos enorgullece ofrecer delicias caseras que llenan de alegría cada momento especial.</p>
            <a routerLink="/about" class="btn">Conocer más</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .about-image {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .about-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .about-text h2:after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: var(--accent);
      margin-top: 0.5rem;
    }

    .about-text p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .about-text .btn {
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .about-image {
        order: 1;
      }

      .about-text {
        order: 2;
      }
    }
  `]
})
export class AboutPreviewComponent {}