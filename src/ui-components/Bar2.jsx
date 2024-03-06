/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CurrentOffersModel } from "../models";
import { getOverrideProps, useDataStoreDeleteAction } from "./utils";
import { schema } from "../models/schema";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Bar2(props) {
  const { currentOffersModel, overrides, ...rest } = props;
  const closeBarOnClick = useDataStoreDeleteAction({
    id: currentOffersModel?.id,
    model: CurrentOffersModel,
    schema: schema,
  });
  return (
    <View
      width="354px"
      height="660px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(208,208,208,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Bar2")}
      {...rest}
    >
      <View
        width="210px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="581px"
        left="calc(50% - 105px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "searchBtnBox")}
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
          {...getOverrideProps(overrides, "searchBtn")}
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
          {...getOverrideProps(overrides, "searchLabel")}
        ></Text>
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
        width="297px"
        height="138px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="415px"
        left="calc(50% - 148.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={currentOffersModel?.description}
        {...getOverrideProps(overrides, "desc")}
      ></Text>
      <Text
        fontFamily="Jost"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="23.1200008392334px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.65px"
        width="354px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 19px - -49px)"
        left="calc(50% - 177px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={currentOffersModel?.title}
        {...getOverrideProps(overrides, "title")}
      ></Text>
      <View
        width="354px"
        height="351px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "imageFrame")}
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
          objectFit="cover"
          src={currentOffersModel?.imagepath}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 12px - 308px)"
        left="calc(50% - 12px - -155px)"
        onClick={() => {
          closeBarOnClick();
        }}
        {...getOverrideProps(overrides, "closeBar")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(241,241,241,1)"
          {...getOverrideProps(overrides, "Rectangle 466")}
        ></View>
        <Icon
          width="12.47px"
          height="5.67px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.474164009094238,
            height: 5.672823429107666,
          }}
          paths={[
            {
              d: "M0.538281 -0.591822C0.211427 -0.889107 -0.294538 -0.865135 -0.591822 -0.538281C-0.889107 -0.211427 -0.865135 0.294538 -0.538281 0.591822L0.538281 -0.591822ZM6.23708 5.67282L5.6988 6.26465C6.00398 6.54222 6.47018 6.54222 6.77536 6.26465L6.23708 5.67282ZM13.0124 0.591822C13.3393 0.294538 13.3633 -0.211427 13.066 -0.538281C12.7687 -0.865135 12.2627 -0.889107 11.9359 -0.591822L13.0124 0.591822ZM-0.538281 0.591822L5.6988 6.26465L6.77536 5.081L0.538281 -0.591822L-0.538281 0.591822ZM6.77536 6.26465L13.0124 0.591822L11.9359 -0.591822L5.6988 5.081L6.77536 6.26465Z",
              stroke: "rgba(255,0,0,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="7px"
          left="5.76px"
          {...getOverrideProps(overrides, "DownArrow14797")}
        ></Icon>
        <Icon
          width="12.47px"
          height="5.67px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.474164009094238,
            height: 5.672823429107666,
          }}
          paths={[
            {
              d: "M0.538281 -0.591822C0.211427 -0.889107 -0.294538 -0.865135 -0.591822 -0.538281C-0.889107 -0.211427 -0.865135 0.294538 -0.538281 0.591822L0.538281 -0.591822ZM6.23708 5.67282L5.6988 6.26465C6.00398 6.54222 6.47018 6.54222 6.77536 6.26465L6.23708 5.67282ZM13.0124 0.591822C13.3393 0.294538 13.3633 -0.211427 13.066 -0.538281C12.7687 -0.865135 12.2627 -0.889107 11.9359 -0.591822L13.0124 0.591822ZM-0.538281 0.591822L5.6988 6.26465L6.77536 5.081L0.538281 -0.591822L-0.538281 0.591822ZM6.77536 6.26465L13.0124 0.591822L11.9359 -0.591822L5.6988 5.081L6.77536 6.26465Z",
              stroke: "rgba(255,0,0,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="18.35px"
          left="18.24px"
          transformOrigin="top left"
          transform="rotate(-180deg)"
          {...getOverrideProps(overrides, "DownArrow14796")}
        ></Icon>
      </View>
    </View>
  );
}
