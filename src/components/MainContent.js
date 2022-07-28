import React, { useState, useEffect } from 'react'
import hero_img from '../assets/images/hero_img.svg'
import trusted_by from '../assets/images/trusted_by.svg'
import customers from '../assets/images/customers.svg'
import profile_img from '../assets/images/profile_img.svg'

const MainContent = (props) => {
    const [companies, setCompanies] = useState({});

    const getData = async () => {
        const url = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${props.query}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setCompanies(parsedData);
        console.log(companies);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, props.isSearch)

    return (
        <div className="main-content">
            {!props.isSearch &&
                <>
                    <img src={hero_img} alt="hero_img" />
                    <img src={trusted_by} alt="trusted_by" />
                    <img src={customers} alt="customers" />
                </>
            }
            {
                props.isSearch &&
                <>
                    <h2 className="similar-accounts-heading">Similar accounts</h2>
                    <div className="row mt-3">
                        {[...Array(7)].map((e, i) => {
                            return <div className="column mt-3" key={i}>
                                <img src={profile_img} className="company-img" alt="profile_img" />
                                <p className="company-title">Harrow Inc.</p>
                                <p className="company-text">www.harrow.com
                                    <button href="/" target="_blank" rel="noreferrer" className="btn btn-outline-danger track-btn">Track</button></p>
                            </div>
                        })}
                        {companies.map((element, i) => {
                            return <div className="column mt-3" key={i}>
                                {
                                    element.logo && <img src={element.logo} alt="profile_img"></img>
                                }
                                {
                                    !element.logo && <span style={{
                                        "height": "50px",
                                        "width": "50px",
                                        "float": "left",
                                        "fontSize": "22px",
                                        "marginLeft": "60px",
                                        "marginRight": "20px",
                                        "textAlign": "center",
                                        "padding": "8px",
                                        "color": "#FFFFFF",
                                        "background": CSS.supports('color', element.color) ? element.color : "#DF3B3B"
                                    }}>{element.company.charAt(0).toUpperCase()}</span>
                                }
                                {/* <img src={element.logo ? element.logo : ""} style={!element.logo ? {"background": element.color} : ""}className="company-img"/><span>{!element.logo ? element.company.charAt(0).toUpperCase(): ""}</span> */}
                                <p className="company-title">{element.company.length > 12 ? element.company.substring(0, 12) + "..." : element.company}</p>
                                
                                <p className="company-text">{element.website.length > 12 ? element.website.substring(0, 12) + "..." : element.website}
                                    <button href="/" target="_blank" rel="noreferrer" className="btn btn-outline-danger track-btn">Track</button></p>
                            </div>
                        })}
                    </div>
                    <div className="quick-actions">
                        <h2 className="quick-actions-heading">Quick Actions</h2>
                        <a href="/" className='quick-actions-text'><p>Track new account</p></a>
                        <a href="/" className='quick-actions-text'><p>Bulk track accounts</p></a>
                        <a href="/" className='quick-actions-text'><p>Manage accounts</p></a>
                    </div>
                </>
            }
        </div>
    )
}

export default MainContent