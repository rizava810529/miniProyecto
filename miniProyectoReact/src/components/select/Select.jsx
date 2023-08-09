import React from 'react'

export default function Navbar() {





    return (

        <div className=''>

            <div className=''>

                <div class="d-flex justify-content-around align-items-center m-3 gap-2">
                    <div className='w-50 '>
                        <div class="form-outline border rounded-8">
                            <input type="text" id="typeText" class="form-control" />
                            <label class="form-label" for="typeText">LOCATION</label>
                        </div>
                    </div>

                    <div className='w-50'>
                        <div class="form-outline border rounded-8 ">
                            <input type="text" id="typeText" class="form-control" />
                            <label class="form-label" for="typeText">GUEST</label>
                        </div>
                    </div>


                    <div>
                        <div class="">

                            <form class="d-flex input-group w-auto ">
                                <input
                                    type="search"
                                    class="form-control  rounded-9"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                                <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                            </form>
                        </div>

                    </div>

                </div>





            </div>

            <div>



                
            </div>




        </div>







    )
}
