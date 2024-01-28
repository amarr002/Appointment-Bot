import React from 'react';

const MessageParser = ({ children, actions }) => {
  
  const boolval = children.props.state.bool;
  const parse = (message) => {
    
    console.log(boolval);
    // console.log("it is here");
    // if(message.includes('Hello'.toLowerCase())){
    //     actions.handleHello();
    // }
    if(boolval === true){
      // console.log("boolval have been true");
      children.props.state.userData.name = message;
      children.props.state.bool = false;
      actions.setAge();
    }
    // console.log("it is also here");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;