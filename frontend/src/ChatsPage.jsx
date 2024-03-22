import React from "react";

// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  //   const chatProps = useMultiChatLogic(
  //     "c0a628be-d7f1-4269-809e-4c955eafafd1",
  //     props.user.username,
  //     props.user.secret
  //   );
  return (
    <div style={{ height: "100vh" }}>
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} /> */}

      <PrettyChatWindow
        projectId="c0a628be-d7f1-4269-809e-4c955eafafd1"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
