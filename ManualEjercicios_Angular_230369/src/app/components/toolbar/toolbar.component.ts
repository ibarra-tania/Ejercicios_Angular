import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common'; // Asegura compatibilidad con directivas

@Component({
  selector: 'app-toolbar',
  standalone: true, // Se añade standalone
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NgIf], 
  template: `
    <mat-toolbar color="primary" class="sticky-toolbar">
      <span class="text-xl font-bold">Mi plataforma</span>

      <span class="spacer"></span>

      <nav>
        <button mat-button>Ejercicios</button>
        <button mat-button>Tareas</button>
        <button mat-button>Examen</button>
        <button mat-button>Acerca de</button>
      </nav>

      <span class="spacer"></span>

      <ng-container *ngIf="true"> <!-- Asegura un contenedor válido -->
        <button mat-icon-button [matMenuTriggerFor]="menu">
          <img class="user-avatar" src="assets/user.jpg" alt="Usuario">
        </button>
      </ng-container>

      <mat-menu #menu="matMenu">
        <button mat-menu-item>Perfil</button>
        <button mat-menu-item>Cerrar Sesión</button>
      </mat-menu>
    </mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {}
