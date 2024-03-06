/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContactModel } from "../models";
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
export declare type ContactModelUpdateFormInputValues = {
    Name?: string;
    Email?: string;
    Mobile?: string;
    Message?: string;
};
export declare type ContactModelUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Mobile?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactModelUpdateFormOverridesProps = {
    ContactModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Mobile?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactModel?: ContactModel;
    onSubmit?: (fields: ContactModelUpdateFormInputValues) => ContactModelUpdateFormInputValues;
    onSuccess?: (fields: ContactModelUpdateFormInputValues) => void;
    onError?: (fields: ContactModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactModelUpdateFormInputValues) => ContactModelUpdateFormInputValues;
    onValidate?: ContactModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactModelUpdateForm(props: ContactModelUpdateFormProps): React.ReactElement;
