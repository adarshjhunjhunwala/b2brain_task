import React, { useState, useEffect } from 'react'
import hero_img from '../assets/images/hero_img.svg'
import trusted_by from '../assets/images/trusted_by.svg'
import customers from '../assets/images/customers.svg'
import profile_img from '../assets/images/profile_img.svg'

const MainContent = (props) => {
    const [companies, setCompanies] = useState({});
    const [track, setTrack] = useState(false);
    const oldBtnStyle = {
        "float": "right",
        "marginTop": "-10px",
        "fontSize": "12px",
        "width": "53px",
        "height": "30px",
        "background": "#FFFFFF",
        "borderRadius": "0px",
        "color": "#FF6059",
        "border": "1px solid #FF6059"
    }
    const newBtnStyle = {
        "float": "right",
        "marginTop": "-10px",
        "fontSize": "12px",
        "width": "74px",
        "height": "30px",
        "background": "#FFFFFF",
        "borderRadius": "0px",
        "color": "#1AAB2B",
        "border": "1px solid #1AAB2B"
    }

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
    }, [props.isSearch, props.query])

    function trackSetter(company_name, company_slug, currtimestamp) {
        console.log(`${company_name} (${company_slug}) tracked at ${currtimestamp}`);
        let spinner = document.getElementById("spinner");
        spinner.style.display = "block";
        setTimeout(() => {
            spinner.style.display = "none";
            setTrack(true);
        }, 2000);
    }

    // function handleButtonClick(btn_track, company_name, company_slug, currtimestamp) {
    //     let spinner =  document.getElementById("spinner");
    //     if(btn_track.classList.contains("btn-outline-danger"))
    //     {
    //         console.log(`${company_name} (${company_slug}) tracked at ${currtimestamp}`);
    //         btn_track.style.width = "74px";
    //         spinner.style.display = "block";
    //         setTimeout(() => {
    //             spinner.style.display = "none";
    //             btn_track.classList.remove("btn-outline-danger");
    //             btn_track.classList.add("btn-outline-success");
    //             btn_track.style.color = "#1AAB2B";
    //             btn_track.style.borderColor = "#1AAB2B";
    //             btn_track.innerHTML = "Tracking";
    //         }, 2000);
    //     }
    //     else
    //     {
    //     }
    // }

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
                                    <button onClick={() => trackSetter("Harrow Inc.", "harrow-o1", Date.now())} style={track ? newBtnStyle : oldBtnStyle}><i className="fa fa-spinner" id="spinner" style={{ "display": "none"}}></i>{track ? " Tracking" : " Track"}</button></p>
                                    {/* <button onClick={() => trackSetter(this, "Harrow Inc.", "harrow-o1", Date.now())} className="btn btn-outline-danger track-btn"><i className="fa fa-spinner" id="spinner" style={{"display": "none"}}></i> Track</button></p> */}
                            </div>
                        })}
                        {Object.keys(companies).length !== 0 && companies.map((element, i) => {
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
                                <p className="company-title">{element.company.length > 25 ? element.company.substring(0, 25) + "..." : element.company}</p>
                                <p className="company-text">{element.website}
                                    <button onClick={() => trackSetter(element.company, element.slug, Date.now())} style={track ? newBtnStyle : oldBtnStyle}><i className="fa fa-spinner" id="spinner" style={{ "display": "none" }}></i>{track ? " Tracking" : " Track"}</button></p>
                                    {/* <button onClick={() => trackSetter(element.company, element.slug, Date.now())} className="btn btn-outline-danger track-btn"><i className="fa fa-spinner" id="spinner" style={{ "display": "none" }}></i> Track</button></p> */}
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