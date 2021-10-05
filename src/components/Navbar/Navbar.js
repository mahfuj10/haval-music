import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

        <div className="sideNav">

            <h4 className="text-center fw-bold"><i class="fas fa-wave-square"></i> Groovvy</h4>

            <p className="nav-title" id="nav-title" style={{ marginTop: "50px" }}>MENU</p>

            <aside className="nav-items">
                <p><i class="fas fa-stop-circle"></i> Explore</p>
                <p><i class="fas fa-volume-down"></i> Genres</p>
                <p><i class="fas fa-stop-circle"></i> Albums</p>
                <p><i class="fas fa-microphone"></i> Artists</p>
                <p><i class="fas fa-x-ray"></i> Radio</p>
            </aside>

            <p className="nav-title" style={{ marginTop: "30px" }}> LIBARY</p>

            <aside className="nav-items">

                <p><i class="fas fa-redo-alt"></i> Recent</p>
                <p><i class="fas fa-wallet"></i> Albums</p>
                <p><i class="fas fa-heart"></i> Favourites</p>
                <p><i class="fas fa-file-archive"></i> Local</p>

            </aside>


            <p className="nav-title" style={{ marginTop: "30px" }}> PLAYLIST</p>

            <aside className="nav-items ms-3">

                <p><i class="fas fa-plus-square"></i> Create New</p>
                <p><i class="fas fa-stream"></i> Design Plow</p>
                <p><i class="fas fa-music"></i> Best of 2020</p>
                <p><i class="fas fa-hand-middle-finger"></i> Nigeria Jems</p>

            </aside>

            <aside style={{ display: "flex", alignItems: "center", width: "130px", backgroundColor: "#32323D", margin: "0 auto", padding: "10px", marginTop: "40px", color: "whitesmoke" }}>
                <i class="fas fa-music fs-3"></i>
                <h5 className="ms-2">GRAVVY <i>Tone</i></h5>
            </aside>

        </div>

    );
};

export default Navbar;