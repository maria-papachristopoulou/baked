import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';


const Home = (props) => {





    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const imageArray = [

    ]



    const [count, setCount] = useState(0);

    const clickImage = () => {
        const timerId = setInterval(() => {
            setCount((count) => count + 1);
        }, 4000);

        return () => clearInterval(timerId);
    }

    const images = [
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/1.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/2.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/3.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/4.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/5.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/6.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/7.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/8.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/9.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/10.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/11.png" alt="gp_office" width="100%" />,
        <img style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/12.png" alt="gp_office" width="100%" />,
    ];

    const [test, setTest] = useState(false);

    const [selected, setSelected] = useState(0);

    const handleAssigneeOnClick = () => {
        setSelected(prev => {
            if (prev === images.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };
    const prev = () => {
        setSelected(next => {
            if (next === 0) {
                return images.length - 1;
            } else {
                return next - 1;
            }
        });
        console.log(selected)
    };
    console.log(images[0])

    return (
        <div>

            <Row className="jystify-content-center" style={{ margin: 0, height: '40vh', width: '100%' }}>
                {/* <div
                    className="assignee"
                    onClick={handleAssigneeOnClick}
                >
                    ddd
                </div>
                <div
                    className="assignee"
                    onClick={prev}
                >
                    aaaaa
                </div> */}
                {test && <h1>{images[selected]}</h1>}

                <Col md="2" className="text-center">
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
                <Col md="10" className="text-center">
                    <Row className="justify-content-center">
                        <Col md="4" className="p-0">
                            <img onClick={() => { setTest(true); setSelected(0) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/1.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(1) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/2.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(2) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/3.png" alt="gp_office" width="100%" />
                        </Col>
                        <Col md="4" className="p-0">
                            <img onClick={() => { setTest(true); setSelected(3) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/4.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(4) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/5.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(5) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/6.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(6) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/7.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(7) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/8.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(8) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/9.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(9) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/10.png" alt="gp_office" width="100%" />
                        </Col>
                        <Col md="4" className="p-0">
                            <img onClick={() => { setTest(true); setSelected(10) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/11.png" alt="gp_office" width="100%" />
                            <img onClick={() => { setTest(true); setSelected(11) }} style={{ maxWidth: '400px' }} className="p-1" src="/ASSETS/12.png" alt="gp_office" width="100%" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    );
}

export default Home;