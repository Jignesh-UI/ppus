/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function MainHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="65px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MainHeader")}
      {...rest}
    >
      <Image
        width="81px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5px"
        left="78px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "HotelLogo")}
      ></Image>
      <Flex
        gap="62px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="23px"
        left="calc(50% - 324.5px - 22.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Navs")}
      >
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact"
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Room & Suites"
          {...getOverrideProps(overrides, "Room_Suites")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="SUPPORT"
          {...getOverrideProps(overrides, "Support")}
        ></Text>
      </Flex>
      <View
        width="57px"
        height="4px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="49px"
        left="292px"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="18px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(0deg, rgba(232,95,44,1), rgba(232,95,44,0.79))"
        {...getOverrideProps(overrides, "ActiveLine")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="154px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9px"
        left="1044px"
        {...getOverrideProps(overrides, "HProfile")}
      >
        <View
          width="48px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="106px"
          border="1px SOLID rgba(88,91,59,0.78)"
          borderRadius="100px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileImageBox")}
        >
          <Image
            width="48px"
            height="48px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="1000px"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            {...getOverrideProps(overrides, "ProfileImage")}
          ></Image>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="98px"
          height="37px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="5px"
          left="0px"
          {...getOverrideProps(overrides, "ProfileLabels")}
        >
          <Text
            fontFamily="Jost"
            fontSize="14px"
            fontWeight="400"
            color="rgba(15,15,15,1)"
            lineHeight="20.23000144958496px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.27px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="18px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Darren Louis"
            {...getOverrideProps(overrides, "lblName")}
          ></Text>
          <Text
            fontFamily="Jost"
            fontSize="12px"
            fontWeight="400"
            color="rgba(30,30,30,1)"
            lineHeight="17.34000015258789px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.21px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="20px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sales & Marketing"
            {...getOverrideProps(overrides, "lblDesi")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
