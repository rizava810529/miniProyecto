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
    
    const [selectedLocation, setSelectedLocation] = useState("Helsinki, Finland");

    const [showGuestsModal, setShowGuestsModal] = useState(false); 
    const [selectedGuests, setSelectedGuests] = useState("Guest");

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

            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={logo} className="img-fluid" alt="Logo" />
                    </a>
                    <form className="d-flex" role="search">

                        {/* Location Modal */}
                        <button type="button" className="btn white" onClick={handleShowLocationModal}>
                            {selectedLocation}
                        </button>

                        <Modal show={showLocationModal} onHide={handleCloseLocationModal} dialogClassName="modal-top modal-fullscreen tamaño modalLocation">
                            <Modal.Header closeButton>
                                <Modal.Title className='typography'>Edit your search</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>



                                {/* Dropdown content Select location */}
                                <div className='h-100 d-flex justify-content-around align-items-center'>
                                    <Location></Location>
                                    <Select></Select>
                                    <div className='h-100 d-flex justify-content-center align-items-start' >
                                        <Button variant="secondary" onClick={handleCloseLocationModal}>
                                            search
                                        </Button>
                                    </div>


                                </div>





                            </Modal.Body>
                            <Modal.Footer>


                            </Modal.Footer>
                        </Modal>

                        {/* Guests Modal */}
                        <button type="button" className="btn white" onClick={handleShowGuestsModal}>
                            {selectedGuests}
                        </button>

                        <Modal show={showGuestsModal} onHide={handleCloseGuestsModal} dialogClassName="modal-top modal-fullscreen tamaño modalGuest">
                            <Modal.Header closeButton>
                                <Modal.Title>Edit your search</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                                {/* Dropdown content */}
                                <div className='h-100 d-flex justify-content-around align-items-center'>
                                    <Location></Location>
                                    <Select></Select>
                                    <div className='h-100 d-flex justify-content-center align-items-start' >
                                        <Button variant="secondary" onClick={handleCloseGuestsModal}>
                                            search
                                        </Button>
                                    </div>


                                </div>



                            </Modal.Body>
                            <Modal.Footer>
                               
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