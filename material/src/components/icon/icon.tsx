import { Component, h, Prop } from '@stencil/core';

@Component( {
  tag: 'md-icon',
  styleUrl: 'icon.css',
  shadow: true,
  assetsDirs: ['assets']
} )
export class Icon {
  render() {
    return (
      <svg 
        height="24" 
        viewBox="0 0 24 24" 
        width="24">
        <use xlinkHref={`build/assets/icons.svg#${this.name}`} />
      </svg>
    );
  }

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;      
  @Prop( { reflect: true } ) name: string;
}
