/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BigChatBotOverridesProps = {
    BigChatBot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 37"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    Vector141066?: PrimitiveOverrideProps<IconProps>;
    "Frame 35"?: PrimitiveOverrideProps<FlexProps>;
    Assistant?: PrimitiveOverrideProps<TextProps>;
    Online?: PrimitiveOverrideProps<TextProps>;
    "Frame 32141070"?: PrimitiveOverrideProps<ViewProps>;
    "open-external-link-icon 1141071"?: PrimitiveOverrideProps<FlexProps>;
    "open-external-link-icon 1141072"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector141074?: PrimitiveOverrideProps<IconProps>;
    "12:31 PM"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "Hi I\u2019m, your personal assistant. How may I help you?"?: PrimitiveOverrideProps<TextProps>;
    "12:32 PM141078"?: PrimitiveOverrideProps<TextProps>;
    "12:32 PM141079"?: PrimitiveOverrideProps<TextProps>;
    "Frame 27"?: PrimitiveOverrideProps<FlexProps>;
    "Hi, pls generate a new years discount banner for our brand."?: PrimitiveOverrideProps<TextProps>;
    "Frame 29"?: PrimitiveOverrideProps<ViewProps>;
    "Unwrap special offers & make this year unforgettable with out limited-time deals!"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."?: PrimitiveOverrideProps<TextProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32141086"?: PrimitiveOverrideProps<ViewProps>;
    download?: PrimitiveOverrideProps<ViewProps>;
    Vector141088?: PrimitiveOverrideProps<IconProps>;
    Vector141089?: PrimitiveOverrideProps<IconProps>;
    Vector141090?: PrimitiveOverrideProps<IconProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    edit?: PrimitiveOverrideProps<ViewProps>;
    Vector141093?: PrimitiveOverrideProps<IconProps>;
    Vector141094?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector141096?: PrimitiveOverrideProps<IconProps>;
    Vector141097?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 41"?: PrimitiveOverrideProps<ViewProps>;
    "Type a message..."?: PrimitiveOverrideProps<TextProps>;
    "send-icon 1"?: PrimitiveOverrideProps<FlexProps>;
    Vector1410102?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BigChatBotProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BigChatBotOverridesProps | undefined | null;
}>;
export default function BigChatBot(props: BigChatBotProps): React.ReactElement;
