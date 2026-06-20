import { useState, ChangeEvent, FormEvent } from "react";
export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (onSubmit: (data: T) => void) => (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };
  return { values, handleChange, handleSubmit };
}
