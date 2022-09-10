import React from 'react';
import { Grid, Radio } from '@mui/material';

interface IProp {
  id?: string;
  label: React.ReactNode | string;
  value: boolean;
  color?: string;
  onChange: (checked?: boolean) => void;
}

const Toggle: React.FC<IProp> = ({ label, value, color, onChange, id = 'custom-switch' }) => {
  const handleChange = () => {
    onChange();
  };

  return (
    <Grid container spacing={2} data-testid={`${id}-testid`}>
      <Grid item xs={2}>
        <Radio
          checked={value}
          onClick={handleChange}
          color="secondary"
          sx={
            value
              ? {
                  '&, &.Mui-checked': {
                    color,
                  },
                }
              : {}
          }
        />
      </Grid>
      <Grid item xs={10}>
        {label}
      </Grid>
    </Grid>
  );
};

export default Toggle;
