import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionBuilder from './QuestionBuilder';

const AssessmentForm = () => {
  const [assessmentData, setAssessmentData] = useState({
    title: '',
    description: '',
    timeLimit: 60,
    passingScore: 60,
    questions: [],
  });

  const handleInputChange = (field) => (event) => {
    setAssessmentData({
      ...assessmentData,
      [field]: event.target.value
    });
  };

  const handleAddQuestion = (question) => {
    setAssessmentData({
      ...assessmentData,
      questions: [...assessmentData.questions, question]
    });
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = assessmentData.questions.filter((_, i) => i !== index);
    setAssessmentData({
      ...assessmentData,
      questions: newQuestions
    });
  };

  const getTotalPoints = () => {
    return assessmentData.questions.reduce((sum, q) => sum + q.points, 0);
  };

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create Assessment
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              fullWidth
              label="Assessment Title"
              value={assessmentData.title}
              onChange={handleInputChange('title')}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              value={assessmentData.description}
              onChange={handleInputChange('description')}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Time Limit (minutes)</InputLabel>
                <Select
                  value={assessmentData.timeLimit}
                  label="Time Limit (minutes)"
                  onChange={handleInputChange('timeLimit')}
                >
                  {[30, 45, 60, 90, 120].map((time) => (
                    <MenuItem key={time} value={time}>
                      {time} minutes
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Passing Score (%)</InputLabel>
                <Select
                  value={assessmentData.passingScore}
                  label="Passing Score (%)"
                  onChange={handleInputChange('passingScore')}
                >
                  {[50, 60, 70, 80, 90].map((score) => (
                    <MenuItem key={score} value={score}>
                      {score}%
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <QuestionBuilder onQuestionAdd={handleAddQuestion} />

      {assessmentData.questions.length > 0 && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">
                Questions ({assessmentData.questions.length})
              </Typography>
              <Typography variant="subtitle1">
                Total Points: {getTotalPoints()}
              </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <List>
              {assessmentData.questions.map((question, index) => (
                <ListItem
                  key={index}
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    mb: 1
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">
                        {question.text}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {question.type.replace('_', ' ')} · {question.points} points
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => handleRemoveQuestion(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                disabled={assessmentData.questions.length === 0}
              >
                Save Assessment
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default AssessmentForm;
