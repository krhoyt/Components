import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-button',
  styleUrl: 'button.css',
  shadow: true
} )
export class Button {
  render() {
    return (
      <button part="button" type="button">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
    );
  }

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;    
  @Prop( { reflect: true } ) icon: string;    
  @Prop( { reflect: true } ) kind: string;    
}
