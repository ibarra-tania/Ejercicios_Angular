import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthService } from './services/auth.service';

import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './ejercicio-06/ejercicio-06.component';
import { Ejercicio07Component } from './ejercicio-07/ejercicio-07.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { FooterContentComponent } from './components/footer-content/footer-content.component';
import { BreadconmbsComponent } from './components/breadconmbs/breadconmbs.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Ejercicio01Component, CommonModule, FormsModule, Ejercicio02Component, Ejercicio03Component, Ejercicio04Component, Ejercicio05Component, Ejercicio06Component, Ejercicio07Component ,MatButtonModule, ToolbarComponent, NavbarComponent, SidebarComponent, PageContentComponent, FooterContentComponent, BreadconmbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAuthenticated = true;
  title = 'ManualEjercicios_Angular_230369_TIS';
  
  isSidebarOpen = true;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  // Método para iniciar sesión
  login() {
    this.authService.login(); // Cambia el estado de autenticación a true
  }



  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
