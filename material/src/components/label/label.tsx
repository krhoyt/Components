import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-label',
  styleUrl: 'label.css',
  shadow: true
} )
export class Label {
  render() {
    return (
      <p part="label">
        <slot></slot>
      </p>
    );
  }

  @Prop( {reflect: true } ) concealed: boolean = false;
  @Prop( {reflect: true } ) hidden: boolean = false;
  @Prop( {reflect: true } ) truncate: boolean = false;
}
