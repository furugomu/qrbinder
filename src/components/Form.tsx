import React from "react";
import { Form as FormType } from "../reducers/form";

interface Props {
  form: FormType;
  onChange(form: FormType): void;
  onSubmit(form: FormType): void;
}
const Form = ({ form, onChange, onSubmit }: Props) => {
  function handleChange<K extends keyof FormType>(name: K, value: FormType[K]) {
    onChange({ ...form, [name]: value });
  }
  return (
    <form
      method="post"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <TextField name="qrUrl" value={form.qrUrl} onChange={handleChange} />
      <TextField name="id" value={form.id} onChange={handleChange} />
      <TextField name="name" value={form.name} onChange={handleChange} />
      <TextField name="type" value={form.type} onChange={handleChange} />
      <TextField
        name="category"
        value={form.category}
        onChange={handleChange}
      />
      <NumberField
        name="appealPoint"
        value={form.appealPoint}
        onChange={handleChange}
      />
      <TextField name="rarity" value={form.rarity} onChange={handleChange} />
      <NumberField
        name="rarityLevel"
        value={form.rarityLevel}
        onChange={handleChange}
      />
      <p>
        <button>はい</button>
      </p>
    </form>
  );
};
export default Form;

interface FieldProps {
  name: keyof FormType;
  type: string;
  value: string;
  onChange(name: string, value: string): void;
}
const Field = ({ name, type, value, onChange }: FieldProps) => (
  <p>
    {name}:{" "}
    <input
      type={type}
      value={value}
      onChange={e => onChange(name, e.target.value)}
    />
  </p>
);

type TextFieldProps = Pick<FieldProps, "name" | "value" | "onChange">;
const TextField = ({ name, value, onChange }: TextFieldProps) => (
  <Field name={name} type="text" value={value} onChange={onChange} />
);

interface NumberFieldProps {
  name: keyof FormType;
  value: number;
  onChange(name: string, value: number): void;
}
const NumberField = ({ name, value, onChange }: NumberFieldProps) => (
  <Field
    name={name}
    type="number"
    value={String(value)}
    onChange={(name, value) => onChange(name, Number(value))}
  />
);
