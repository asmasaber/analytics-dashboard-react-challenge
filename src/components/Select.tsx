import React, { useCallback } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';

interface IPops {
  id: string;
  label: string;
  name: string;
  value: string;
  options: string[];
  showAll?: boolean;
  onChange: (e: { value: string; name: string }) => void;
}

const Select: React.FC<IPops> = ({
  id,
  label,
  name,
  value,
  options,
  onChange,
  showAll = false,
}) => {
  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const { value, name } = event.target;
      onChange({ value, name });
    },
    [onChange],
  );

  return (
    <FormControl fullWidth data-testid={`${id}-testid`}>
      <InputLabel id={`${id}-label`} aria-labelledby={id}>
        {label}
      </InputLabel>
      <MUISelect
        native
        id={id}
        labelId={`${id}-label`}
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {showAll && <option value="all">Show all</option>}
        {options &&
          options.map((o) => (
            <option value={o} key={o}>
              {o}
            </option>
          ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
