import {AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[loading]',
  standalone: true
})
export class LoadingDirective implements OnChanges {
  @Input('loading') loading: boolean = false;
  @Input() loadingHeight?: string;
  @Input() loadingWidth?: string;

  private shimmerClass = 'shimmer-effect';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loading) {
      this.renderer.addClass(this.el.nativeElement, this.shimmerClass);
      this.renderer.setStyle(this.el.nativeElement, 'height', this.loadingHeight);
      this.renderer.setStyle(this.el.nativeElement, 'width', this.loadingWidth);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.shimmerClass);
      this.renderer.removeStyle(this.el.nativeElement, 'height');
      this.renderer.removeStyle(this.el.nativeElement, 'width');
    }
  }
}
