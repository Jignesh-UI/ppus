/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SearchSectionOverridesProps = {
    SearchSection?: PrimitiveOverrideProps<ViewProps>;
    "Frame 16"?: PrimitiveOverrideProps<ViewProps>;
    search1422879?: PrimitiveOverrideProps<ViewProps>;
    Vector1422880?: PrimitiveOverrideProps<IconProps>;
    Vector1422881?: PrimitiveOverrideProps<IconProps>;
    "Enter Destination"?: PrimitiveOverrideProps<TextProps>;
    "Frame 17"?: PrimitiveOverrideProps<ViewProps>;
    search1422884?: PrimitiveOverrideProps<ViewProps>;
    Vector1422885?: PrimitiveOverrideProps<IconProps>;
    "CHECK IN1422886"?: PrimitiveOverrideProps<TextProps>;
    "WED, DEC 03 20231422887"?: PrimitiveOverrideProps<TextProps>;
    "Frame 18"?: PrimitiveOverrideProps<ViewProps>;
    search1422889?: PrimitiveOverrideProps<ViewProps>;
    Vector1422890?: PrimitiveOverrideProps<IconProps>;
    "CHECK IN1422891"?: PrimitiveOverrideProps<TextProps>;
    "WED, DEC 03 20231422892"?: PrimitiveOverrideProps<TextProps>;
    "Frame 19"?: PrimitiveOverrideProps<ViewProps>;
    search1422894?: PrimitiveOverrideProps<ViewProps>;
    Vector1422895?: PrimitiveOverrideProps<IconProps>;
    "CHECK OUT"?: PrimitiveOverrideProps<TextProps>;
    "WED, DEC 03 20231422897"?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<ViewProps>;
    search1422899?: PrimitiveOverrideProps<ViewProps>;
    Vector1422900?: PrimitiveOverrideProps<IconProps>;
    "1 ROOM, 1 GUEST"?: PrimitiveOverrideProps<TextProps>;
    "Polygon 31422902"?: PrimitiveOverrideProps<IconProps>;
    "Frame 21"?: PrimitiveOverrideProps<ViewProps>;
    "ROOM/GUEST"?: PrimitiveOverrideProps<ViewProps>;
    "SPECIAL RATES"?: PrimitiveOverrideProps<TextProps>;
    "Polygon 31422906"?: PrimitiveOverrideProps<IconProps>;
    calendar1422907?: PrimitiveOverrideProps<ViewProps>;
    Vector1422908?: PrimitiveOverrideProps<IconProps>;
    Vector1422909?: PrimitiveOverrideProps<IconProps>;
    Vector1422910?: PrimitiveOverrideProps<IconProps>;
    Vector1422911?: PrimitiveOverrideProps<IconProps>;
    calendar1422912?: PrimitiveOverrideProps<ViewProps>;
    Vector1422913?: PrimitiveOverrideProps<IconProps>;
    Vector1422914?: PrimitiveOverrideProps<IconProps>;
    Vector1422915?: PrimitiveOverrideProps<IconProps>;
    Vector1422916?: PrimitiveOverrideProps<IconProps>;
    "Frame 22"?: PrimitiveOverrideProps<ViewProps>;
    SEARCH?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchSectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchSectionOverridesProps | undefined | null;
}>;
export default function SearchSection(props: SearchSectionProps): React.ReactElement;
