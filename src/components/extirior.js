import React, { useContext, useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { LocationContext } from '../context';

var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
};

const Extirior = (props) => {
    return (
        <div>
            <Row className="jystify-content-cente" style={{ width: '100%' }}>
                <Col md="3" className="text-center">
                    <div className="mt-4 ms-3"><img className="" style={{ maxWidth: '100px' }} className="p-1"
                        src="/ASSETS/logo.svg" alt="gp_office" width="100%" /></div>
                    <div className="fw700 mt-4">WORK</div>
                    <div className="d-flex justify-content-center">
                        <div className="fw700">EXT </div>
                        <div className="fw700">|INT</div>
                    </div>
                    <div className="fw700 mt-4">CONTACT</div>
                    <div className="fw700">ABOUT</div>
                </Col>
                <Col md="9" className="">
                    <Row className="">
                        <div className=""><img src="/ASSETS/1.png" alt="istorm_logo" style={{ height: '100vh', width: 'auto' }} /></div>
                        <div className=""><img src="/ASSETS/2.png" alt="plaisio_logo" style={{ height: '100vh', width: 'auto' }} /></div>
                        <div className=""><img src="/ASSETS/3.png" alt="wind_logo" style={{ height: '100vh', width: 'auto' }} /></div>
                        <div className=""><img src="/ASSETS/4.png" alt="mistore_logo" style={{ height: '100vh', width: 'auto' }} /></div>
                        <div className=""><img src="/ASSETS/5.png" alt="vasilopoulos_logo" style={{ height: '100vh', width: 'auto' }} /></div>
                    </Row>
                </Col>
            </Row>

        </div >
    );
}

export default Extirior;