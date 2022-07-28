import React from 'react'
import hero_img from '../assets/images/hero_img.svg'
import trusted_by from '../assets/images/trusted_by.svg'
import customers from '../assets/images/customers.svg'
import profile_img from '../assets/images/profile_img.svg'

const MainContent = (props) => {
    return (
        <div className="main-content">
            {/* When not searching for anything */}
            { !props.isSearch && 
            <>
            <img src={hero_img} alt="hero_img" />
            <img src={trusted_by} alt="trusted_by" />
            <img src={customers} alt="customers" />
            </>
            }
            {/* When searching for something */}
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