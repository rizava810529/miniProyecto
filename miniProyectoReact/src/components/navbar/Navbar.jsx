import React, { useState } from 'react';
import logo from "../../img/logo.png";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import busqueda from "../../img/busqueda.png";
import Location from '../location/Location';
import Select from '../select/Select';


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
                                <div className='h-100 d-flex justify-content-around align-items-center'>
                                    <Location></Location>
                                    <Select></Select>


                                </div>





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
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                                {/* Dropdown content */}
                                <div className='h-100 d-flex justify-content-around align-items-center'>
                                    <Location></Location>
                                    <Select></Select>


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
