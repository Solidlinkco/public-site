import styled from 'styled-components';

export const StyledTable = styled.table`
    border-collapse: separate;
    width: 100%;
    min-width: 600px;
    margin: 40px 0 70px 0;

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        min-width: 150px;

        &:nth-child(2),
        &:nth-child(3) {
            min-width: 250px;
        }
    }

    th,
    td:first-child {
        font-size: 18px;
    }

    th {
        font-weight: 700;
        background-color: #400436;
        color: #f49d2a;
    }

    td {
        color: #400436;
        vertical-align: top;
        &:first-child {
            font-weight: 600;
            background-color: #400436;
            color: #f49d2a;
            text-align: center;
            vertical-align: middle;
        }

        &:last-child {
            vertical-align: middle;
        }

        ul {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            li {
                &:not(:last-child) {
                    margin-bottom: 8px;
                }
            }
        }
    }

    tr {
        background-color: rgba(244, 157, 42, 0.4);
    }
`;
