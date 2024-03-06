/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactModelCreateFormInputValues = {
    Name?: string;
    Email?: string;
    Mobile?: string;
    Message?: string;
};
export declare type ContactModelCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Mobile?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactModelCreateFormOverridesProps = {
    ContactModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Mobile?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactModelCreateFormInputValues) => ContactModelCreateFormInputValues;
    onSuccess?: (fields: ContactModelCreateFormInputValues) => void;
    onError?: (fields: ContactModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactModelCreateFormInputValues) => ContactModelCreateFormInputValues;
    onValidate?: ContactModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactModelCreateForm(props: ContactModelCreateFormProps): React.ReactElement;
