import { Component, Host, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-row',
  styleUrl: 'row.css',
  shadow: true
} )
export class Row {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;  
}
