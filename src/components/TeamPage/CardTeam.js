import React from 'react'
import './CardTeam.css'
import 'remixicon/fonts/remixicon.css';

const CardTeam = ({ image, name, position, facebook, linkedin, instagram }) => {
    return (
        <div className="card">
            <div className="pic"><img src={image} alt=""/></div>
            <div className="team-content">
                <h4 className="title">{name}</h4>
                <span className="post">{position}</span>
            </div>
            <div className="social">
                <a href={facebook} className="facebook"><i class="ri-facebook-box-line"></i></a>
                <a href={linkedin} className="linkedin"><i class="ri-linkedin-box-line"></i></a>
                <a href={instagram} className="instagram"><i class="ri-instagram-line"></i></a>
            </div>
        </div>
    )
}

export default CardTeam
