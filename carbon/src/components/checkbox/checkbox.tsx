import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component( {
  tag: 'ibm-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true,
  assetsDirs: ['assets']
} )
export class Checkbox {
  render() {
    return (
      <button 
        disabled={this.disabled} 
        onClick={() => this.doClick()}
        part="checkbox">
        <slot></slot>
      </button>
    );
  }

  doClick() {
    this.checked = !this.checked;
    this.checkboxChanged.emit( {checked: this.checked} );
  }

  @Event() checkboxChanged: EventEmitter;

  @Prop( { mutable: true, reflect: true } ) checked: boolean = false;
  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) disabled: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;  
}
