import React from 'react';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Checkbox, FormGroup } from '@mui/material';

const QuestionTypes = {
  MultipleChoice: ({ options, onChange }) => (
    <FormControl component="fieldset">
      <RadioGroup onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  ),

  MultipleSelect: ({ options, onChange }) => (
    <FormGroup>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              onChange={(e) => {
                const newValue = e.target.checked;
                onChange(prevSelected => {
                  if (newValue) {
                    return [...prevSelected, option];
                  } else {
                    return prevSelected.filter(item => item !== option);
                  }
                });
              }}
            />
          }
          label={option}
        />
      ))}
    </FormGroup>
  ),

  ShortAnswer: ({ onChange }) => (
    <Box sx={{ mt: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={2}
        variant="outlined"
        placeholder="Enter your answer"
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  ),

  LongAnswer: ({ onChange }) => (
    <Box sx={{ mt: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        placeholder="Enter your detailed answer"
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  )
};

export default QuestionTypes;
