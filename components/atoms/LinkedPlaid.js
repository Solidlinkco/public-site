import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import CircleWrapper from './CircleWrapper';
import THEME from '../../constants/theme';
import { StyledImage } from './StyledImage';
import { P14 } from './P14';
import { L14 } from './L14';
import { FlexContainer } from './FlexContainer';

const LinkedPlaid = ({ item, linkPlaid, unlinkPlaid, isPlaidConnected }) => {
  const { name, logo } = item;
  const { t } = useTranslation();
  return isPlaidConnected ? (
    <FlexContainer justifyContent="flex-start">
      <CircleWrapper
        size={32}
        background={THEME.greyColors.grey5}
        borderColor={THEME.greyColors.grey5}
        margin="0 16px 0 0"
      >
        <StyledImage maxWidth="100%" src={logo || 'https://plaid.com/assets/img/navbar/logo.svg'} alt={name} />
      </CircleWrapper>
      <P14>{name}</P14>
      <L14 margin="0 0 0 14px" color={THEME.secondaryColors.blue} onClick={() => unlinkPlaid()}>
        {t('buttonsText.Unlink')}
      </L14>
    </FlexContainer>
  ) : (
    <FlexContainer margin="15px 0 0" justifyContent="space-between">
      <P14 color={THEME.secondaryColors.blue} onClick={linkPlaid} cursor="pointer">
        {t('connections.plaid.connect')}
      </P14>
      <StyledImage maxWidth="42px" margin="0 0 0 auto" src="https://plaid.com/assets/img/navbar/logo.svg" alt="" />
    </FlexContainer>
  );
};

LinkedPlaid.propTypes = {
  item: shape({
    name: string.isRequired,
    logo: string,
  }).isRequired,
  linkPlaid: func.isRequired,
  unlinkPlaid: func.isRequired,
  isPlaidConnected: bool.isRequired,
};

export default LinkedPlaid;
