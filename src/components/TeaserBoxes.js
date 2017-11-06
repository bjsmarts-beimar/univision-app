import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';

import './TeaserBoxes.css';

export default class TeaserBoxes extends React.Component {

  constructor()
  {
      super();

      this.changeImage = this.changeImage.bind(this);
      
      this.state = {
        photos: []        
      }
  }    

  changeImage(e) {
    
    let index = e.target.getAttribute("value");
    this.props.changeSlide(index);    
  }
      
  render() {

    let srcItems = []; 
    
    $.each(this.props.photos, function(i,val) {
      srcItems.push(val.media.m);    
    });
        
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: false,
        afterChange: function (index) {
          console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        }
    };
    
      return (                      
        <Slider {...settings}>    
        {
          srcItems.map((item, i) => {            
            return <div key={i} onClick={this.changeImage} ><img value={i} width="200px" height="200px" src={item} /></div>;
          })                   
        }                                     
        </Slider>                         
      );
    
  }
}