/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SectionTitle(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SectionTitle")}
      {...rest}
    >
      <Text
        fontFamily="Jost"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="34.68000030517578px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.05px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Explore Our Signature Offerings: Where Comfort meets Luxury"
        {...getOverrideProps(
          overrides,
          "Explore Our Signature Offerings: Where Comfort meets Luxury"
        )}
      ></Text>
    </Flex>
  );
}
