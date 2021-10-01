import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Fer';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Fer',
    age: 20,
    avatar: 'https://source.unsplash.com/random'
  };
  names: string[] = ['Fer','Joss','John','Sebas'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpeg',
      category: 'all' // optional
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpeg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpeg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpeg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpeg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpeg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index,1);
  }
}
