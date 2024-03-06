/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Bar3OverridesProps = {
    Bar3?: PrimitiveOverrideProps<ViewProps>;
    "our wedding venues"?: PrimitiveOverrideProps<TextProps>;
    "search cta"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 465"?: PrimitiveOverrideProps<ViewProps>;
    "DISCOVER MORE"?: PrimitiveOverrideProps<TextProps>;
    "Frame 12"?: PrimitiveOverrideProps<ViewProps>;
    "image_6483441 (10) 2"?: PrimitiveOverrideProps<ImageProps>;
    "Celebrate your love in our enchanting wedding venues. With timeless elegance, our spaces set the stage for unforgettable celebrations, where dreams become cherished!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bar3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Bar3OverridesProps | undefined | null;
}>;
export default function Bar3(props: Bar3Props): React.ReactElement;
