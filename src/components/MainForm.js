import React from 'react';

import './MainForm.css';
import $ from 'jquery';

import TeaserBoxes from './TeaserBoxes.js';
import MainPhoto from './MainPhoto.js';


export default class MainForm extends React.Component {  

  constructor()
  {
      super();

      this.handleChange = this.handleChange.bind(this);
      this.changeInitialSlide = this.changeInitialSlide.bind(this);
      
      this.state = {
        flickrdata: [],
        userInput: '',
        itemClicked: 3
      }
  }

  handleChange(e) {
    
    this.setState({
      [e.target.name]: e.target.value,               
    });

    this.reload(e.target.value);
  }

  changeInitialSlide(indexClicked) {
        
    this.setState({
      itemClicked: indexClicked
    })
    
  }

  reload(tags) {
      const FLICK_URL = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";    
      var a=this;

      $.getJSON( FLICK_URL, {
        tags: tags,
        tagmode: "any",
        format: "json"
        })
        .done(function( data ) {            
          a.setState({
            flickrdata: data
          })
        });            
  }

  componentWillMount() {    
    this.reload('today');    
  }
  
  render() {
    return (      
      <div>
        <form noValidate>
        <div className="row">
          <div className="col s3">&nbsp;</div>
          <div className="input-field col s6">
            <input 
              id="userInput"
              ref="userInput"
              name="userInput"
              placeholder="   Search ...  "  
              type="text" 
              value={ this.state.userInput }
              onChange={ this.handleChange }
              noValidate />            
          </div>
          <div className="col s3">&nbsp;</div>
        </div>
      </form>
        <MainPhoto photos={this.state.flickrdata.items} photoClicked={this.state.itemClicked} />
        <br />
        <TeaserBoxes photos={this.state.flickrdata.items} changeSlide={this.changeInitialSlide} />
      </div>
    );
  }
}