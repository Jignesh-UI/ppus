/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function BigChatBot(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1020px"
      height="638px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0.43)"
      {...getOverrideProps(overrides, "BigChatBot")}
      {...rest}
    >
      <View
        width="1020px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 37")}
      >
        <Flex
          gap="14px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="6px"
          left="25px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 38")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="38px"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="100px"
            padding="7px 7px 7px 7px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 25")}
          >
            <Icon
              width="24px"
              height="22.41px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 24,
                height: 22.41025733947754,
              }}
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
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector141066")}
            ></Icon>
          </Flex>
          <Flex
            gap="2px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 35")}
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
              width="72px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
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
              width="41px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Online"
              {...getOverrideProps(overrides, "Online")}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="16px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="17px"
          left="827px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32141070")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "open-external-link-icon 1141071")}
          ></Flex>
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
          top="17px"
          left="995px"
          transformOrigin="top left"
          transform="rotate(90deg)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "open-external-link-icon 1141072")}
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
                width: 16.00010369624215,
                height: 16.000780804977694,
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
              {...getOverrideProps(overrides, "Vector141074")}
            ></Icon>
          </View>
        </View>
      </View>
      <Text
        fontFamily="Lato"
        fontSize="12px"
        fontWeight="400"
        color="rgba(132,132,132,1)"
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
        top="112px"
        left="411px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="12:31 PM"
        {...getOverrideProps(overrides, "12:31 PM")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="74px"
        left="25px"
        border="1px SOLID rgba(232,84,44,0.37)"
        borderRadius="14px 14px 14px 0px"
        padding="7px 18px 7px 18px"
        backgroundColor="rgba(255,255,255,0.53)"
        {...getOverrideProps(overrides, "Frame 26")}
      >
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          children="Hi I’m, your personal assistant. How may I help you?"
          {...getOverrideProps(
            overrides,
            "Hi I\u2019m, your personal assistant. How may I help you?"
          )}
        ></Text>
      </Flex>
      <Text
        fontFamily="Lato"
        fontSize="12px"
        fontWeight="400"
        color="rgba(132,132,132,1)"
        lineHeight="14.40000057220459px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.45px"
        width="57px"
        height="13px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="180px"
        left="938px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="12:32 PM"
        {...getOverrideProps(overrides, "12:32 PM141078")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="12px"
        fontWeight="400"
        color="rgba(132,132,132,1)"
        lineHeight="14.40000057220459px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.45px"
        width="57px"
        height="13px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="566px"
        left="820px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="12:32 PM"
        {...getOverrideProps(overrides, "12:32 PM141079")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="142px"
        right="25px"
        border="1px SOLID rgba(232,84,44,0.1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="14px 14px 0px 14px"
        padding="7px 18px 7px 18px"
        backgroundColor="rgba(232,84,44,0.14)"
        {...getOverrideProps(overrides, "Frame 27")}
      >
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="19.200000762939453px"
          textAlign="right"
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
          children="Hi, pls generate a new years discount banner for our brand."
          {...getOverrideProps(
            overrides,
            "Hi, pls generate a new years discount banner for our brand."
          )}
        ></Text>
      </Flex>
      <View
        width="852px"
        height="354px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="209px"
        left="25px"
        border="1px SOLID rgba(232,84,44,0.37)"
        borderRadius="14px 14px 14px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.53)"
        {...getOverrideProps(overrides, "Frame 29")}
      >
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          fontStyle="italic"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="640px"
          height="21.41px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="4.25%"
          bottom="89.71%"
          left="calc(50% - 320px - 86px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Unwrap special offers & make this year unforgettable with out limited-time deals!"
          {...getOverrideProps(
            overrides,
            "Unwrap special offers & make this year unforgettable with out limited-time deals!"
          )}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="19.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.49px"
          width="812px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="43px"
          left="16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et&#xA;dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex&#xA;ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu&#xA;fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa&#xA;qui officia deserunt mollit anim id est laborum."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        ></Text>
        <Image
          width="289px"
          height="171px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="167px"
          left="17px"
          border="1px SOLID rgba(232,84,44,0.29)"
          borderRadius="13px"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          {...getOverrideProps(overrides, "image 2")}
        ></Image>
        <View
          width="17px"
          height="17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="49.44%"
          bottom="45.76%"
          left="32.98%"
          right="65.02%"
          border="0.4px SOLID rgba(232,84,44,1)"
          borderRadius="23px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 32141086")}
        >
          <View
            width="11px"
            height="10px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="17.65%"
            bottom="23.53%"
            left="17.65%"
            right="17.65%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "download")}
          >
            <Icon
              width="7.97px"
              height="2.92px"
              viewBox={{ minX: 0, minY: 0, width: 7.96875, height: 2.921875 }}
              paths={[
                {
                  d: "M8.21875 0C8.21875 -0.138071 8.10682 -0.25 7.96875 -0.25C7.83068 -0.25 7.71875 -0.138071 7.71875 0L8.21875 0ZM0 1.94792L-0.25 1.94792L0 1.94792ZM0.25 0C0.25 -0.138071 0.138071 -0.25 0 -0.25C-0.138071 -0.25 -0.25 -0.138071 -0.25 0L0.25 0ZM7.71875 0L7.71875 1.94792L8.21875 1.94792L8.21875 0L7.71875 0ZM7.71875 1.94792C7.71875 2.14721 7.64656 2.3341 7.52443 2.46844L7.8944 2.80478C8.10437 2.57381 8.21875 2.26525 8.21875 1.94792L7.71875 1.94792ZM7.52443 2.46844C7.40302 2.60199 7.24375 2.67188 7.08333 2.67188L7.08333 3.17188C7.39257 3.17188 7.68371 3.03653 7.8944 2.80478L7.52443 2.46844ZM7.08333 2.67188L0.885417 2.67188L0.885417 3.17188L7.08333 3.17188L7.08333 2.67188ZM0.885417 2.67188C0.724999 2.67188 0.565725 2.60199 0.444318 2.46844L0.0743475 2.80478C0.285035 3.03653 0.57618 3.17188 0.885417 3.17188L0.885417 2.67188ZM0.444318 2.46844C0.322189 2.3341 0.25 2.14721 0.25 1.94792L-0.25 1.94792C-0.25 2.26525 -0.13562 2.57381 0.0743475 2.80478L0.444318 2.46844ZM0.25 1.94792L0.25 0L-0.25 0L-0.25 1.94792L0.25 1.94792Z",
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
              top="54.3%"
              bottom="16.48%"
              left="13.78%"
              right="13.78%"
              {...getOverrideProps(overrides, "Vector141088")}
            ></Icon>
            <Icon
              width="4.43px"
              height="2.43px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.427083492279053,
                height: 2.4348957538604736,
              }}
              paths={[
                {
                  d: "M0.184985 -0.168168C0.0921083 -0.270333 -0.0660038 -0.277862 -0.168168 -0.184985C-0.270333 -0.0921083 -0.277862 0.0660038 -0.184985 0.168168L0.184985 -0.168168ZM2.21354 2.4349L2.02856 2.60306C2.07594 2.65518 2.14311 2.6849 2.21354 2.6849C2.28398 2.6849 2.35115 2.65518 2.39853 2.60306L2.21354 2.4349ZM4.61207 0.168168C4.70495 0.0660038 4.69742 -0.0921083 4.59525 -0.184985C4.49309 -0.277862 4.33498 -0.270333 4.2421 -0.168168L4.61207 0.168168ZM-0.184985 0.168168L2.02856 2.60306L2.39853 2.26673L0.184985 -0.168168L-0.184985 0.168168ZM2.39853 2.60306L4.61207 0.168168L4.2421 -0.168168L2.02856 2.26673L2.39853 2.60306Z",
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
              top="39.95%"
              bottom="35.7%"
              left="29.88%"
              right="29.88%"
              {...getOverrideProps(overrides, "Vector141089")}
            ></Icon>
            <Icon
              width="0px"
              height="5.84px"
              viewBox={{ minX: 0, minY: 0, width: 1, height: 5.84375 }}
              paths={[
                {
                  d: "M-0.25 5.84375C-0.25 5.98182 -0.138071 6.09375 0 6.09375C0.138071 6.09375 0.25 5.98182 0.25 5.84375L-0.25 5.84375ZM0.25 0C0.25 -0.138071 0.138071 -0.25 0 -0.25C-0.138071 -0.25 -0.25 -0.138071 -0.25 0L0.25 0ZM0.25 5.84375L0.25 0L-0.25 0L-0.25 5.84375L0.25 5.84375Z",
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
              top="5.86%"
              bottom="35.7%"
              left="50%"
              right="50%"
              {...getOverrideProps(overrides, "Vector141090")}
            ></Icon>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="39.33px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11px"
          left="800px"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <View
            width="14.13px"
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
            right="64.07%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "edit")}
          >
            <Icon
              width="10.6px"
              height="10.5px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.599526405334473,
                height: 10.5,
              }}
              paths={[
                {
                  d: "M5.29976 0.35C5.49306 0.35 5.64976 0.1933 5.64976 0C5.64976 -0.1933 5.49306 -0.35 5.29976 -0.35L5.29976 0.35ZM1.17773 0L1.17773 -0.35L1.17773 0ZM0 1.16667L-0.35 1.16667L0 1.16667ZM0 9.33333L-0.35 9.33333L0 9.33333ZM10.9495 5.25C10.9495 5.0567 10.7928 4.9 10.5995 4.9C10.4062 4.9 10.2495 5.0567 10.2495 5.25L10.9495 5.25ZM5.29976 -0.35L1.17773 -0.35L1.17773 0.35L5.29976 0.35L5.29976 -0.35ZM1.17773 -0.35C0.773607 -0.35 0.385383 -0.191003 0.0986304 0.0930567L0.591265 0.590361C0.746245 0.436836 0.957139 0.35 1.17773 0.35L1.17773 -0.35ZM0.0986304 0.0930567C-0.188234 0.377227 -0.35 0.76335 -0.35 1.16667L0.35 1.16667C0.35 0.951144 0.436396 0.743775 0.591265 0.590361L0.0986304 0.0930567ZM-0.35 1.16667L-0.35 9.33333L0.35 9.33333L0.35 1.16667L-0.35 1.16667ZM-0.35 9.33333C-0.35 9.73665 -0.188234 10.1228 0.0986304 10.4069L0.591265 9.90964C0.436396 9.75622 0.35 9.54885 0.35 9.33333L-0.35 9.33333ZM0.0986304 10.4069C0.385383 10.691 0.773607 10.85 1.17773 10.85L1.17773 10.15C0.957139 10.15 0.746245 10.0632 0.591265 9.90964L0.0986304 10.4069ZM1.17773 10.85L9.4218 10.85L9.4218 10.15L1.17773 10.15L1.17773 10.85ZM9.4218 10.85C9.82592 10.85 10.2141 10.691 10.5009 10.4069L10.0083 9.90964C9.85328 10.0632 9.64239 10.15 9.4218 10.15L9.4218 10.85ZM10.5009 10.4069C10.7878 10.1228 10.9495 9.73665 10.9495 9.33333L10.2495 9.33333C10.2495 9.54885 10.1631 9.75622 10.0083 9.90964L10.5009 10.4069ZM10.9495 9.33333L10.9495 5.25L10.2495 5.25L10.2495 9.33333L10.9495 9.33333Z",
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
              {...getOverrideProps(overrides, "Vector141093")}
            ></Icon>
            <Icon
              width="8.32px"
              height="8.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.31551742553711,
                height: 8.23743724822998,
              }}
              paths={[
                {
                  d: "M6.18306 0.362437L5.93674 0.113785L6.18306 0.362437ZM7.06635 0L7.06635 -0.35L7.06635 0ZM7.94965 2.11244L7.70333 1.86378L7.70333 1.86378L7.94965 2.11244ZM2.35545 7.6541L2.43959 7.99384C2.50087 7.97866 2.55691 7.94719 2.60177 7.90276L2.35545 7.6541ZM0 8.23744L-0.33936 8.15179C-0.369444 8.271 -0.334777 8.39725 -0.248036 8.48438C-0.161295 8.5715 -0.0352013 8.60673 0.0841367 8.57717L0 8.23744ZM0.588863 5.9041L0.342545 5.65545C0.297269 5.7003 0.265098 5.75667 0.249503 5.81846L0.588863 5.9041ZM6.42937 0.611089C6.59775 0.444292 6.82682 0.35 7.06635 0.35L7.06635 -0.35C6.64329 -0.35 6.23689 -0.183547 5.93674 0.113785L6.42937 0.611089ZM7.06635 0.35C7.30588 0.35 7.53495 0.444292 7.70333 0.611089L8.19596 0.113785C7.89581 -0.183547 7.48942 -0.35 7.06635 -0.35L7.06635 0.35ZM7.70333 0.611089C7.87159 0.777775 7.96552 1.00315 7.96552 1.23744L8.66552 1.23744C8.66552 0.815351 8.49622 0.411227 8.19596 0.113785L7.70333 0.611089ZM7.96552 1.23744C7.96552 1.47173 7.87159 1.6971 7.70333 1.86378L8.19596 2.36109C8.49622 2.06365 8.66552 1.65952 8.66552 1.23744L7.96552 1.23744ZM7.70333 1.86378L2.10913 7.40545L2.60177 7.90276L8.19596 2.36109L7.70333 1.86378ZM2.27131 7.31437L-0.0841367 7.8977L0.0841367 8.57717L2.43959 7.99384L2.27131 7.31437ZM0.33936 8.32308L0.928222 5.98975L0.249503 5.81846L-0.33936 8.15179L0.33936 8.32308ZM0.83518 6.15276L6.42937 0.611089L5.93674 0.113785L0.342545 5.65545L0.83518 6.15276Z",
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
              {...getOverrideProps(overrides, "Vector141094")}
            ></Icon>
          </View>
          <View
            width="14.13px"
            height="14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0%"
            bottom="0%"
            left="64.07%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "copy")}
          >
            <Icon
              width="8.08px"
              height="9px"
              viewBox={{ minX: 0, minY: 0, width: 8.07582950592041, height: 9 }}
              paths={[
                {
                  d: "M1.24244 0.35L6.83339 0.35L6.83339 -0.35L1.24244 -0.35L1.24244 0.35ZM6.83339 0.35C7.29157 0.35 7.72583 0.776582 7.72583 1.38462L8.42583 1.38462C8.42583 0.463244 7.74757 -0.35 6.83339 -0.35L6.83339 0.35ZM7.72583 1.38462L7.72583 7.61539L8.42583 7.61539L8.42583 1.38462L7.72583 1.38462ZM7.72583 7.61539C7.72583 8.22342 7.29157 8.65 6.83339 8.65L6.83339 9.35C7.74757 9.35 8.42583 8.53676 8.42583 7.61539L7.72583 7.61539ZM6.83339 8.65L1.24244 8.65L1.24244 9.35L6.83339 9.35L6.83339 8.65ZM1.24244 8.65C0.784259 8.65 0.35 8.22342 0.35 7.61539L-0.35 7.61539C-0.35 8.53676 0.328256 9.35 1.24244 9.35L1.24244 8.65ZM0.35 7.61539L0.35 1.38462L-0.35 1.38462L-0.35 7.61539L0.35 7.61539ZM0.35 1.38462C0.35 0.776582 0.784259 0.35 1.24244 0.35L1.24244 -0.35C0.328256 -0.35 -0.35 0.463244 -0.35 1.38462L0.35 1.38462Z",
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
              {...getOverrideProps(overrides, "Vector141096")}
            ></Icon>
            <Icon
              width="7.07px"
              height="8px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.066350936889648,
                height: 8,
              }}
              paths={[
                {
                  d: "M1.6307 8.35C1.824 8.35 1.9807 8.1933 1.9807 8C1.9807 7.8067 1.824 7.65 1.6307 7.65L1.6307 8.35ZM0 6.76923L-0.35 6.76923L0 6.76923ZM1.08713 0L1.08713 -0.35L1.08713 0ZM5.97922 0L5.97922 -0.35L5.97922 0ZM6.71635 1.84615C6.71635 2.03945 6.87305 2.19615 7.06635 2.19615C7.25965 2.19615 7.41635 2.03945 7.41635 1.84615L6.71635 1.84615ZM1.6307 7.65L1.08713 7.65L1.08713 8.35L1.6307 8.35L1.6307 7.65ZM1.08713 7.65C0.906638 7.65 0.723289 7.5692 0.580734 7.40781L0.0560925 7.87122C0.321291 8.17146 0.690973 8.35 1.08713 8.35L1.08713 7.65ZM0.580734 7.40781C0.436939 7.24502 0.35 7.01588 0.35 6.76923L-0.35 6.76923C-0.35 7.17542 -0.207866 7.57239 0.0560925 7.87122L0.580734 7.40781ZM0.35 6.76923L0.35 1.23077L-0.35 1.23077L-0.35 6.76923L0.35 6.76923ZM0.35 1.23077C0.35 0.984118 0.436939 0.754984 0.580734 0.59219L0.0560925 0.128778C-0.207866 0.427612 -0.35 0.82458 -0.35 1.23077L0.35 1.23077ZM0.580734 0.59219C0.723289 0.4308 0.906638 0.35 1.08713 0.35L1.08713 -0.35C0.690974 -0.35 0.321291 -0.171461 0.0560925 0.128778L0.580734 0.59219ZM1.08713 0.35L5.97922 0.35L5.97922 -0.35L1.08713 -0.35L1.08713 0.35ZM5.97922 0.35C6.15971 0.35 6.34306 0.4308 6.48562 0.59219L7.01026 0.128778C6.74506 -0.171461 6.37538 -0.35 5.97922 -0.35L5.97922 0.35ZM6.48562 0.59219C6.62941 0.754984 6.71635 0.984118 6.71635 1.23077L7.41635 1.23077C7.41635 0.82458 7.27422 0.427612 7.01026 0.128778L6.48562 0.59219ZM6.71635 1.23077L6.71635 1.84615L7.41635 1.84615L7.41635 1.23077L6.71635 1.23077Z",
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
              {...getOverrideProps(overrides, "Vector141097")}
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
            right="29.66%"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Line 2")}
          ></Icon>
        </View>
      </View>
      <View
        width="970px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="579px"
        left="25px"
        border="1px SOLID rgba(232,84,44,0.49)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.53)"
        {...getOverrideProps(overrides, "Frame 41")}
      >
        <Text
          fontFamily="Lato"
          fontSize="14px"
          fontWeight="400"
          color="rgba(82,82,82,1)"
          lineHeight="16.80000114440918px"
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
          top="10px"
          left="18px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Type a message..."
          {...getOverrideProps(overrides, "Type a message...")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="37px"
          left="7px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "send-icon 1")}
        ></Flex>
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
          top="9px"
          right="18.07px"
          {...getOverrideProps(overrides, "Vector1410102")}
        ></Icon>
        <Icon
          width="31px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 0.0000013550534276873805,
            height: 31,
          }}
          paths={[
            {
              d: "M0 0L31 0L31 -1L0 -1L0 0Z",
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
          right="28px"
          transformOrigin="top left"
          transform="rotate(90deg)"
          {...getOverrideProps(overrides, "Line 3")}
        ></Icon>
      </View>
    </View>
  );
}
