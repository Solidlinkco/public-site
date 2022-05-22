import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { StyledWrapper, StyleTeamMember } from './styled';
import { H2 } from '../../atoms/H2';

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
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 550: 1, 850: 2, 900: 3, 1200: 4 }}>
                        <Masonry gutter="32px">
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
                    </ResponsiveMasonry>
                </StyledWrapper>
            </div>
        </div>
    );
};

export default TeamMembers;
