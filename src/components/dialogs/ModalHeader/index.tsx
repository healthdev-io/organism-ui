import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../config/stiches.config";
import { Row } from "../../containers/Row";
import { HorizontalDivider } from "../../dividers/HorizontalDivider";
import { CloseButton } from "../../form/CloseButton";
import { ModalTitle } from "../../typography/ModalTitle";

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  stopPropagation?: boolean;
  preventDefault?: boolean;
}

const StyledHeader = styled("header", {
  padding: "1rem 1.5rem",
  paddingBottom: 0,
  backgroundColor: theme.colors.neutralWhite,
});

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  return (
    <StyledHeader
      onClick={(event) => {
        if (props.preventDefault) {
          event.preventDefault();
        }
        if (props.stopPropagation) {
          event.stopPropagation();
        }
      }}
    >
      <Row align="center" justify="space-between" gap="1rem">
        <ModalTitle>{props.title}</ModalTitle>
        <CloseButton onClick={props.onClose}>x</CloseButton>
      </Row>
      <HorizontalDivider mt="1rem" />
    </StyledHeader>
  );
};
