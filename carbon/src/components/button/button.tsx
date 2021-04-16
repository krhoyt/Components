import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'ibm-button',
  styleUrl: 'button.css',
  shadow: true,
  assetsDirs: ['assets']
} )
export class Button {
  render() {
    return (
      <button 
        disabled={this.disabled}
        part="button"
        style={{backgroundImage: this.icon === undefined ? '' : `url( build/assets/${this.icon}.svg )`}}
        type="button">
        <slot></slot>
      </button>
    );
  }

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) disabled: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;
  @Prop( { reflect: true } ) icon: string;  
  @Prop( { reflect: true } ) kind: string = 'primary';
  @Prop( { reflect: true } ) size: string = 'default';
}
