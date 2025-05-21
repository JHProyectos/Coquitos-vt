import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-page">
      <div class="page-banner">
        <h1>Nuestra Historia</h1>
      </div>
      <div class="container section">
        <div class="about-section">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/8477563/pexels-photo-8477563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nuestra pastelería">
          </div>
          <div class="about-content">
            <h2>Cómo comenzamos</h2>
            <p>Coquitos Venado nació en 2010 en la cocina familiar de María Pérez, una apasionada repostera que decidió convertir su hobby en un emprendimiento.</p>
            <p>Con recetas heredadas de su abuela y un profundo amor por la pastelería artesanal, María comenzó vendiendo sus productos a amigos y familiares.</p>
            <p>El boca a boca hizo que sus creaciones se volvieran famosas en Venado Tuerto, lo que pronto la llevó a abrir su primera tienda física.</p>
          </div>
        </div>

        <div class="about-section reverse">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/4916562/pexels-photo-4916562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nuestros productos">
          </div>
          <div class="about-content">
            <h2>Nuestros Valores</h2>
            <p>En Coquitos Venado, creemos en la excelencia de los ingredientes. Utilizamos solo productos de primera calidad, muchos de ellos de proveedores locales.</p>
            <p>Elaboramos cada producto a mano, siguiendo técnicas tradicionales y poniendo atención a cada detalle.</p>
            <p>Nuestro compromiso es brindar experiencias dulces inolvidables, manteniendo la esencia casera en cada bocado.</p>
          </div>
        </div>

        <div class="about-section">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nuestro equipo">
          </div>
          <div class="about-content">
            <h2>Nuestro Equipo</h2>
            <p>Hoy somos un equipo de 10 personas apasionadas por la repostería artesanal. Cada miembro aporta su toque especial a nuestras creaciones.</p>
            <p>Seguimos siendo un negocio familiar, manteniendo los valores y la calidad que nos distinguen desde el primer día.</p>
            <p>Estamos comprometidos con nuestra comunidad y participamos activamente en eventos locales y acciones solidarias.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-page {
      padding-top: 80px;
    }

    .page-banner {
      background-image: url('https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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

    .about-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      margin-bottom: 4rem;
    }

    .about-section.reverse {
      grid-template-areas: 
        "content image";
    }

    .reverse .about-image {
      grid-area: image;
    }

    .reverse .about-content {
      grid-area: content;
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

    .about-content h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .about-content h2:after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: var(--accent);
      margin-top: 0.5rem;
    }

    .about-content p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .page-banner h1 {
        font-size: 2.5rem;
      }

      .about-section,
      .about-section.reverse {
        grid-template-columns: 1fr;
        grid-template-areas: 
          "image"
          "content";
      }

      .about-image {
        grid-area: image;
      }

      .about-content {
        grid-area: content;
      }
    }
  `]
})
export class AboutComponent {}