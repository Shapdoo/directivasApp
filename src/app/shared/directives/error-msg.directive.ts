import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _htmlElement!: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _message: string = 'field is required';
  private _classes: Array<string> = ['form-text'];

  constructor(private _element: ElementRef<HTMLElement>) {
    this._htmlElement = _element;
  }

  /**
   * Input setters
   */
  @Input()
  set color(color: string) {
    this._htmlElement.nativeElement.style.color = color;
    this._color = color;
  }

  @Input()
  set message(msg: string) {
    this._htmlElement.nativeElement.innerText = msg;
    this._message = msg;
  }

  @Input()
  set classes(className: Array<string>) {
    this._htmlElement.nativeElement.className = className.join(' ');
    this._classes = className;
  }

  @Input()
  set valido(hasError: boolean) {
    this._htmlElement.nativeElement.style.display = hasError ? 'block' : 'none';
  }

  ngOnInit(): void {
    this.color = this._color;
    this.message = this._message;
    this.classes = this._classes;
  }

  /**
   * metodo ineficiente porque de tener muchos inputs tendriamos que basicamente tener muchos ifs
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['message']){
    //   const msg = changes['message'].currentValue
    //   this.Message = msg
    // }
    // if(changes['color']){
    //   const color = changes['color'].currentValue
    //   this.Color = color
    // }
  }
}
