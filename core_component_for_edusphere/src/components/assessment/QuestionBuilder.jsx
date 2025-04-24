import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, Typography, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


const QUESTION_TYPE_OPTIONS = [
  { value: 'multiple_choice', label: 'Multiple Choice' },
  { value: 'multiple_select', label: 'Multiple Select' },
  { value: 'short_answer', label: 'Short Answer' },
  { value: 'long_answer', label: 'Long Answer' },
];

const QuestionBuilder = ({ onQuestionAdd }) => {
  const [questionType, setQuestionType] = useState('multiple_choice');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const [points, setPoints] = useState(1);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSaveQuestion = () => {
    if (!question.trim()) return;
    
    const questionData = {
      type: questionType,
      text: question,
      points,
      options: ['multiple_choice', 'multiple_select'].includes(questionType) ? options : [],
    };

    onQuestionAdd(questionData);
    resetForm();
  };

  const resetForm = () => {
    setQuestion('');
    setQuestionType('multiple_choice');
    setOptions(['']);
    setPoints(1);
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add New Question
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            size="small"
            sx={{ minWidth: 200 }}
          >
            {QUESTION_TYPE_OPTIONS.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>

          <TextField
            type="number"
            label="Points"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            size="small"
            sx={{ width: 100 }}
            inputProps={{ min: 1 }}
          />
        </Box>

        <TextField
          fullWidth
          multiline
          rows={2}
          label="Question Text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ mb: 3 }}
        />

        {['multiple_choice', 'multiple_select'].includes(questionType) && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Options
            </Typography>
            {options.map((option, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                />
                <Button
                  color="error"
                  onClick={() => handleRemoveOption(index)}
                  disabled={options.length <= 1}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={handleAddOption}
              sx={{ mt: 1 }}
            >
              Add Option
            </Button>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" onClick={resetForm}>
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={handleSaveQuestion}
            disabled={!question.trim()}
          >
            Add Question
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuestionBuilder;
