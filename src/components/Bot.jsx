import config from '../chatbot-utils/config.js';
import MessageParser from '../chatbot-utils/MessageParser.jsx';
import ActionProvider from '../chatbot-utils/ActionProvider.jsx';
import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit'

const Bot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Bot;