import { css } from 'styled-components';

export const customTextColor = css`
    color: ${({ color }) => color || '#1a1546'};
    margin: ${({ margin }) => margin || '0'};
    padding: ${({ padding }) => padding || '0'};
    opacity: ${({ opacity }) => opacity || '1'};
    min-height: ${({ minHeight }) => minHeight || 'auto'};
    cursor: ${({ cursor }) => cursor || 'inherit'};
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
    ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily} !important`};
    ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
    ${({ transform }) => transform && `transform: ${transform}`};
    white-space: ${({ whiteSpace }) => whiteSpace || 'normal'};
    width: ${({ width }) => width || 'auto'};
    text-transform: ${({ textTransform }) => textTransform || 'none'};
    overflow: ${({ overflow }) => overflow || 'visible'};
    text-overflow: ${({ textOverflow }) => textOverflow || 'clip'};
    max-width: ${({ maxWidth }) => maxWidth || 'none'};
    letter-spacing: ${({ letterSpacing }) => letterSpacing || 'normal'};
    display: ${({ display }) => display || 'block'};
`;

export const borderStyling = css`
    border: ${({ border }) => border || 'none'};
    ${({ borderRight }) => borderRight && `border-right: ${borderRight}`};
    ${({ borderLeft }) => borderLeft && `border-left: ${borderLeft}`};
    ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom}`};
    ${({ borderTop }) => borderTop && `border-top: ${borderTop}`};
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
`;
