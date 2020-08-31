import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="mb-5 navbar navbar-expand-md navbar-dark bg-dark div-rtl">
            <Link to="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52"><path fill="#f8f9fa" fillRule="evenodd" d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"></path></svg>
            </Link>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">פרוייקטים   </a>
                        <div className="dropdown-menu text-right" aria-labelledby="dropdown04">
                            <Link to="/scheduleProject">
                                <p className="dropdown-item" >בנאי מערכות</p>
                            </Link>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;
