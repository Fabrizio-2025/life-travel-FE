import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  atributos: string[] = [
    "Desayunos y Almuerzo",
    "Transporte",
    "Guia Turistico",
    "Alojamiento"
  ]
}
