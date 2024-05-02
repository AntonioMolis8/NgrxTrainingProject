import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLinkHover]',
  standalone: true
})
export class LinkHoverDirective {

  constructor(private link:ElementRef) { }

  @HostListener('mouseover')
  applyStyles() {
    this.link.nativeElement.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    this.link.nativeElement.style.fontSize = "1.4rem";
    this.link.nativeElement.style.boxShadow = "0 0 8px 0 #fff";
    this.link.nativeElement.style.transition = "all 0.25s";
  }

  @HostListener('mouseleave')
  removeStyles() {
    this.link.nativeElement.style.backgroundColor = "transparent";
    this.link.nativeElement.style.fontSize = "1.25rem";
    this.link.nativeElement.style.boxShadow = "none";
    this.link.nativeElement.style.transition = "all 0.25s";

  }

}
