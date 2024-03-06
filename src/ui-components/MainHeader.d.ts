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
export declare type MainHeaderOverridesProps = {
    MainHeader?: PrimitiveOverrideProps<ViewProps>;
    HotelLogo?: PrimitiveOverrideProps<ImageProps>;
    Navs?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Room_Suites?: PrimitiveOverrideProps<TextProps>;
    Support?: PrimitiveOverrideProps<TextProps>;
    ActiveLine?: PrimitiveOverrideProps<ViewProps>;
    HProfile?: PrimitiveOverrideProps<ViewProps>;
    ProfileImageBox?: PrimitiveOverrideProps<ViewProps>;
    ProfileImage?: PrimitiveOverrideProps<ImageProps>;
    ProfileLabels?: PrimitiveOverrideProps<ViewProps>;
    lblName?: PrimitiveOverrideProps<TextProps>;
    lblDesi?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MainHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MainHeaderOverridesProps | undefined | null;
}>;
export default function MainHeader(props: MainHeaderProps): React.ReactElement;
