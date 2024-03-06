/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CurrentOffersModel } from "../models";
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
export declare type CurrentOffersModelUpdateFormInputValues = {
    title?: string;
    description?: string;
    imagepath?: string;
};
export declare type CurrentOffersModelUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imagepath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentOffersModelUpdateFormOverridesProps = {
    CurrentOffersModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    imagepath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentOffersModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: CurrentOffersModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    currentOffersModel?: CurrentOffersModel;
    onSubmit?: (fields: CurrentOffersModelUpdateFormInputValues) => CurrentOffersModelUpdateFormInputValues;
    onSuccess?: (fields: CurrentOffersModelUpdateFormInputValues) => void;
    onError?: (fields: CurrentOffersModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CurrentOffersModelUpdateFormInputValues) => CurrentOffersModelUpdateFormInputValues;
    onValidate?: CurrentOffersModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentOffersModelUpdateForm(props: CurrentOffersModelUpdateFormProps): React.ReactElement;
