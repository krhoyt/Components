import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-button',
  styleUrl: 'button.css',
  shadow: true,
  assetsDirs: ['assets']
} )
export class Button {
  render() {
    return (
      <button 
        part="button" 
        style={{
          backgroundImage: this.icon === undefined ? '' : `url( build/assets/${this.icon}.svg )`
        }}
        type="button">
        <slot></slot>
      </button>
    );
  }

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;    
  @Prop( { reflect: true } ) icon: string;    
}
