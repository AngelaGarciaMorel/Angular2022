import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTam20]'
})
export class Tam20Directive {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.fontSize = '20px';
  }

}
