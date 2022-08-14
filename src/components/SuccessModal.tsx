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
            Successfully created embed!
          </Text>
        </Modal.Header>
        <Modal.Footer>
          <Button
            auto
            onClick={() => {
              closeHandler();
              navigator.clipboard.writeText(url);
            }}
          >
            Copy Link
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SuccessModal;
