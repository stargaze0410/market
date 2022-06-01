import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Filter = () => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Филтрация</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Laptop" control={<Radio />} label="Laptop" />
          <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
          <FormControlLabel
            value="Accessories"
            control={<Radio />}
            label="Accessories"
          />
          <FormControlLabel value="all" control={<Radio />} label="all" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
