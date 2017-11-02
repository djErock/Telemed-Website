import React, { Component } from 'react';
import { connect } from "react-redux";

import './slider.css';

import { ImportAll } from '../../util/helpers' 

const SliderImages = ImportAll(require.context('../../img/slides', false, /\.(png|jpe?g|svg)$/));
import { getSlideshow } from "../../actions/actions"
@connect((store) => {
    return {
        settings: store.slideshow
    }
})
class Slider extends Component {
    constructor(props) {
        super(props);
        this.switchSlide = this.switchSlide.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getSlideshow());
    }

    componentWillReceiveProps(nextProps) {
        var dis = this;
        var slideItems = nextProps.settings.slides;
        var countdown = setInterval(
            this.switchSlide, 
            nextProps.settings.slideTimer
        );
        this.setState({countdown: countdown});
        setTimeout(function() {
            slideItems[0].visible = !slideItems[0].visible;
            dis.setState({
                slideItems
            });
        },1) 
    };

    componentWillUnmount() {
        clearInterval(this.state.countdown);
    };

    switchSlide() {
        var next = false, slideItems = this.props.settings.slides;
        for (var i = 0; i < slideItems.length; i++) { 
            if (slideItems[i].active) {
                slideItems[i].active = !slideItems[i].active;
                slideItems[i].visible = !slideItems[i].visible;
                if (i === slideItems.length - 1) {
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
        const slides = this.props.settings.slides.map((slide, index) =>
            <div key={index} className={slide.active ? "slide active" : "slide inactive"}>
                <div className="slideHolder">
                    <img src={SliderImages[slide.src]} alt={slide.altText} />
                    <figcaption className={slide.visible ? 'slideIn' : 'slideOut'}><p>{slide.caption}</p></figcaption>
                </div>
            </div>
        );
        return (
            <article className="container slideshow">
                <div className="slider rounded">
                    {slides}
                </div>
            </article>
        );
    }
};

export default Slider;