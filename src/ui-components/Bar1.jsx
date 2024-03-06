/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Bar1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="354px"
      height="659px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(208,208,208,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Bar1")}
      {...rest}
    >
      <Text
        fontFamily="Jost"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        textTransform="uppercase"
        lineHeight="23.1200008392334px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.65px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="376px"
        left="calc(50% - 99.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Our Top Destinations"
        {...getOverrideProps(overrides, "CardTitle")}
      ></Text>
      <View
        width="210px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="580px"
        left="calc(50% - 105px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BtnBox")}
      >
        <View
          width="210px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(232,84,44,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "BtnBorder")}
        ></View>
        <Text
          fontFamily="Jost"
          fontSize="14px"
          fontWeight="500"
          color="rgba(232,84,44,1)"
          lineHeight="20.23000144958496px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.55px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="14px"
          left="43px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="DISCOVER MORE"
          {...getOverrideProps(overrides, "BtnTitle")}
        ></Text>
      </View>
      <View
        width="354px"
        height="351px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="-1px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CardBox")}
      >
        <Image
          width="354px"
          height="351px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          {...getOverrideProps(overrides, "CardImage")}
        ></Image>
      </View>
      <Text
        fontFamily="Jost"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.1200008392334px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.65px"
        width="283px"
        height="138px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="415px"
        left="calc(50% - 141.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Discover our top destinations, where each locale is a chapter in an unforgettable travel story.&#xA;From iconic landmarks to hidden gems, let your journey with us redefine the art of exploration."
        {...getOverrideProps(overrides, "cardDesc")}
      ></Text>
    </View>
  );
}
