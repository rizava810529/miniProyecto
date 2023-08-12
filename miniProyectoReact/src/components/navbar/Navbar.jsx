import React, { useState } from 'react';
import logo from "../../img/logo.png";
import "./Navbar.css";
import { Button, Modal } from 'react-bootstrap';

export default function Navbar() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const openModal1 = () => {
        setShowModal1(true);
    };

    const closeModal1 = () => {
        setShowModal1(false);
    };

    const openModal2 = () => {
        setShowModal2(true);
    };

    const closeModal2 = () => {
        setShowModal2(false);
    };

    const handleButtonAction = () => {
        // Lógica para la acción del botón al lado de Modal 2
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={logo} className="img-fluid" alt="Logo" />
                    </div>
                    <div className="ml-auto">
                        <Button variant="primary" className="mr-2" onClick={openModal1}>Abrir Modal 1</Button>
                        <Button variant="secondary" onClick={openModal2}>Abrir Modal 2</Button>
                        <Button variant="info" className="ml-2" onClick={handleButtonAction}>Search</Button>
                    </div>
                </div>
            </nav>

            <Modal show={showModal1} onHide={closeModal1}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='h-100 d-flex justify-content-center align-items-center'>

                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownExampleAnimation"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                                data-mdb-dropdown-animation="off"
                            >
                                 Location
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownExampleAnimation">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownExampleAnimation"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                                data-mdb-dropdown-animation="off"
                            >
                                Guests
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownExampleAnimation">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary">Search</button>








                    </div>








                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal1}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal2} onHide={closeModal2}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal 2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='h-100 d-flex justify-content-center align-items-center'>

                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownExampleAnimation"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                                data-mdb-dropdown-animation="off"
                            >
                                Location
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownExampleAnimation">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownExampleAnimation"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                                data-mdb-dropdown-animation="off"
                            >
                                Guests
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownExampleAnimation">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary">Search</button>








                    </div>






                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal2}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
