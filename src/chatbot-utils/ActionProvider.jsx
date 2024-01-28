import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();

  const handleHello = () => {
    const botmessage = createChatBotMessage("Hello, Nice to Meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };

  const gotitAction = () => {
    const clientmessage = createClientMessage("Got it ");
    const botmessage = createChatBotMessage("Pick a Slot ", {
      delay: 2000,
      widget: "calendar",
    });
    const botmessage2 = createChatBotMessage("Pick a Time", {
      withAvatar: false,
      delay: 2000,
      widget: "slots",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientmessage, botmessage, botmessage2],
    }));
  };

  const afterslot = (calenderslot, timeslot) => {
    const message = createClientMessage(`${calenderslot}, ${timeslot}`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    const botmessage = createChatBotMessage("Enter your name!", {
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      bool: true,
      messages: [...prev.messages, botmessage],
    }));
  };

  const setAge = () => {
    const botmessage = createChatBotMessage("Please select your age", {
      delay: 2000,
      widget: "setagewidget",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };

  const afterage = (age) => {
    const message = createClientMessage(`${age}`);
    const name = children.props.children.props.state.userData.name;
    // console.log(name);
    const botmessage = createChatBotMessage(
      "Thank you , in 5 second bot will exit",
      {
        delay: 2000,
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, botmessage],
    }));

    const botmessage2 = createChatBotMessage("5 4 3 2 1 ", {
      delay: 3000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage2],
    }));

    setTimeout(() => {
      age && navigate(`/thankyoupage?age=${age}&name=${name}`);
    }, 5000);
    console.log("after timeout fuctin");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            gotitAction,
            afterslot,
            setAge,
            afterage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
