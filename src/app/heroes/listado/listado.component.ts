import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América' ];
  heroeBorrado: string = '';
  existeHeroeBorrado: boolean = false;

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
    this.existeHeroeBorrado = (this.heroeBorrado != '');
  }
}
