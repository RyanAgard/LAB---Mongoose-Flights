import React from "react";

function DefaultLayout(props) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/style.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossOrigin="anonymous" />
            </head>
            <body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossOrigin="anonymous"></script>
                <nav className="navbar navbar-expand-lg text-bg-dark p-3 sticky-toplink-offset-2">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/flight">
                                        <h3 className="text-white">All Flights</h3>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/flight/new">
                                        <h3 className="text-white">Add Flight</h3>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav>
                </nav>
                <div>
                    {/* <h1>DEFAULT LAYOUT</h1> */}
                    <div>{props.children}</div>
                </div>
            </body>
        </html>
    )
}
export default DefaultLayout