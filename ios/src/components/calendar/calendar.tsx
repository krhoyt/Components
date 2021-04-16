import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { format } from 'date-fns';

@Component( {
  tag: 'ios-calendar',
  styleUrl: 'calendar.css',
  shadow: true,
  assetsDirs: ['assets']
} )
export class Calendar {
  render() {
    return ( [
      <div class="header">
        <button>{format( this.focused, 'MMMM yyyy' )}</button>
        <button onClick={() => this.doBack()} title="Back"></button>
        <button onClick={() => this.doNext()} title="Next"></button>
      </div>,
      <div class="days">
        {this.daysOfWeek.map( ( name: string ) =>
          <p>{name}</p>        
        ) }
      </div>,
      <ios-month 
        focused={this.focused} 
        onMonthChange={( evt: CustomEvent ) => this.doMonth( evt )}
        selected={this.selected}>        
      </ios-month>
    ] );
  }

  doBack() {
    // Reference to focused date
    let month: number = this.focused.getMonth();
    let year: number = this.focused.getFullYear();

    // Adjust
    // Watch for edges of the year
    year = ( month === 0 ) ? year - 1 : year;
    month = ( month === 0 ) ? 11 : month - 1;

    // Update display
    // Replace property value to trigger render
    // Changing date parts will not trigger render
    this.focused = new Date(
      year,
      month,
      this.focused.getDate()
    );
  }

  doMonth( evt: CustomEvent ) {
    // this.selected = new Date( evt.detail );
    this.calendarChange.emit( new Date( evt.detail ) );
  }

  doNext() {
    // References to focused date
    let month: number = this.focused.getMonth();
    let year: number = this.focused.getFullYear();

    // Adjust
    // Watch for the edges of the year
    year = ( month === 11 ) ? year + 1 : year;
    month = ( month + 1 ) % 12;

    // Update display
    // Replace property value to trigger render
    // Changing date parts will not trigger render
    this.focused = new Date(
      year,
      month,
      this.focused.getDate()
    );
  }

  // Labels
  // TODO: Consider making properties
  daysOfWeek: Array<string> = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
  ];

  @Event() calendarChange: EventEmitter<Date>;

  @Prop( { mutable: true } ) focused: Date = new Date();
  @Prop( { reflect: true } ) hidden: boolean = false;  
  @Prop() selected: Date = new Date();
}

