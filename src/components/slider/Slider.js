import React, { Component } from 'react';

import './slider.css';

import { ImportAll } from '../../util/helpers' 

const SliderImages = ImportAll(require.context('../../img/slides', false, /\.(png|jpe?g|svg)$/));

class Slider extends Component {
    constructor(props) {
        super(props);
        this.switchSlide = this.switchSlide.bind(this)
        this.state = {
            slideTimer: 6000,
            slides: [{
                active: true,
                visible: false,
                caption: "Access to medical providers anywhere",
                src: "doctor_on_demand.jpg",
                altText: "Caduceus Telemedicine Slide 1"
            }, {
                active: false,
                visible: false,
                caption: "Provider access on the go",
                src: "doctor_on_tablet.jpg",
                altText: "Caduceus Telemedicine Slide 2"
            },{
                active: false,
                visible: false,
                caption: "Bringing Technology to Medicine",
                src: "applied_medicine.jpg",
                altText: "Caduceus Telemedicine Slide 3"
            }]
        }
    }

    componentDidMount() {
        var dis = this;
        var slideItems = this.state.slides;
        var countdown = setInterval(
            this.switchSlide, 
            this.state.slideTimer
        );
        this.setState({countdown: countdown});
        setTimeout(function() {
            slideItems[0].visible = !slideItems[0].visible;
            dis.setState({
                slideItems,
            });
        },1)
        
        
    };

    componentWillUnmount() {
        clearInterval(this.state.countdown);
    };

    switchSlide() {
        var next = false, slideItems = this.state.slides;
        for (var i = 0; i < this.state.slides.length; i++) { 
            if (this.state.slides[i].active) {
                slideItems[i].active = !slideItems[i].active;
                slideItems[i].visible = !slideItems[i].visible;
                if (i === this.state.slides.length - 1) {
                    slideItems[0].active = !slideItems[0].active;
                    slideItems[0].visible = !slideItems[0].visible;
                }else {
                    next = true;
                }
            }else if(next)  {
                slideItems[i].active = !slideItems[i].active;
                slideItems[i].visible = !slideItems[i].visible;
                next = false;
            }
        }
        this.setState({
            slideItems,
        });
    
    }

    render() {
        const slides = this.state.slides.map((slide, index) =>
            <div key={index} className={slide.active ? "slide active" : "slide inactive"}>
                <div className="slideHolder">
                    <img src={SliderImages[slide.src]} alt={slide.altText} />
                    <figcaption className={slide.visible ? 'slideIn' : 'slideOut'}><p>{slide.caption}</p></figcaption>
                </div>
            </div>
        );
        return (
            <article className="slideshow">
                <div className="slider rounded">
                    {slides}
                </div>
            </article>
        );
    }
};

export default Slider;