import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { format } from 'date-fns';

import Day from '../../util/day';

@Component( {
  tag: 'ios-month',
  styleUrl: 'month.css',
  shadow: true
} )
export class Month {
  render() {
    return (
      <Host>
        {this.days.map( ( day: Day ) =>
          <button
            class={`
              ${day.selected ? 'selected' : ''}
              ${day.today ? 'today' : ''}
            `}
            data-date={day.date}
            data-month={day.month}
            data-year={day.year}
            disabled={day.date === undefined ? true : false}
            onClick={( evt: MouseEvent ) => this.doSelect( evt )}
            title={this.label( day )}>
            {day.date}
          </button>
        ) }
      </Host>
    );
  }

  componentWillRender() {
    const today: Date = new Date();

    // Calendar used in iteration
    const calendar: Date = new Date(
      this.focused.getFullYear(),
      this.focused.getMonth(),
      1
    );

    // First day of month may not be first day of week
    // Roll back until first day of week
    calendar.setDate( calendar.getDate() - calendar.getDay() );

    // Clear days to be rendered
    this.days = [];

    for( let d: number = 0; d < 42; d++ ) {
      // Day to be rendered
      // Seed with current date in iteration
      const day: Day = new Day();
      day.year = calendar.getFullYear();
      day.month = calendar.getMonth();

      // Populate day in month
      // Undefined date properties are not rendered
      if(
        calendar.getFullYear() === this.focused.getFullYear() &&
        calendar.getMonth() === this.focused.getMonth()
      ) day.date = calendar.getDate();

      // Check for today
      if(
        calendar.getFullYear() === today.getFullYear() &&
        calendar.getMonth() === today.getMonth() &&
        calendar.getDate() === today.getDate()
      ) day.today = true;

      // Check for selection
      if(
        calendar.getFullYear() === this.selected.getFullYear() &&
        calendar.getMonth() === this.selected.getMonth() &&
        calendar.getDate() === this.selected.getDate() &&
        calendar.getMonth() === this.focused.getMonth()
      ) day.selected = true;

      // Add to days to be rendered
      this.days.push( day );

      // Keep rolling
      calendar.setDate( calendar.getDate() + 1 );

      // Do not render last seven days
      // Depends on calendar layout
      // Some months require five weeks, others six weeks (see May 2021)
      if(
        calendar.getDay() === 0 &&
        calendar.getMonth() !== this.focused.getMonth()
      ) break;
    }
  }

  // Title/tooltips used on buttons
  // Accessibility labeling
  label( day: Day ): string {
    if( day.date === undefined ) {
      return format( new Date( day.year, day.month ), 'MMMM yyyy' );
    } else {
      return format( new Date( day.year, day.month, day.date ), 'PP' );
    }
  }

  doSelect( evt: MouseEvent ) {
    // Read the date parts from the selected button
    const button: HTMLButtonElement = ( evt.target as HTMLButtonElement );
    const date: number = parseInt( button.getAttribute( 'data-date' ) );
    const month: number = parseInt( button.getAttribute( 'data-month' ) );
    const year: number = parseInt( button.getAttribute( 'data-year' ) );

    // Notify of selection
    // Selection not set internally (immutable)
    this.monthChange.emit( new Date( year, month, date ) );
  }

  days: Array<Day>;

  @Event() monthChange: EventEmitter<Date>;

  @Prop() focused: Date = new Date();
  @Prop() selected: Date = new Date();
}
