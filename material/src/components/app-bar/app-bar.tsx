import { Component, Host, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-app-bar',
  styleUrl: 'app-bar.css',
  shadow: true
} )
export class AppBar {
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
