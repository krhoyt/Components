import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component( {
  tag: 'md-search',
  styleUrl: 'search.css',
  shadow: true
} )
export class Search {
  render() {
    return ( [
      <md-button 
        onClick={() => this.doCancel()}
        part="arrow"
        title="Cancel">        
        <md-icon name="arrow" slot="start"></md-icon>          
      </md-button>,
      <input 
        onKeyUp={() => this.doKey()}
        part="input" 
        placeholder={this.placeholder} 
        ref={( el ) => this.input = el as HTMLInputElement}
        type="text" />,
      <md-button 
        hidden={!this.microphone} 
        onClick={() => this.doVoice()}
        part="microphone">       
        <md-icon name="microphone"></md-icon>                     
      </md-button>
    ] );
  }

  componentWillLoad() {
    if( window['webkitSpeechRecognition'] !== undefined ) {
      this.microphone = true;

      // TODO: Use proper class constructor when feature broadly available
      this.recognition = new window['webkitSpeechRecognition']();
      this.recognition.continuous = false;
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.addEventListener( 'result', ( evt ) => this.doResult( evt ) );
    }
  }

  doCancel() {
    this.input.value = '';
    this.searchCancel.emit();
  }

  doKey() {
    this.searchChange.emit( {
      value: this.input.value
    } );
  }

  doResult( evt: SpeechRecognitionEvent ) {
    this.input.value = evt.results[0][0].transcript;
  }

  doVoice() {
    this.recognition.start();
  }

  input: HTMLInputElement;
  recognition: SpeechRecognition;

  @Event() searchCancel: EventEmitter;
  @Event() searchChange: EventEmitter;

  @State() microphone: boolean = false;

  @Prop( { reflect: true } ) concealed: boolean = false;
  @Prop( { reflect: true } ) hidden: boolean = false;  
  @Prop( { reflect: true } ) placeholder: string = 'Search';
}
