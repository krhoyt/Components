import { Component, h, Prop } from '@stencil/core';
import { format } from 'date-fns';

@Component( {
  tag: 'ios-date-picker',
  styleUrl: 'date-picker.css',
  shadow: true
} )
export class DatePicker {
  render() {
    return ( [
      <button onClick={() => this.doToggle()}>
        <p>
          <slot></slot>
        </p>,
        <p style={{color: this.open ? '#ff0000' : ''}}>
          {format( this.value, 'EEE, MMM d, yyyy' )}
        </p>
      </button>,
      <ios-calendar
        onCalendarChange={( evt: CustomEvent ) => this.doChange( evt )}
        focused={this.value} 
        hidden={!this.open}
        selected={this.value}>        
      </ios-calendar>
    ] );
  }

  doChange( evt: CustomEvent ) {
    this.value = new Date( evt.detail );
  }

  doToggle() {
    this.open = !this.open;
  }

  @Prop( { mutable: true, reflect: true } ) open: boolean = false;
  @Prop( { mutable: true } ) value: Date = new Date();
}
