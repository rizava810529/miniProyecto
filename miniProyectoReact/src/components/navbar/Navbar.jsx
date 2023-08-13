import React, { useState } from 'react';
import logo from "../../img/logo.png";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import busqueda from "../../img/busqueda.png";
import Location from '../location/Location';



function Navbar() {
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [showGuestsModal, setShowGuestsModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Helsinki, Finland");
    const [selectedGuests, setSelectedGuests] = useState("1 Guest");

    const handleCloseLocationModal = () => setShowLocationModal(false);
    const handleShowLocationModal = () => setShowLocationModal(true);

    const handleCloseGuestsModal = () => setShowGuestsModal(false);
    const handleShowGuestsModal = () => setShowGuestsModal(true);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        handleCloseLocationModal();
    };

    const handleGuestsSelect = (guests) => {
        setSelectedGuests(guests);
        handleCloseGuestsModal();
    };

    return (
        <>

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={logo} className="img-fluid" alt="Logo" />
                    </a>
                    <form className="d-flex" role="search">

                        {/* Location Modal */}
                        <button type="button" className="btn white" onClick={handleShowLocationModal}>
                            {selectedLocation}
                        </button>

                        <Modal show={showLocationModal} onHide={handleCloseLocationModal} dialogClassName="modal-top modal-fullscreen tamaño">
                            <Modal.Header closeButton>
                                <Modal.Title className='typography'></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>



                                {/* Dropdown content Select location */}
                                <Location></Location>



                                
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseLocationModal}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {/* Guests Modal */}
                        <button type="button" className="btn white" onClick={handleShowGuestsModal}>
                            {selectedGuests}
                        </button>

                        <Modal show={showGuestsModal} onHide={handleCloseGuestsModal} dialogClassName="modal-top modal-fullscreen tamaño">
                            <Modal.Header closeButton>
                                <Modal.Title>Select Guests</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* Dropdown content */}
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        {selectedGuests}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" type="button" onClick={() => handleGuestsSelect("1 Guest")}>1 Guest</button></li>
                                        <li><button className="dropdown-item" type="button" onClick={() => handleGuestsSelect("2 Guests")}>2 Guests</button></li>
                                        {/* Add more guests options here */}
                                    </ul>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseGuestsModal}>
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
