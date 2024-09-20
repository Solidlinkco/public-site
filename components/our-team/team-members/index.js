import React from 'react'; 
import Masonry from "react-masonry-css";

import { StyledWrapper, StyleTeamMember } from './styled';
import { H2 } from '../../atoms/H2';


const breakpointColumnsObj = {
    default: 4,
    1310: 3,
    975: 2,
    619: 1
  }

const TeamMembers = ({ teamMembers }) => {
    return (
        <div style={{ marginTop: '54px' }}>
            <div className="col-12 py20 center">
                <H2 fontWeight="600" color="#400436" margin="0 0 24px 0">
                    Team Members
                </H2>
            </div>
            <div className="col-12">
                <StyledWrapper> 
                        <Masonry  
                        breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
                            {teamMembers.map(({ position, fullName, image, bio }) => (
                                <StyleTeamMember key={`ff${fullName}`} img={image.url}>
                                    <div>
                                        <p className="team-position">{position}</p>
                                        <p className="team-name">{fullName}</p>
                                        {bio && <p className="team-bio">{bio}</p>}
                                    </div>
                                </StyleTeamMember>
                            ))}
                        </Masonry> 
                </StyledWrapper>
            </div>
        </div>
    );
};

export default TeamMembers;
