import { Component } from '@angular/core';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import { BreadconmbsComponent } from '../breadconmbs/breadconmbs.component';

@Component({
  selector: 'app-page-content',
  imports: [FooterContentComponent, BreadconmbsComponent],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent {

}
