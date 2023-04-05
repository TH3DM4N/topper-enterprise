/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LikeCreateFormInputValues = {
    userId?: string;
    postId?: string;
};
export declare type LikeCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    postId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LikeCreateFormOverridesProps = {
    LikeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    postId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LikeCreateFormProps = React.PropsWithChildren<{
    overrides?: LikeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LikeCreateFormInputValues) => LikeCreateFormInputValues;
    onSuccess?: (fields: LikeCreateFormInputValues) => void;
    onError?: (fields: LikeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikeCreateFormInputValues) => LikeCreateFormInputValues;
    onValidate?: LikeCreateFormValidationValues;
} & React.CSSProperties>;
export default function LikeCreateForm(props: LikeCreateFormProps): React.ReactElement;
