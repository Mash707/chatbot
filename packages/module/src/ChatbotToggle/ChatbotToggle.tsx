// ============================================================================
// Chatbot Toggle
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';

// Import Chatbot components

// Import styles
import './ChatbotToggle.scss'

export interface ChatbotToggleProps {
  /** TODO: description needed */
  label?: string;
  /** TODO: description needed */
  chatbotVisible?: boolean;
  /** TODO: description needed */
  toggleChatbot?: () => void;
}

const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth=".75" d="M3.577 14.382c0 .198.12.38.31.46l.19.04a.492.492 0 0 0 .349-.143l3.028-3.028h8.513a.489.489 0 0 0 .492-.492V2.491A.489.489 0 0 0 15.967 2H1.691a.489.489 0 0 0-.492.491v8.728c0 .135.056.262.143.349a.498.498 0 0 0 .349.143h1.878v2.663h.008v.008ZM2.19 10.72V2.983h13.278v7.729H7.24a.512.512 0 0 0-.35.143l-2.322 2.322v-1.974a.498.498 0 0 0-.142-.348.492.492 0 0 0-.35-.143H2.19v.008Z" />
      <path fill="#999" stroke="#999" strokeLinejoin="round" strokeWidth=".75" d="M22.301 9.135h-3.963a.489.489 0 0 0-.492.491c0 .27.222.492.492.492h3.472v7.737h-1.88a.404.404 0 0 0-.348.134.492.492 0 0 0-.143.35v1.973l-2.322-2.323a.492.492 0 0 0-.349-.142H8.532v-4.265a.489.489 0 0 0-.492-.492.494.494 0 0 0-.491.492v4.756c0 .277.222.492.491.492h8.514l3.028 3.028a.492.492 0 0 0 .349.142l.19-.04a.502.502 0 0 0 .31-.459V18.83h1.878c.111-.008.262-.048.349-.135a.491.491 0 0 0 .142-.349v-8.72a.489.489 0 0 0-.491-.491h-.008Z" />
    </svg>
  )
}

export const ChatbotToggle: React.FunctionComponent<ChatbotToggleProps> = ({
 label,
 chatbotVisible,
 toggleChatbot
}: ChatbotToggleProps) => {

  // Configure icon
  const icon = chatbotVisible ? <AngleDownIcon /> : <Icon />;

  // Configure tooltips
  // const tooltipRef = React.useRef()

  return (
    <>
      <Button
        className={`pf-chatbot__button pf-chatbot__button--toggle-chatbot ${chatbotVisible ? 'pf-chatbot__button--active' : ''}`}
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--toggle-chatbot"
        //ref={tooltipRef}
        onClick={toggleChatbot}
      >
        {icon}
        {/* Notification dot placeholder */}
      </Button>
      {/*<Tooltip
        id="pf-chatbot__tooltip--toggle-chatbot"
        className="pf-chatbot__tooltip"
        content={label}
        position="top-end"
        triggerRef={tooltipRef} />*/}
    </>
  )
}

export default ChatbotToggle;
