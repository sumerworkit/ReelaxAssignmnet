import { ChevronDown } from 'lucide-react';

export default function FormField({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  select = false,
  onChange,
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <div className="input-shell">
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(name, event.target.value)}
          readOnly={name === 'email'}
        />
        {select && <ChevronDown size={13} aria-hidden="true" />}
      </div>
    </label>
  );
}
