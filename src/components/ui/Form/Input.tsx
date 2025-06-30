interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  error?:string
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
  error
}) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    className={`
          w-full px-4 py-3 border rounded-lg 
          focus:ring-2 focus:ring-green-500 
          focus:border-transparent outline-none 
          transition-all 
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className}
        `}
    onChange={onChange}
  />
);
