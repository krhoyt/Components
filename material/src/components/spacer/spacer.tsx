import { Component, Host, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-spacer',
  styleUrl: 'spacer.css',
  shadow: true
} )
export class Spacer {
  render() {
    return (
      <Host 
        style={{
          flexGrow: this.width === undefined ? '1' : '0',
          minWidth: this.width === undefined ? '' : `${this.width}px`
        }}>        
      </Host>
    );
  }

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;  
  @Prop( { reflect: true } ) width: number;  
}
