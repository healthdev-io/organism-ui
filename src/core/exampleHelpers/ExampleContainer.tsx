import React from "react";
import { PropsWithChildren } from "react";
import { styled } from "../../config/stiches.config";

export function ExampleContainer({ children }: PropsWithChildren) {
  const CompExampleContainer = styled("div", {
    width: "300px",
    backgroundColor: "$neutralWhite",
    padding: "1.5rem",
    borderRadius: "4px",
  });

  return <CompExampleContainer>{children}</CompExampleContainer>;
}
