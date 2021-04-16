import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'ibm-link',
  styleUrl: 'link.css',
  shadow: true
} )
export class Link {
  render() {
    return (
      <button 
        disabled={this.disabled}
        onClick={() => this.doClick()}
        part="link"
        type="button">
        <slot></slot>
      </button>
    );
  }

  doClick() {
    if( this.href !== undefined )
      window.open( this.href, '_blank' );
  }

  @Prop() data: any;
  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) disabled: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;
  @Prop( { reflect: true } ) href: string;
  @Prop( { reflect: true } ) inline: boolean = false;
}
