import React, { useState } from "react";
import main_logo from '../assets/images/main_logo.svg'
import dashboard from '../assets/images/dashboard.svg'
import intels from '../assets/images/intels.svg'
import leads from '../assets/images/leads.svg'
import accounts from '../assets/images/accounts.svg'
import preferences from '../assets/images/preferences.svg'
import integrations from '../assets/images/integrations.svg'
import team from '../assets/images/team.svg'
import help_support from '../assets/images/help_support.svg'
import notification from '../assets/images/notification.svg'
import profile_img from '../assets/images/profile_img.svg'
import MainContent from "./MainContent";

const Sidebar = () => {
    const [isAccounts, setisAccounts] = useState(true);
    const [isPreferences, setisPreferences] = useState(true);
    const [isSearch, setisSearch] = useState(false);

    function toggle(name) {
        name === "Accounts" ? setisAccounts(prevState => !prevState) : setisPreferences(prevState => !prevState)
    }

    function isSearchToggle() {
        setisSearch(prevState => !prevState);
    }
    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-2 mt-3 sidebar">
                    <a style={{ "fontSize": "22px", "fontWeight": "bold" }}><img src={main_logo} alt="logo" /> B2Brain</a><br /><br /><br />
                    <a href="/" className="active"><img src={dashboard} alt="dashboard" />&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</a><br /><br />
                    <a href="/"><img src={intels} alt="intels" />&nbsp;&nbsp;&nbsp;&nbsp;Intels</a><span className="unread">4 unread</span><br /><br />
                    <a href="/"><img src={leads} alt="leads" />&nbsp;&nbsp;&nbsp;&nbsp;Leads</a><span className="unread">4 unseen</span><br /><br />
                    <a className="dropdown-btn" onClick={() => toggle("Accounts")}><img src={accounts} alt="accounts" />&nbsp;&nbsp;&nbsp;&nbsp;Accounts
                        <i className={isAccounts ? "fa fa-angle-down" : "fa fa-angle-up"}></i>
                    </a>
                    {
                        isAccounts &&
                        <div className="dropdown-container">
                            <a href="/" style={{ "color": "#808080" }}>Manage all</a><br /><br />
                            <a href="/" style={{ "color": "#808080" }}>Track new accounts</a><br /><br />
                            <a href="/" style={{ "color": "#808080" }}>Bulk import</a><br /><br />
                        </div>
                    }
                    <a className="dropdown-btn" onClick={() => toggle("Preferences")}><img src={preferences} alt="preferences" />&nbsp;&nbsp;&nbsp;&nbsp;Preferences
                        <i className={isPreferences ? "fa fa-angle-down" : "fa fa-angle-up"}></i>
                    </a>
                    {
                        isPreferences &&
                        <div className="dropdown-container">
                            <a href="/" style={{ "color": "#808080" }}>Product Focus</a><br /><br />
                            <a href="/" style={{ "color": "#808080" }}>Intel Preferences</a><br /><br />
                            <a href="/" style={{ "color": "#808080" }}>Lead Persona</a><br /><br />
                        </div>
                    }
                    <a href="/"><img src={integrations} alt="integrations" />&nbsp;&nbsp;&nbsp;&nbsp;Integrations</a><br /><br />
                    <a href="/"><img src={team} alt="team" />&nbsp;&nbsp;&nbsp;&nbsp;Team</a><br /><br />
                    <a href="/"><img src={help_support} alt="support" />&nbsp;&nbsp;&nbsp;&nbsp;Help / Support</a><br /><br />
                </div>
                <div className="col-10">
                    <nav className="navbar navbar-expand-lg
                                navbar-light">
                        {/* <img src={search} alt="search" /> */}
                        <a onClick={() => isSearchToggle()}><i className={!isSearch ? "fa fa-lg fa-search" : "fa fa-lg fa-times"}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;Search by account name or website
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
                            <div className="navbar-nav" style={{ "marginLeft": "880px" }}>
                                <a className="nav-item nav-link" href="/"><img src={notification} alt="notification" /><span className="position-absolute top-2 start-10 p-1 rounded-circle"></span></a>
                                <a className="nav-item nav-link" href="/"><img src={profile_img} alt="profile_img" /></a>
                            </div>
                        </div>
                    </nav>
                    <MainContent isSearch={isSearch}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar