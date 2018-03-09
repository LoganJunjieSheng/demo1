import React, { Component } from 'react';
import { PageHeader, small, Carousel } from 'react-bootstrap';
// require('./index.css')
// import ReactPlayer from 'react-player'
// import { DefaultPlayer as Video } from 'react-html5video';
require('../global/global.css')
class PageFreeTrial extends Component {
    render() {
        return (
            <div className='body'>
                <PageHeader><small>免费试听</small></PageHeader>
                <Carousel >
                    <Carousel.Item >
                        <img height={500} alt="900x500" src={require("../static/child.jpg")} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={500} alt="900x500" src={require("../static/child2.jpg")} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={500} alt="900x500" src={require("../static/child3.jpg")} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div><h3>ID: {this.props.match.params.id}</h3></div>
            </div>
        );
    }
}

export default PageFreeTrial;