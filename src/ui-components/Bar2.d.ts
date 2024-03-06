/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CurrentOffersModel } from "../models";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Bar2OverridesProps = {
    Bar2?: PrimitiveOverrideProps<ViewProps>;
    searchBtnBox?: PrimitiveOverrideProps<ViewProps>;
    searchBtn?: PrimitiveOverrideProps<ViewProps>;
    searchLabel?: PrimitiveOverrideProps<TextProps>;
    desc?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    imageFrame?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    closeBar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 466"?: PrimitiveOverrideProps<ViewProps>;
    DownArrow14797?: PrimitiveOverrideProps<IconProps>;
    DownArrow14796?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Bar2Props = React.PropsWithChildren<Partial<ViewProps> & {
    currentOffersModel?: CurrentOffersModel;
} & {
    overrides?: Bar2OverridesProps | undefined | null;
}>;
export default function Bar2(props: Bar2Props): React.ReactElement;
