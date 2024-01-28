import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import GotitBtn from "../components/GotitBtn";
import Calendar from "../components/Calendar";
import Slots from "../components/Slots";
import AgeWidget from "../components/AgeWidget";

const botName = "Justin";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system! `, {
        delay: 3000,
      widget: 'gotitbtn',
    }),
  ],
  state:{
    bool: false,
    userData:{
      name:"",
      age:0,
      calenderslot:"",
      timeslot:"",
    }
  },

  widgets: [
    {
      widgetName: 'gotitbtn',
      widgetFunc: (props) => <GotitBtn {...props} />,
     
    },
    {
      widgetName: 'calendar',
      widgetFunc: (props) => <Calendar {...props} />
    },
    {
      widgetName: 'slots',
      widgetFunc: (props) => <Slots {...props} />
    },
    {
      widgetName: 'setagewidget',
      widgetFunc: (props) => <AgeWidget {...props} />
    }
  ],
  botName: botName,
};

export default config;
