import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding-bottom: 40px;
`;

export const StyleTeamMember = styled.div`
    max-width: 300px;
    min-width: 260px;
    margin: 0 auto;

    background-color: rgba(64, 4, 54, 1);
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgb(244, 157, 42, 0.4);

    & div {
        height: 160px;
        overflow: hidden;
        border-radius: 10px;

        img {
            width: 100%;
        }
    }

    p {
        color: rgb(244, 157, 42, 1);
        text-align: center;
        border-top: 1px solid rgb(244, 157, 42, 0.2);

        margin-top: 16px;
        font-weight: 600;
        font-size: 18px;
        padding: 16px 0 0 0;

        :last-child {
            font-size: 14px;
            border: none;
            padding-top: 0;
            padding: 0 0 16px 0;
            margin-top: 6px;
        }
    }
`;
