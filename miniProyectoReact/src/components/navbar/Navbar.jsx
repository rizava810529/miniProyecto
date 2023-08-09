import React from 'react'
import logo from "../../img/logo.png"
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <img src="./src/img/logo.png" class="img-fluid" alt="Logo" />
                    </div>
                    <form class="d-flex input-group w-auto">
                        <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </form>
                </div>
            </nav>


        </div>
    )
}
