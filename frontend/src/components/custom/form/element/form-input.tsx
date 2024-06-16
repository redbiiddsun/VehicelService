import {
  UseFormRegister,
  FieldError,
  Path,
  FieldValues,
} from "react-hook-form";
import WarningBanner from "./warning-banner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps<T extends FieldValues> {
  id: keyof T;
  label: string;
  labelstyle?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: FieldError;
}

function FormInputField<T extends FieldValues>({
  id,
  label,
  labelstyle,
  type = "text",
  placeholder = "",
  register,
  required = false,
  error,
}: InputFieldProps<T>) {
  return (
    <>
      <Label htmlFor={id as string} className={labelstyle}>
        {label}
      </Label>
      <Input
        id={id as string}
        type={type}
        placeholder={placeholder}
        {...register(id as unknown as Path<T>, { required })}
        required
      />
      {error && <WarningBanner>{error.message}</WarningBanner>}
    </>
  );
}

export default FormInputField;
