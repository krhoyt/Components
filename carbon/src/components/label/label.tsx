import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'ibm-label',
  styleUrl: 'label.css',
  shadow: true
} )
export class Label {
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
 
  @Prop() data: any;
  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) disabled: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;
  @Prop( { reflect: true } ) internal: boolean = false;
  @Prop( { reflect: true } ) truncate: boolean = false;
}
