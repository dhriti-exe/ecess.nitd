import React from 'react'
import './TeamSection.css'
import { HeadTeamData } from './teamData'
import { FinalTeamData } from './teamData'
import { PrefinalTeamData } from './teamData'

import CardTeam from './CardTeam'

const TeamSection = () => {
    return (
        <div className="body">
            <div class="heading">
                <h1>Our Team</h1>
                <div class="grey-line"></div>
                <div class="coloured-line"></div>
            </div>
            <div className='container'>
                <div className='members'>
                    <div class='teamheading'>Final Year</div>
                    <div className='head'>
                        {HeadTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                position={profile.position}
                                facebook={profile.facebook}
                                linkedin={profile.linkedin}
                                instagram={profile.instagram}
                            />
                        ))}
                    </div>
                    <div className='each-year'>
                        {FinalTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                position={profile.position}
                                facebook={profile.facebook}
                                linkedin={profile.linkedin}
                                instagram={profile.instagram}
                            />
                        ))}
                    </div>
                </div>
                <div className='members'>
                    <div class='teamheading'>Pre Final Year</div>
                    <div className='each-year'>
                        {PrefinalTeamData.map((profile, index) => (
                            <CardTeam
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                position={profile.position}
                                facebook={profile.facebook}
                                linkedin={profile.linkedin}
                                instagram={profile.instagram}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection
