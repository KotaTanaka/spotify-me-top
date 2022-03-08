import { ChangeEvent, useCallback } from 'react';

export interface IFormSelectItem {
  value: string;
  text: string;
}

interface IFormSelectProps {
  value: string;
  items: IFormSelectItem[];
  onChange: (value: string) => void;
}

const FormSelect: React.FC<IFormSelectProps> = (props) => {
  const { value, items, onChange } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value),
    [onChange],
  );

  return (
    <select
      className="w-full max-w-xs daisy-select daisy-select-primary"
      value={value}
      onChange={handleChange}
    >
      {items.map((item) => {
        return (
          <option
            key={item.value}
            value={item.value}
            disabled={value === item.value}
          >
            {item.text}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;
