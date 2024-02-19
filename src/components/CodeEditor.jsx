import { useRef, useState, useEffect } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { PROBLEMS_DETAILS } from "../constants";
import Output from "./Output";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

// const socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`);

const socket = io.connect("http://localhost:3001");

const codeRoom = `welcome to the room `;

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [isReadOnly, setIsReadOnly] = useState("");

  let { problemNumber } = useParams();
  const onMount = async (editor) => {
    const response = await socket.emitWithAck("join_room", codeRoom);
    setIsReadOnly(response);
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    socket
      .emitWithAck("join_room", codeRoom)
      .then((response) => setIsReadOnly(response));

    socket.on("receive_message", (data) => {
      setValue(data.value);
    });
    return () => socket.emit("leave_room", codeRoom);
  }, []);

  useEffect(() => {
    socket.emit("send_message", { room: codeRoom, value });
  }, [value]);
  console.log(isReadOnly);

  return (
    <Box>
      <div>
        <h1 className="text-center my-3 text-decoration-underline">
          Let's Start Practice
        </h1>
        <p>
          here you have a code block with a problem, <hr /> if you think you
          fixed all the mistakes you should press the "Run Code" button the
          teacher cannot edit this block code , have fun !
        </p>
      </div>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <HStack spacing={4}>
          <Box w="50%">
            <Text mb={2} as={"b"} fontSize="2xl">
              Code Block :
            </Text>
            <Editor
              options={{
                domReadOnly: isReadOnly,
                readOnly: isReadOnly,
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language="javascript"
              defaultValue={PROBLEMS_DETAILS[problemNumber].codeBlock}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={"javascript"} />
        </HStack>
      </Box>
    </Box>
  );
};
export default CodeEditor;
