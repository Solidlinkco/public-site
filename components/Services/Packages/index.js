import React from 'react';
import { StyledTable } from './styled';
import { H2 } from '../../atoms/H2';
import StyledButton from '../../atoms/StyledButton';
import { LINKS } from '../../../constants/links';
import { PACKAGES } from './constant';

const Packages = () => {
    return (
        <div className="col-12">
            <H2 fontWeight="600" color="#400436">
                Packages
            </H2>
            <div style={{ overflowX: 'auto' }}>
                <StyledTable>
                    <tr>
                        <th>Package</th>
                        <th>Whats is included?</th>
                        <th>Benefits to Client</th>
                    </tr>
                    {PACKAGES.map(({ title, included, benefits, price }) => (
                        <tr key={title}>
                            <td>{title}</td>
                            <td>
                                <ul>
                                    {included.map((label) => (
                                        <li key={label}>{label}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {benefits.map((label) => (
                                        <li key={label}>{label}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </StyledTable>
            </div>
            <div className="justify-content-center ">
                <a href={LINKS.getStartedUrlServicesPage} target="_blank" rel="noreferrer noopener">
                    <StyledButton>Get started</StyledButton>
                </a>
            </div>
            <div className="py-20">&nbsp;</div>
            <div className="py-20">&nbsp;</div>
        </div>
    );
};

export default Packages;
