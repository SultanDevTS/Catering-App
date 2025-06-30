import { Input } from "./Input";
import { Label } from "./Label";

interface InputFormProps {
    content?:string,
  type: string;
  name: string;
  className?: string,
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const InputForm: React.FC<InputFormProps> = ({
  name,
  className,
  type,
  value,
  onChange,
  placeholder,
  content
}) => {
  return (
    <>
      <Label content={content} className={className} />
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </>
  );
};
