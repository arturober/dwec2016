import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[setColor]'
})
export class SetColorDirective {
  @Input('color') color;
  isSet = false;

  constructor(public elem: ElementRef) { }

  @HostListener('click') onClick() {
    if (this.isSet) {
      this.elem.nativeElement.style.backgroundColor = "";
    } else {
      this.elem.nativeElement.style.backgroundColor = this.color;
    }
    this.isSet = !this.isSet;
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.elem.nativeElement.style.backgroundColor = this.color;
  // }

  // ngOnChanges() {
  //   this.elem.nativeElement.style.backgroundColor = this.color;
  // }

}
