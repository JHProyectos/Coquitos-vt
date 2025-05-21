import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Coquitos Clásicos',
      description: 'Nuestros tradicionales coquitos con coco rallado y dulce de leche.',
      price: 800,
      image: 'https://images.pexels.com/photos/14705144/pexels-photo-14705144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Dulces',
      featured: true
    },
    {
      id: 2,
      name: 'Alfajores de Chocolate',
      description: 'Deliciosos alfajores rellenos de dulce de leche y bañados en chocolate.',
      price: 700,
      image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Dulces'
    },
    {
      id: 3,
      name: 'Torta de Chocolate',
      description: 'Exquisita torta de chocolate con ganache y decoración artesanal.',
      price: 2500,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Tortas',
      featured: true
    },
    {
      id: 4,
      name: 'Pastelitos de Membrillo',
      description: 'Tradicionales pastelitos argentinos rellenos de membrillo.',
      price: 600,
      image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Dulces'
    },
    {
      id: 5,
      name: 'Torta de Frutas',
      description: 'Deliciosa torta con frutas de estación y crema pastelera.',
      price: 2300,
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Tortas'
    },
    {
      id: 6,
      name: 'Medialunas',
      description: 'Medialunas de manteca recién horneadas.',
      price: 500,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Panadería'
    },
    {
      id: 7,
      name: 'Pan Casero',
      description: 'Pan artesanal elaborado con masa madre.',
      price: 900,
      image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Panadería',
      featured: true
    },
    {
      id: 8,
      name: 'Tarta de Manzana',
      description: 'Tarta casera de manzana con canela y azúcar.',
      price: 1800,
      image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Tartas'
    }
  ];

  constructor() { }

  getMenuItems(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }

  getFeaturedItems(): Observable<MenuItem[]> {
    return of(this.menuItems.filter(item => item.featured));
  }

  getMenuItemsByCategory(category: string): Observable<MenuItem[]> {
    return of(this.menuItems.filter(item => item.category === category));
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.menuItems.map(item => item.category))];
    return of(categories);
  }
}