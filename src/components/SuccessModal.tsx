import React, { FunctionComponent } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import { URL } from "../lib/constants";

type Props = {
  visible: boolean;
  closeHandler: () => void;
  url: string;
};

const SuccessModal: FunctionComponent<Props> = ({
  visible,
  closeHandler,
  url,
}) => {
  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text h3>
            Success
          </Text>
        </Modal.Header>
        <Modal.Body>
          Embed successfully created! Click the button below to copy it to your
          clipboard.
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button
            auto
            onClick={() => {
              closeHandler();
              navigator.clipboard.writeText(url);
            }}
          >
            Copy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SuccessModal;
