import { Component, Host, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-column',
  styleUrl: 'column.css',
  shadow: true
} )
export class Column {
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
