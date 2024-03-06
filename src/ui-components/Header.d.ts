/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Frame 23"?: PrimitiveOverrideProps<ViewProps>;
    "Hotels_Logo 1 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    "Room & Suites"?: PrimitiveOverrideProps<TextProps>;
    SUPPORT?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    "image_6483441 (7) 1"?: PrimitiveOverrideProps<ImageProps>;
    "DA389FDE-B3D0-4DFA-B22A-CC0A2FDD8120 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Darren Louis"?: PrimitiveOverrideProps<TextProps>;
    "Sales & Marketing"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
