import React from 'react';
import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';

export const BasicDemo: React.FunctionComponent = () => {
  const [chatbotVisible, setChatbotVisible] = React.useState<boolean>(false);
  return (
    <ChatbotToggle chatbotVisible={chatbotVisible} toggleChatbot={() => setChatbotVisible(!chatbotVisible)} />
  );
}
