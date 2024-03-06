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
export declare type SmallChatBotOverridesProps = {
    SmallChatBot?: PrimitiveOverrideProps<ViewProps>;
    HeaderBG?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<ViewProps>;
    Assistant?: PrimitiveOverrideProps<TextProps>;
    Online?: PrimitiveOverrideProps<TextProps>;
    DownArrow?: PrimitiveOverrideProps<IconProps>;
    MessageSendBox?: PrimitiveOverrideProps<ViewProps>;
    "send msg box"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 349"?: PrimitiveOverrideProps<ViewProps>;
    "send-icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector3699?: PrimitiveOverrideProps<IconProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    "chatbot-icon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector36104?: PrimitiveOverrideProps<IconProps>;
    ServerMessage1?: PrimitiveOverrideProps<FlexProps>;
    "Here is your banner for New Years discount."?: PrimitiveOverrideProps<TextProps>;
    ServerMessage2?: PrimitiveOverrideProps<ViewProps>;
    "Unwrap special offers & make this year unforgettable with out limited-time deals!"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    edit?: PrimitiveOverrideProps<ViewProps>;
    Vector36111?: PrimitiveOverrideProps<IconProps>;
    Vector36112?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector36114?: PrimitiveOverrideProps<IconProps>;
    Vector36115?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    Download?: PrimitiveOverrideProps<ViewProps>;
    download?: PrimitiveOverrideProps<ViewProps>;
    Vector36121?: PrimitiveOverrideProps<IconProps>;
    Vector36122?: PrimitiveOverrideProps<IconProps>;
    Vector36123?: PrimitiveOverrideProps<IconProps>;
    ExpandArrow?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector36126?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SmallChatBotProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SmallChatBotOverridesProps | undefined | null;
}>;
export default function SmallChatBot(props: SmallChatBotProps): React.ReactElement;
