import type { NextPage } from "next";
import { Button, Input } from "@nextui-org/react";
import Center from "../components/Center";
import React from "react";
import { URL, FakeURL } from "../lib/constants";
import SuccessModal from "../components/SuccessModal";

const Home: NextPage = () => {
  const [isValid, setIsValid] = React.useState(true);
  // Create 3 references to the input elements
  const input1 = React.useRef<HTMLInputElement>(null);
  const input2 = React.useRef<HTMLInputElement>(null);
  const input3 = React.useRef<HTMLInputElement>(null);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const onClick = () => {
    // Check if the input elements are valid
    if (input1.current && input2.current && input3.current) {
      // Get the values of the input elements
      const value1 = input1.current.value;
      const value2 = input2.current.value;
      const value3 = input3.current.value;
      // Check if the values are valid
      if (value1 && value2 && value3) {
        //  do things
        const data = {
          title: value1,
          description: value2,
          color: value3,
        };
        let objJsonStr = JSON.stringify(data);
        let objJsonB64 = Buffer.from(objJsonStr).toString("base64");

        setQuery(`data=${objJsonB64}`);
        setModalVisible(true);
      }
    }
  };

  return (
    <>
      <SuccessModal
        visible={modalVisible}
        closeHandler={() => {
          setModalVisible(false);
        }}
        url={FakeURL + `${URL}/embed?${query}`}
      />
      <Center classes={"mt-[12%]"}>
        <Input size="xl" ref={input1} placeholder="Title" />
      </Center>
      <Center classes={"mt-5"}>
        <Input size="xl" ref={input2} placeholder="Description" />
      </Center>
      <Center classes={"mt-5"}>
        <Input
          size="xl"
          ref={input3}
          placeholder="Hex Color"
          status={isValid ? "default" : "error"}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length === 0) setIsValid(true);
            else
              setIsValid(
                value.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) !== null
              );
          }}
        />
      </Center>
      <Center classes={"mt-5"}>
        <Button color="primary" onClick={onClick}>
          Save
        </Button>
      </Center>
    </>
  );
};

export default Home;
