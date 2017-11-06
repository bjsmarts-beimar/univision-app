import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';

import './MainPhoto.css';

export default class MainPhoto extends React.Component {

  constructor()
  {
      super();
      
      this.state = {
        photos: []        
      }      
  }    
  
  render() {

    let srcItems = []; 
        
    $.each(this.props.photos, function(i,val) {
          srcItems.push(val.media.m);    
    });

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      centerPadding: 0,
      centerMode: true,
      speed: 500,
      initialSlide: 0,
      slickGoTo:this.props.photoClicked,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...this.props
    };

    return (      
      <Slider {...settings}>
      {
          srcItems.map((item, i) => {            
            return <div key={i}><img width="360px" height="360px" src={item} /></div>;
          })          
      }             
      </Slider>            
    );
  }
}