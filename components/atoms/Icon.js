import { oneOf, string } from 'prop-types';
import React from 'react';
import {
  Close,
  CommsAction,
  FlowAction,
  FlowStep,
  PanelClose,
  PanelOpen,
  PaymentAction,
  PaymentTrigger,
  ScheduledTrigger,
  SupportAction,
  SupportTicket,
  Webhook,
  WhenThen,
} from '../../assets/icons';
import THEME from '../../constants/theme';

const ICON_MAP = {
  FlowStep: FlowStep,
  FlowCondition: FlowStep,
  WhenThen: WhenThen,
  PanelClose: PanelClose,
  PanelOpen: PanelOpen,
  SupportAction: SupportAction,
  PaymentAction: PaymentAction,
  FlowAction: FlowAction,
  CommsAction: CommsAction,
  CORE_CRM_TICKET_TRIGGER: SupportTicket,
  SCHEDULED_TRIGGER: ScheduledTrigger,
  CORE_PAYMENT_TRIGGER: PaymentTrigger,
  WEBHOOK_TRIGGER: Webhook,
  WEBHOOK_ACTION: Webhook,
  None: null,
};

const ICON_SIZES = {
  m: 24,
  l: 40,
};

const Icon = ({ icon, color, size }) => {
  if (icon === 'None') return null;

  const IconComponent = ICON_MAP[icon] ?? Close;
  const sizePx = ICON_SIZES[size];
  return <IconComponent color={color} size={sizePx} />;
};

Icon.propTypes = {
  icon: oneOf(Object.keys(ICON_MAP)).isRequired,
  color: string,
  size: oneOf(Object.keys(ICON_SIZES)),
};

Icon.defaultProps = {
  color: THEME.primaryColors.black,
  size: 'm',
};
export { Icon };
