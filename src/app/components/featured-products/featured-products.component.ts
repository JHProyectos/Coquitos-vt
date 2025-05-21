import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="featured-products section">
      <div class="container">
        <h2 class="section-title">Nuestros Destacados</h2>
        <div class="products-grid">
          <div class="product-card" *ngFor="let item of featuredItems">
            <div class="product-image">
              <img [src]="item.image" [alt]="item.name">
            </div>
            <div class="product-info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <div class="product-footer">
                <span class="price">{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="view-all">
          <a routerLink="/menu" class="btn">Ver Todos los Productos</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured-products {
      background-color: var(--light-gray);
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .product-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    .product-image {
      height: 200px;
      overflow: hidden;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-image img {
      transform: scale(1.1);
    }

    .product-info {
      padding: 1.5rem;
    }

    .product-info h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .product-info p {
      color: var(--gray);
      margin-bottom: 1rem;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--primary);
    }

    .view-all {
      text-align: center;
    }

    @media (max-width: 576px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeaturedProductsComponent implements OnInit {
  featuredItems: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getFeaturedItems().subscribe(items => {
      this.featuredItems = items;
    });
  }
}