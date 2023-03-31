import React, { useId } from "react";
import { styled } from "../../../config/stiches.config";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
export interface AutocompleteProps {
  label?: string;
  inputId?: string;
}

const AutocompleteWrapper = styled(DropdownMenu.Root, {});
const AutocompleteLabel = styled("label", {});
const AutocompleteInputWrapper = styled("div", {});
const AutocompleteInput = styled("input", {});
const AutocompleteArrow = styled("div", {});
const AutocompleteMenuContainer = styled("section", {});
const AutocompleteMenuItem = styled("button", {});

export const Autocomplete: React.FC<AutocompleteProps> = ({ label, inputId }) => {
  const _inputId = inputId || useId();
  return (
    <AutocompleteWrapper>
      <DropdownMenu.Trigger asChild>
        <AutocompleteInputWrapper>
          <AutocompleteLabel htmlFor={_inputId}>{label}</AutocompleteLabel>
          <AutocompleteInput id={_inputId} />
        </AutocompleteInputWrapper>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content asChild>
        <AutocompleteMenuContainer>
          asdasd
        </AutocompleteMenuContainer>
      </DropdownMenu.Content>
    </AutocompleteWrapper>
  );
};
