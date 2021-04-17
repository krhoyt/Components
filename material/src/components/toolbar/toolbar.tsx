import { Component, Host, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-toolbar',
  styleUrl: 'toolbar.css',
  shadow: true
} )
export class Toolbar {
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
