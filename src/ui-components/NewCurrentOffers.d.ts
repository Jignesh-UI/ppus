/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewCurrentOffersInputValues = {
    title?: string;
    description?: string;
    imagepath?: string;
};
export declare type NewCurrentOffersValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imagepath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewCurrentOffersOverridesProps = {
    NewCurrentOffersGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    imagepath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewCurrentOffersProps = React.PropsWithChildren<{
    overrides?: NewCurrentOffersOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewCurrentOffersInputValues) => NewCurrentOffersInputValues;
    onSuccess?: (fields: NewCurrentOffersInputValues) => void;
    onError?: (fields: NewCurrentOffersInputValues, errorMessage: string) => void;
    onChange?: (fields: NewCurrentOffersInputValues) => NewCurrentOffersInputValues;
    onValidate?: NewCurrentOffersValidationValues;
} & React.CSSProperties>;
export default function NewCurrentOffers(props: NewCurrentOffersProps): React.ReactElement;
