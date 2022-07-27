import React, { useState } from "react";
import main_logo from '../assets/images/main_logo.svg'
import dashboard from '../assets/images/dashboard.svg'
import intels from '../assets/images/intels.svg'
import leads from '../assets/images/leads.svg'
import red_ellipse from '../assets/images/red_ellipse.svg'
import accounts from '../assets/images/accounts.svg'
import preferences from '../assets/images/preferences.svg'
import down_arrow from '../assets/images/down_arrow.svg'
import integrations from '../assets/images/integrations.svg'
import team from '../assets/images/team.svg'
import help_support from '../assets/images/help_support.svg'
import search from '../assets/images/search.svg'
import notification from '../assets/images/notification.svg'
import right_img from '../assets/images/right_img.svg'

const Sidebar = () => {
    const [isAccounts, setisAccounts] = useState(true);
    const [isPreferences, setisPreferences] = useState(true);

    function toggle(name) {
        name === "Preferences" ? setisPreferences(prevState => !prevState) : setisAccounts(prevState => !prevState)
    }
    return (
        <div className="container-fluid h-100">
            <div className="row h-100 sidebar">
                <div className="col-2 mt-3">
                    <a style={{ "fontSize": "22px", "fontWeight": "bold" }}><img src={main_logo} alt="logo" /> B2Brain</a><br /><br /><br />
                    <a href="/" className="active"><img src={dashboard} />&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</a><br /><br />
                    <a href="/"><img src={intels} />&nbsp;&nbsp;&nbsp;&nbsp;Intels</a><span className="unread">4 unread</span><br /><br />
                    <a href="/"><img src={leads} />&nbsp;&nbsp;&nbsp;&nbsp;Leads</a><span className="unread">4 unseen</span><br /><br />
                    <a className="dropdown-btn" onClick={() => toggle("Accounts")}><img src={accounts} />&nbsp;&nbsp;&nbsp;&nbsp;Accounts
                        <i className={isAccounts ? "fa fa-angle-down" : "fa fa-angle-up"}></i>
                    </a>
                    {
                        isAccounts &&
                        <div className="dropdown-container">
                            <a href="/">Manage all</a><br /><br />
                            <a href="/">Track new accounts</a><br /><br />
                            <a href="/">Bulk import</a><br /><br />
                        </div>
                    }
                    <a className="dropdown-btn" onClick={() => toggle("Preferences")}><img src={preferences} />&nbsp;&nbsp;&nbsp;&nbsp;Preferences
                        <i className={isPreferences ? "fa fa-angle-down" : "fa fa-angle-up"}></i>
                    </a>
                    {
                        isPreferences &&
                        <div className="dropdown-container">
                            <a href="/">Product Focus</a><br /><br />
                            <a href="/">Intel Preferences</a><br /><br />
                            <a href="/">Lead Persona</a><br /><br />
                        </div>
                    }
                    <a href="/"><img src={integrations} />&nbsp;&nbsp;&nbsp;&nbsp;Integrations</a><br /><br />
                    <a href="/"><img src={team} />&nbsp;&nbsp;&nbsp;&nbsp;Team</a><br /><br />
                    <a href="/"><img src={help_support} />&nbsp;&nbsp;&nbsp;&nbsp;Help / Support</a><br /><br />
                </div>
                <div className="col-10" style={{ "padding": 0 }}>
                    <nav className="navbar navbar-expand-lg
                                navbar-light">
                        {/* <a className="navbar-brand" href="/"></a> */}
                        <img src={search} />&nbsp;&nbsp;&nbsp;&nbsp;Search by account name or website
                        <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"
                            id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="/"><img src={notification} /></a>
                                <a className="nav-item nav-link" href="/"><img src={right_img} /></a>
                            </div>
                        </div>
                    </nav>
                    <p style={{ "padding": "15px", "textAlign": "justify" }}>
                        Bootstrap is a free and open-source
                        tool collection for creating responsive
                        websites and web applications.
                        It is the most popular HTML, CSS, and
                        JavaScript framework for developing
                        responsive, mobile-first web sites.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Sidebar