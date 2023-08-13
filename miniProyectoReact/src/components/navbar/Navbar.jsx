import React, { useState } from 'react';
import logo from "../../img/logo.png";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
} from 'mdb-react-ui-kit';
import busqueda from "../../img/busqueda.png"
function Navbar() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);




    return (
        <>

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={logo} className="img-fluid" alt="Logo" />

                    </a>
                    <form className="d-flex" role="search">

                        {/* MODAL 1 */}
                        <button type="button" className="btn white" onClick={handleShow}>
                            Helsinki,Finland
                        </button>

                        <Modal show={showModal} onHide={handleClose} dialogClassName="modal-top modal-fullscreen tamaño">
                            <Modal.Header closeButton>
                                <Modal.Title>Helsinki, Finland </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* Contenido del modal */}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal>


                        {/* modal 2 */}

                        <button type="button" className="btn white" onClick={handleShow}>
                            Add guests
                        </button>

                        <Modal show={showModal} onHide={handleClose} dialogClassName="modal-top modal-fullscreen tamaño">
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                contenido modal
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {/* BTN search */}
                        <button className="btn white" type="submit"><img src={busqueda} className="img-fluid" alt="Logo" /></button>














                    </form>
                </div>
            </nav>





        </>
    );
}

export default Navbar;
