/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SmallChatBot(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="342px"
      height="430px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(232,84,44,0.28)"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SmallChatBot")}
      {...rest}
    >
      <View
        width="342px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(6deg, rgba(232,84,44,1), rgba(232,84,44,0.75))"
        {...getOverrideProps(overrides, "HeaderBG")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="71px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9px"
        left="62px"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
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
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Assistant"
          {...getOverrideProps(overrides, "Assistant")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="14.40000057220459px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.45px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="22px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Online"
          {...getOverrideProps(overrides, "Online")}
        ></Text>
      </View>
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
            stroke: "rgba(255,255,255,1)",
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
        top="6.16%"
        bottom="92.52%"
        left="90.88%"
        right="5.47%"
        {...getOverrideProps(overrides, "DownArrow")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="322px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="380px"
        left="10px"
        {...getOverrideProps(overrides, "MessageSendBox")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="322px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "send msg box")}
        >
          <View
            width="322px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(232,84,44,0.89)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 349")}
          ></View>
          <View
            width="22.93px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="9px"
            left="283.44px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "send-icon")}
          >
            <Icon
              width="22.93px"
              height="22px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.927736282348633,
                height: 22.00238037109375,
              }}
              paths={[
                {
                  d: "M0.435374 7.98299L21.9468 0.0677821C22.0694 0.00953978 22.2075 -0.0118919 22.343 0.00629693C22.4785 0.0244857 22.6052 0.081446 22.7063 0.16971C22.8074 0.257974 22.8783 0.373422 22.9097 0.500919C22.941 0.628416 22.9314 0.762011 22.8821 0.884188L14.6516 21.5826C14.6045 21.7016 14.5219 21.8048 14.4141 21.8794C14.3063 21.9539 14.178 21.9965 14.0451 22.0018C13.9122 22.0071 13.7806 21.975 13.6666 21.9094C13.5526 21.8438 13.4613 21.7476 13.404 21.6327L10.0875 15.0657L16.67 6.0476L7.26665 12.33L0.384869 9.17537C0.265372 9.1204 0.165303 9.03314 0.0970101 8.92437C0.0287168 8.8156 -0.00481311 8.69008 0.000557462 8.56328C0.00592804 8.43649 0.0499641 8.31397 0.127232 8.21085C0.204501 8.10773 0.31162 8.02852 0.435374 7.98299Z",
                  fill: "rgba(232,84,44,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="-0.01%"
              bottom="0%"
              left="0%"
              right="-0.01%"
              {...getOverrideProps(overrides, "Vector3699")}
            ></Icon>
          </View>
          <Flex
            gap="0"
            direction="column"
            width="240px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="3px"
            left="5px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InputGroup")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(174,179,183,1)"
              borderRadius="5px"
              padding="6px 12px 6px 12px"
              {...getOverrideProps(overrides, "Input")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Type a message..."
                {...getOverrideProps(overrides, "placeholder")}
              ></Text>
            </Flex>
          </Flex>
        </View>
        <Icon
          width="30px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 0.0000011901838661287911,
            height: 30,
          }}
          paths={[
            {
              d: "M0 0L30 0L30 -1L0 -1L0 0Z",
              stroke: "rgba(232,84,44,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="5px"
          left="267.81px"
          transformOrigin="top left"
          transform="rotate(90deg)"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
      </View>
      <View
        width="38px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="9px"
        left="16px"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="24px"
          height="23px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="8px"
          left="7px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "chatbot-icon 1")}
        >
          <Icon
            width="24px"
            height="22.41px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 22.41025733947754 }}
            paths={[
              {
                d: "M11.2267 5.48321L11.2267 4.41849C11.0921 4.36996 10.9615 4.31158 10.8361 4.24386C10.3453 3.96367 9.97556 3.52308 9.79451 3.00252C9.61347 2.48195 9.63314 1.91614 9.84996 1.40837C9.97044 1.13147 10.1455 0.879591 10.3655 0.666641C10.5848 0.455705 10.8449 0.28795 11.131 0.172779C11.4193 0.0574627 11.7287 -0.00127375 12.041 2.09466e-05C12.5102 -4.26465e-05 12.9688 0.133746 13.3588 0.384449C13.7488 0.635152 14.0527 0.991497 14.2321 1.40837C14.4715 1.96577 14.4715 2.5917 14.2321 3.1491C14.1127 3.42605 13.9375 3.67751 13.7165 3.88895L13.7048 3.90022C13.5657 4.03174 13.411 4.14708 13.2439 4.24386C13.12 4.31422 12.9892 4.37271 12.8534 4.41849L12.8534 5.48321L18.415 5.48321C19.2131 5.48569 19.9779 5.79181 20.5421 6.3347C21.1063 6.8776 21.4241 7.61314 21.4262 8.38066L21.4262 8.81067L22.4573 8.81067C22.8663 8.81216 23.2581 8.96919 23.5471 9.24748C23.8362 9.52577 23.999 9.90271 24 10.296L24 13.7455C23.999 14.1389 23.8362 14.5158 23.5471 14.7941C23.2581 15.0724 22.8663 15.2294 22.4573 15.2309L21.4321 15.2309L21.4321 15.6196C21.4295 16.3879 21.1107 17.124 20.5453 17.667C19.9799 18.2099 19.214 18.5156 18.415 18.517L10.7854 18.517L6.21188 22.2933C6.16146 22.3349 6.10297 22.3666 6.03979 22.3864C5.9766 22.4062 5.90996 22.4138 5.84371 22.4087C5.77745 22.4037 5.71289 22.3861 5.65375 22.3569C5.59461 22.3277 5.54205 22.2876 5.4991 22.2388C5.41321 22.1425 5.36916 22.0182 5.37608 21.8915L5.62018 18.5114L5.57917 18.5114C4.78203 18.5094 4.0181 18.2042 3.45426 17.6623C2.89041 17.1205 2.57247 16.3861 2.56989 15.6196L2.56989 15.2309L1.54467 15.2309C1.13532 15.2299 0.743021 15.0731 0.453563 14.7947C0.164104 14.5164 0.00103113 14.1392 1.73444e-16 13.7455L0 10.296C0.00102865 9.90271 0.163833 9.52577 0.45287 9.24748C0.741907 8.96919 1.1337 8.81216 1.54272 8.81067L2.56989 8.81067L2.56989 8.37878C2.57144 7.61161 2.88892 6.87626 3.45288 6.33361C4.01684 5.79096 4.78136 5.48519 5.57917 5.48321L11.2267 5.48321ZM16.1575 8.88579C16.519 8.88579 16.8724 8.98887 17.173 9.182C17.4736 9.37513 17.7079 9.64963 17.8462 9.9708C17.9846 10.292 18.0208 10.6454 17.9502 10.9863C17.8797 11.3273 17.7056 11.6404 17.45 11.8862C17.1944 12.132 16.8687 12.2994 16.5141 12.3673C16.1596 12.4351 15.792 12.4003 15.458 12.2672C15.1241 12.1342 14.8386 11.9089 14.6377 11.6199C14.4369 11.3309 14.3297 10.991 14.3297 10.6434C14.3297 10.1773 14.5223 9.7302 14.8651 9.40058C15.2078 9.07096 15.6728 8.88579 16.1575 8.88579ZM7.84247 8.88579C8.20398 8.88579 8.55738 8.98887 8.85796 9.182C9.15855 9.37513 9.39282 9.64963 9.53117 9.9708C9.66951 10.292 9.70571 10.6454 9.63518 10.9863C9.56465 11.3273 9.39057 11.6404 9.13494 11.8862C8.87932 12.132 8.55363 12.2994 8.19907 12.3673C7.8445 12.4351 7.47699 12.4003 7.14299 12.2672C6.809 12.1342 6.52354 11.9089 6.32269 11.6199C6.12185 11.3309 6.01465 10.991 6.01465 10.6434C6.01465 10.1773 6.20722 9.7302 6.55 9.40058C6.89279 9.07096 7.3577 8.88579 7.84247 8.88579ZM9.08836 14.7746C9.06079 14.7537 9.03588 14.7297 9.01416 14.7032C8.95087 14.6318 8.91502 14.5416 8.91261 14.4478C8.91084 14.3535 8.94253 14.2615 9.00244 14.1868C9.02482 14.1597 9.05037 14.1351 9.0786 14.1136C9.18602 14.0322 9.3181 13.9867 9.45483 13.984C9.59156 13.9813 9.72548 14.0215 9.83629 14.0986C10.17 14.3518 10.5404 14.5567 10.9357 14.707C11.2763 14.8336 11.6387 14.8974 12.0039 14.8948C12.3737 14.8872 12.7392 14.8173 13.0838 14.6882C13.4838 14.5344 13.8613 14.3312 14.2067 14.0835C14.32 14.0092 14.4554 13.9724 14.5924 13.9785C14.7294 13.9846 14.8606 14.0333 14.9663 14.1173C14.9928 14.1408 15.017 14.1666 15.0386 14.1943C15.096 14.2706 15.1249 14.3632 15.1206 14.4572C15.1123 14.5513 15.0725 14.6402 15.0073 14.7107C14.9826 14.7378 14.9543 14.7618 14.9234 14.7821C14.4842 15.0942 14.0025 15.3469 13.4919 15.5332C13.0216 15.7037 12.5241 15.7946 12.0215 15.8017C11.5183 15.8085 11.018 15.727 10.5452 15.5614C10.024 15.3739 9.53596 15.1104 9.09813 14.7802L9.08836 14.7746ZM18.413 6.45967L5.57917 6.45967C5.05016 6.46165 4.54343 6.66473 4.16954 7.02461C3.79565 7.38449 3.58494 7.87196 3.5834 8.38066L3.5834 15.6196C3.58494 16.1283 3.79565 16.6158 4.16954 16.9756C4.54343 17.3355 5.05016 17.5386 5.57917 17.5406L6.19821 17.5406C6.33208 17.5502 6.4566 17.6102 6.54472 17.7076C6.63284 17.805 6.67744 17.9319 6.66884 18.0607L6.47356 20.7986L10.2425 17.6795C10.2894 17.6345 10.3451 17.5988 10.4064 17.5746C10.4678 17.5504 10.5335 17.5382 10.5998 17.5387L18.4111 17.5387C18.9401 17.5367 19.4468 17.3336 19.8207 16.9738C20.1946 16.6139 20.4053 16.1264 20.4068 15.6177L20.4068 8.37878C20.4058 7.87043 20.1955 7.38315 19.8218 7.02352C19.4482 6.66388 18.9417 6.46115 18.413 6.45967Z",
                fill: "rgba(232,84,44,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2.56%"
            bottom="0%"
            left="-2.5%"
            right="2.5%"
            {...getOverrideProps(overrides, "Vector36104")}
          ></Icon>
        </View>
      </View>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="72px"
        left="18px"
        border="1px SOLID rgba(232,84,44,0.37)"
        borderRadius="8px 8px 8px 0px"
        padding="7px 18px 7px 9px"
        {...getOverrideProps(overrides, "ServerMessage1")}
      >
        <Text
          fontFamily="Lato"
          fontSize="15px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.6px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Here is your banner for&#xA;New Years discount."
          {...getOverrideProps(
            overrides,
            "Here is your banner for New Years discount."
          )}
        ></Text>
      </Flex>
      <View
        width="273px"
        height="228px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="141px"
        left="18px"
        border="1px SOLID rgba(232,84,44,0.37)"
        borderRadius="8px 8px 8px 0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ServerMessage2")}
      >
        <Text
          fontFamily="Lato"
          fontSize="15px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.6px"
          width="247px"
          height="59px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="2.19%"
          bottom="71.93%"
          left="5.13%"
          right="4.4%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Unwrap special offers & make&#xA;this year unforgettable with out&#xA;limited-time deals!"
          {...getOverrideProps(
            overrides,
            "Unwrap special offers & make this year unforgettable with out limited-time deals!"
          )}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="35px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="70px"
          left="14px"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <View
            width="14px"
            height="14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="60%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "edit")}
          >
            <Icon
              width="10.5px"
              height="10.5px"
              viewBox={{ minX: 0, minY: 0, width: 10.5, height: 10.5 }}
              paths={[
                {
                  d: "M5.25 0.35C5.4433 0.35 5.6 0.1933 5.6 0C5.6 -0.1933 5.4433 -0.35 5.25 -0.35L5.25 0.35ZM1.16667 0L1.16667 -0.35L1.16667 0ZM0 1.16667L-0.35 1.16667L0 1.16667ZM0 9.33333L-0.35 9.33333L0 9.33333ZM10.85 5.25C10.85 5.0567 10.6933 4.9 10.5 4.9C10.3067 4.9 10.15 5.0567 10.15 5.25L10.85 5.25ZM5.25 -0.35L1.16667 -0.35L1.16667 0.35L5.25 0.35L5.25 -0.35ZM1.16667 -0.35C0.764422 -0.35 0.378652 -0.190209 0.0942213 0.0942213L0.589196 0.589196C0.742351 0.436041 0.950073 0.35 1.16667 0.35L1.16667 -0.35ZM0.0942213 0.0942213C-0.190209 0.378652 -0.35 0.764422 -0.35 1.16667L0.35 1.16667C0.35 0.950073 0.436041 0.742351 0.589196 0.589196L0.0942213 0.0942213ZM-0.35 1.16667L-0.35 9.33333L0.35 9.33333L0.35 1.16667L-0.35 1.16667ZM-0.35 9.33333C-0.35 9.73558 -0.190209 10.1213 0.0942213 10.4058L0.589196 9.9108C0.436041 9.75765 0.35 9.54993 0.35 9.33333L-0.35 9.33333ZM0.0942213 10.4058C0.378651 10.6902 0.764421 10.85 1.16667 10.85L1.16667 10.15C0.950073 10.15 0.742351 10.064 0.589196 9.9108L0.0942213 10.4058ZM1.16667 10.85L9.33333 10.85L9.33333 10.15L1.16667 10.15L1.16667 10.85ZM9.33333 10.85C9.73558 10.85 10.1213 10.6902 10.4058 10.4058L9.9108 9.9108C9.75765 10.064 9.54993 10.15 9.33333 10.15L9.33333 10.85ZM10.4058 10.4058C10.6902 10.1213 10.85 9.73558 10.85 9.33333L10.15 9.33333C10.15 9.54993 10.064 9.75765 9.9108 9.9108L10.4058 10.4058ZM10.85 9.33333L10.85 5.25L10.15 5.25L10.15 9.33333L10.85 9.33333Z",
                  stroke: "rgba(232,84,44,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.67%"
              bottom="8.33%"
              left="8.33%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector36111")}
            ></Icon>
            <Icon
              width="8.24px"
              height="8.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.23743724822998,
                height: 8.23743724822998,
              }}
              paths={[
                {
                  d: "M6.125 0.362437L5.87751 0.11495L6.125 0.362437ZM7 0L7 -0.35L7 0ZM7.875 2.11244L7.62751 1.86495L7.62751 1.86495L7.875 2.11244ZM2.33333 7.6541L2.41822 7.99365C2.47976 7.97827 2.53597 7.94645 2.58082 7.90159L2.33333 7.6541ZM0 8.23744L-0.33955 8.15255C-0.369368 8.27182 -0.334421 8.39799 -0.247487 8.48493C-0.160554 8.57186 -0.0343838 8.60681 0.0848875 8.57699L0 8.23744ZM0.583333 5.9041L0.335846 5.65662C0.29099 5.70147 0.259169 5.75768 0.243784 5.81922L0.583333 5.9041ZM6.37249 0.609924C6.53891 0.443498 6.76464 0.35 7 0.35L7 -0.35C6.57899 -0.35 6.17522 -0.182753 5.87751 0.11495L6.37249 0.609924ZM7 0.35C7.23536 0.35 7.46109 0.443498 7.62751 0.609924L8.12249 0.11495C7.82479 -0.182753 7.42101 -0.35 7 -0.35L7 0.35ZM7.62751 0.609924C7.79394 0.776351 7.88744 1.00207 7.88744 1.23744L8.58744 1.23744C8.58744 0.816422 8.42019 0.412652 8.12249 0.11495L7.62751 0.609924ZM7.88744 1.23744C7.88744 1.4728 7.79394 1.69852 7.62751 1.86495L8.12249 2.35992C8.42019 2.06222 8.58744 1.65845 8.58744 1.23744L7.88744 1.23744ZM7.62751 1.86495L2.08585 7.40662L2.58082 7.90159L8.12249 2.35992L7.62751 1.86495ZM2.24845 7.31455L-0.0848875 7.89789L0.0848875 8.57699L2.41822 7.99365L2.24845 7.31455ZM0.33955 8.32232L0.922883 5.98899L0.243784 5.81922L-0.33955 8.15255L0.33955 8.32232ZM0.830821 6.15159L6.37249 0.609924L5.87751 0.11495L0.335846 5.65662L0.830821 6.15159Z",
                  stroke: "rgba(232,84,44,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.83%"
              bottom="33.33%"
              left="33.33%"
              right="7.83%"
              {...getOverrideProps(overrides, "Vector36112")}
            ></Icon>
          </View>
          <View
            width="14px"
            height="14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0%"
            bottom="0%"
            left="60%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "copy")}
          >
            <Icon
              width="8px"
              height="9px"
              viewBox={{ minX: 0, minY: 0, width: 8, height: 9 }}
              paths={[
                {
                  d: "M1.23077 0.35L6.76923 0.35L6.76923 -0.35L1.23077 -0.35L1.23077 0.35ZM6.76923 0.35C7.21805 0.35 7.65 0.77332 7.65 1.38462L8.35 1.38462C8.35 0.466507 7.67988 -0.35 6.76923 -0.35L6.76923 0.35ZM7.65 1.38462L7.65 7.61539L8.35 7.61539L8.35 1.38462L7.65 1.38462ZM7.65 7.61539C7.65 8.22668 7.21805 8.65 6.76923 8.65L6.76923 9.35C7.67988 9.35 8.35 8.53349 8.35 7.61539L7.65 7.61539ZM6.76923 8.65L1.23077 8.65L1.23077 9.35L6.76923 9.35L6.76923 8.65ZM1.23077 8.65C0.78195 8.65 0.35 8.22668 0.35 7.61539L-0.35 7.61539C-0.35 8.53349 0.320119 9.35 1.23077 9.35L1.23077 8.65ZM0.35 7.61539L0.35 1.38462L-0.35 1.38462L-0.35 7.61539L0.35 7.61539ZM0.35 1.38462C0.35 0.77332 0.78195 0.35 1.23077 0.35L1.23077 -0.35C0.320119 -0.35 -0.35 0.466507 -0.35 1.38462L0.35 1.38462Z",
                  stroke: "rgba(232,84,44,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="28.57%"
              bottom="7.14%"
              left="14.29%"
              right="28.57%"
              {...getOverrideProps(overrides, "Vector36114")}
            ></Icon>
            <Icon
              width="7px"
              height="8px"
              viewBox={{ minX: 0, minY: 0, width: 7, height: 8 }}
              paths={[
                {
                  d: "M1.61538 8.35C1.80868 8.35 1.96538 8.1933 1.96538 8C1.96538 7.8067 1.80868 7.65 1.61538 7.65L1.61538 8.35ZM0 6.76923L-0.35 6.76923L0 6.76923ZM1.07692 0L1.07692 -0.35L1.07692 0ZM5.92308 0L5.92308 -0.35L5.92308 0ZM6.65 1.84615C6.65 2.03945 6.8067 2.19615 7 2.19615C7.1933 2.19615 7.35 2.03945 7.35 1.84615L6.65 1.84615ZM1.61538 7.65L1.07692 7.65L1.07692 8.35L1.61538 8.35L1.61538 7.65ZM1.07692 7.65C0.90036 7.65 0.719873 7.57024 0.578825 7.40904L0.0520216 7.86999C0.314898 8.17042 0.68225 8.35 1.07692 8.35L1.07692 7.65ZM0.578825 7.40904C0.436472 7.24635 0.35 7.0168 0.35 6.76923L-0.35 6.76923C-0.35 7.1745 -0.20955 7.57105 0.0520216 7.86999L0.578825 7.40904ZM0.35 6.76923L0.35 1.23077L-0.35 1.23077L-0.35 6.76923L0.35 6.76923ZM0.35 1.23077C0.35 0.983202 0.436472 0.75365 0.578825 0.590961L0.0520216 0.130007C-0.20955 0.428946 -0.35 0.825496 -0.35 1.23077L0.35 1.23077ZM0.578825 0.590961C0.719873 0.429763 0.90036 0.35 1.07692 0.35L1.07692 -0.35C0.682251 -0.35 0.314899 -0.170424 0.0520216 0.130007L0.578825 0.590961ZM1.07692 0.35L5.92308 0.35L5.92308 -0.35L1.07692 -0.35L1.07692 0.35ZM5.92308 0.35C6.09964 0.35 6.28013 0.429763 6.42118 0.590961L6.94798 0.130007C6.6851 -0.170424 6.31775 -0.35 5.92308 -0.35L5.92308 0.35ZM6.42118 0.590961C6.56353 0.75365 6.65 0.983202 6.65 1.23077L7.35 1.23077C7.35 0.825496 7.20955 0.428946 6.94798 0.130007L6.42118 0.590961ZM6.65 1.23077L6.65 1.84615L7.35 1.84615L7.35 1.23077L6.65 1.23077Z",
                  stroke: "rgba(232,84,44,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.14%"
              bottom="35.71%"
              left="92.86%"
              right="-42.86%"
              transformOrigin="top left"
              transform="rotate(180deg)"
              {...getOverrideProps(overrides, "Vector36115")}
            ></Icon>
          </View>
          <Icon
            width="8px"
            height="0px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 3.4968979889526963e-7,
              height: 8,
            }}
            paths={[
              {
                d: "M0 -0.25C-0.138071 -0.25 -0.25 -0.138071 -0.25 0C-0.25 0.138071 -0.138071 0.25 0 0.25L0 -0.25ZM8 0.25C8.13807 0.25 8.25 0.138071 8.25 0C8.25 -0.138071 8.13807 -0.25 8 -0.25L8 0.25ZM0 0.25L8 0.25L8 -0.25L0 -0.25L0 0.25Z",
                stroke: "rgba(232,84,44,1)",
                fillRule: "nonzero",
                strokeWidth: 0,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.57%"
            bottom="71.43%"
            left="50%"
            right="27.14%"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Line 2")}
          ></Icon>
        </View>
      </View>
      <Image
        width="184px"
        height="125px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="234px"
        left="28px"
        borderRadius="9px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        {...getOverrideProps(overrides, "image 2")}
      ></Image>
      <View
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="55.81%"
        bottom="40.7%"
        left="55.85%"
        right="39.77%"
        border="0.4px SOLID rgba(232,84,44,1)"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Download")}
      >
        <View
          width="9.38px"
          height="10.31px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="12.5%"
          bottom="18.75%"
          left="18.75%"
          right="18.75%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "download")}
        >
          <Icon
            width="7.03px"
            height="2.58px"
            viewBox={{ minX: 0, minY: 0, width: 7.03125, height: 2.578125 }}
            paths={[
              {
                d: "M7.28125 0C7.28125 -0.138071 7.16932 -0.25 7.03125 -0.25C6.89318 -0.25 6.78125 -0.138071 6.78125 0L7.28125 0ZM0 1.71875L-0.25 1.71875L0 1.71875ZM0.25 0C0.25 -0.138071 0.138071 -0.25 0 -0.25C-0.138071 -0.25 -0.25 -0.138071 -0.25 0L0.25 0ZM6.78125 0L6.78125 1.71875L7.28125 1.71875L7.28125 0L6.78125 0ZM6.78125 1.71875C6.78125 1.88765 6.72004 2.0454 6.61744 2.15825L6.98741 2.49459C7.17784 2.28511 7.28125 2.00569 7.28125 1.71875L6.78125 1.71875ZM6.61744 2.15825C6.51557 2.27031 6.38279 2.32812 6.25 2.32812L6.25 2.82812C6.53161 2.82812 6.79626 2.70486 6.98741 2.49459L6.61744 2.15825ZM6.25 2.32812L0.78125 2.32812L0.78125 2.82812L6.25 2.82812L6.25 2.32812ZM0.78125 2.32812C0.648459 2.32812 0.515681 2.27031 0.413808 2.15825L0.0438378 2.49459C0.234991 2.70486 0.49964 2.82812 0.78125 2.82812L0.78125 2.32812ZM0.413808 2.15825C0.311214 2.0454 0.25 1.88765 0.25 1.71875L-0.25 1.71875C-0.25 2.00569 -0.146594 2.28511 0.0438378 2.49459L0.413808 2.15825ZM0.25 1.71875L0.25 0L-0.25 0L-0.25 1.71875L0.25 1.71875Z",
                stroke: "rgba(232,84,44,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 0,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="62.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector36121")}
          ></Icon>
          <Icon
            width="3.91px"
            height="2.15px"
            viewBox={{ minX: 0, minY: 0, width: 3.90625, height: 2.1484375 }}
            paths={[
              {
                d: "M0.184985 -0.168168C0.0921083 -0.270333 -0.0660038 -0.277862 -0.168168 -0.184985C-0.270333 -0.0921083 -0.277862 0.0660038 -0.184985 0.168168L0.184985 -0.168168ZM1.95312 2.14844L1.76814 2.31661C1.81552 2.36872 1.88269 2.39844 1.95312 2.39844C2.02356 2.39844 2.09073 2.36872 2.13811 2.31661L1.95312 2.14844ZM4.09124 0.168168C4.18411 0.0660038 4.17658 -0.0921083 4.07442 -0.184985C3.97225 -0.277862 3.81414 -0.270333 3.72127 -0.168168L4.09124 0.168168ZM-0.184985 0.168168L1.76814 2.31661L2.13811 1.98027L0.184985 -0.168168L-0.184985 0.168168ZM2.13811 2.31661L4.09124 0.168168L3.72127 -0.168168L1.76814 1.98027L2.13811 2.31661Z",
                stroke: "rgba(232,84,44,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 0,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.67%"
            bottom="37.5%"
            left="29.17%"
            right="29.17%"
            {...getOverrideProps(overrides, "Vector36122")}
          ></Icon>
          <Icon
            width="0px"
            height="5.16px"
            viewBox={{ minX: 0, minY: 0, width: 1, height: 5.15625 }}
            paths={[
              {
                d: "M-0.25 5.15625C-0.25 5.29432 -0.138071 5.40625 0 5.40625C0.138071 5.40625 0.25 5.29432 0.25 5.15625L-0.25 5.15625ZM0.25 0C0.25 -0.138071 0.138071 -0.25 0 -0.25C-0.138071 -0.25 -0.25 -0.138071 -0.25 0L0.25 0ZM0.25 5.15625L0.25 0L-0.25 0L-0.25 5.15625L0.25 5.15625Z",
                stroke: "rgba(232,84,44,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 0,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="37.5%"
            left="50%"
            right="50%"
            {...getOverrideProps(overrides, "Vector36123")}
          ></Icon>
        </View>
      </View>
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="20px"
        left="278px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ExpandArrow")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="16px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Icon
            width="16px"
            height="16px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.00078010559082,
              height: 16.000102996826172,
            }}
            paths={[
              {
                d: "M14.4339 9.45062C14.4339 9.03526 14.7719 8.69802 15.1883 8.69802C15.6046 8.69802 15.9426 9.03526 15.9426 9.45062L15.9426 13.7722C15.9426 14.3855 15.692 14.9428 15.2874 15.3465C14.8829 15.7501 14.3243 16.0001 13.7096 16.0001L2.23295 16.0001C1.61827 16.0001 1.05971 15.7501 0.655139 15.3465C0.250571 14.9428 0 14.3855 0 13.7722L0 2.23838C0 1.6251 0.250571 1.06781 0.655139 0.664165C1.05971 0.260519 1.61827 0.0105192 2.23295 0.0105192L6.53703 0.0105192C6.95334 0.0105192 7.29135 0.347759 7.29135 0.763123C7.29135 1.17849 6.95334 1.51573 6.53703 1.51573L2.23295 1.51573C2.03458 1.51573 1.85449 1.59776 1.72268 1.72797C1.59086 1.85948 1.50995 2.03917 1.50995 2.23708L1.50995 13.7709C1.50995 13.9689 1.59217 14.1485 1.72268 14.2801C1.85449 14.4116 2.03458 14.4923 2.23295 14.4923L13.7109 14.4923C13.9093 14.4923 14.0894 14.4103 14.2212 14.2801C14.353 14.1498 14.4339 13.9689 14.4339 13.7709L14.4339 9.45062ZM14.6715 2.27354L7.04861 9.97406C6.75759 10.2696 6.27993 10.2735 5.98369 9.98318C5.68744 9.69281 5.68352 9.21625 5.97455 8.92068L13.3038 1.51573L10.2525 1.51573C9.83622 1.51573 9.49821 1.17849 9.49821 0.763123C9.49821 0.347759 9.83622 0.0105192 10.2525 0.0105192L13.7109 0.0105192C14.3791 0.0105192 15.2405 -0.102762 15.7533 0.414165C16.077 0.740988 16.0052 3.34646 15.9635 4.85557C15.953 5.2462 15.9439 5.54437 15.9439 5.75792C15.9439 6.17328 15.6059 6.51052 15.1896 6.51052C14.7732 6.51052 14.4352 6.17328 14.4352 5.75792C14.4352 5.71755 14.4457 5.32562 14.46 4.81521C14.4809 4.02875 14.6075 2.98708 14.6715 2.27354Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector36126")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
