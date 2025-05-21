import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  template: `
    <header [class.scrolled]="scrolled">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a routerLink="/">Coquitos Venado</a>
          </div>
          <nav [class.active]="menuActive">
            <ul>
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="toggleMenu()">Inicio</a></li>
              <li><a routerLink="/menu" routerLinkActive="active" (click)="toggleMenu()">Nuestros Productos</a></li>
              <li><a routerLink="/about" routerLinkActive="active" (click)="toggleMenu()">Nosotros</a></li>
              <li><a routerLink="/contact" routerLinkActive="active" (click)="toggleMenu()">Contacto</a></li>
            </ul>
          </nav>
          <div class="menu-toggle" (click)="toggleMenu()">
            <fa-icon [icon]="menuActive ? faXmark : faBars"></fa-icon>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem 0;
      z-index: 100;
      transition: all 0.3s ease;
      background-color: transparent;
    }

    header.scrolled {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo a {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary);
    }

    nav ul {
      display: flex;
      list-style: none;
    }

    nav ul li {
      margin-left: 2rem;
    }

    nav ul li a {
      font-weight: 500;
      position: relative;
    }

    nav ul li a.active,
    nav ul li a:hover {
      color: var(--secondary);
    }

    nav ul li a.active::after,
    nav ul li a:hover::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--secondary);
    }

    .menu-toggle {
      display: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--primary);
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: white;
        transition: all 0.3s ease;
        padding: 4rem 2rem;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      }

      nav.active {
        right: 0;
      }

      nav ul {
        flex-direction: column;
      }

      nav ul li {
        margin: 1.5rem 0;
      }
    }
  `]
})
export class HeaderComponent {
  scrolled = false;
  menuActive = false;
  faBars = faBars;
  faXmark = faXmark;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}