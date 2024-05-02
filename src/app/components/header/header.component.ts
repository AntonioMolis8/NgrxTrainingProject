import { Component } from '@angular/core';
import { LinkHoverDirective } from '../../directives/link-hover.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinkHoverDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
