import * as React from 'react';
import { usePayWithPaystack } from './usePayWithPaystack';

export const PaymentWrapper = ({ children, files, setFiles }) => {
    usePayWithPaystack({ files, setFiles });

    return <div>{children}</div>;
};
