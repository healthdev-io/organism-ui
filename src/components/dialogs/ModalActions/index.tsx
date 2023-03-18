import { styled } from "@stitches/react";
import React, { PropsWithChildren } from "react";
import { theme } from "../../../config/stiches.config";
import { Row } from "../../containers/Row";

const StyledActionsWrapper = styled("div", {
  padding: "1rem 1.5rem",
  backgroundColor: theme.colors.neutralWhite
});

export const ModalActions: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledActionsWrapper>
      <Row align="center" justify="flex-end" gap="0.5rem">
        {children}
      </Row>
    </StyledActionsWrapper>
  );
};
