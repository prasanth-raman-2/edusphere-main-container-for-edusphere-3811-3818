import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CATEGORIES = [
  'Programming',
  'Data Science',
  'Web Development',
  'Machine Learning',
  'Mathematics',
  'Science',
  'Language',
];

const DIFFICULTY_LEVELS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'beginner',
    duration: '',
    prerequisites: '',
    learningObjectives: '',
    thumbnail: null,
  });

  const handleInputChange = (field) => (event) => {
    setCourseData({
      ...courseData,
      [field]: event.target.value
    });
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCourseData({
        ...courseData,
        thumbnail: file
      });
    }
  };

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
      <form>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Create New Course
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Course Title"
                  value={courseData.title}
                  onChange={handleInputChange('title')}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Course Description"
                  value={courseData.description}
                  onChange={handleInputChange('description')}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={courseData.category}
                    label="Category"
                    onChange={handleInputChange('category')}
                  >
                    {CATEGORIES.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>Difficulty Level</InputLabel>
                  <Select
                    value={courseData.difficulty}
                    label="Difficulty Level"
                    onChange={handleInputChange('difficulty')}
                  >
                    {DIFFICULTY_LEVELS.map((level) => (
                      <MenuItem key={level.value} value={level.value}>
                        {level.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Duration (in hours)"
                  type="number"
                  value={courseData.duration}
                  onChange={handleInputChange('duration')}
                  inputProps={{ min: 1 }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Prerequisites"
                  multiline
                  rows={2}
                  value={courseData.prerequisites}
                  onChange={handleInputChange('prerequisites')}
                  helperText="List any prerequisites, separated by commas"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Learning Objectives"
                  multiline
                  rows={3}
                  value={courseData.learningObjectives}
                  onChange={handleInputChange('learningObjectives')}
                  required
                  helperText="What will students learn from this course?"
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: '2px dashed',
                    borderColor: 'primary.main',
                    borderRadius: 1,
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                  onClick={() => document.getElementById('thumbnail-upload').click()}
                >
                  <input
                    type="file"
                    id="thumbnail-upload"
                    hidden
                    accept="image/*"
                    onChange={handleThumbnailChange}
                  />
                  <CloudUploadIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography>
                    {courseData.thumbnail
                      ? `Selected: ${courseData.thumbnail.name}`
                      : 'Upload Course Thumbnail'}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setCourseData({
                  title: '',
                  description: '',
                  category: '',
                  difficulty: 'beginner',
                  duration: '',
                  prerequisites: '',
                  learningObjectives: '',
                  thumbnail: null,
                })}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Create Course
              </Button>
            </Box>
          </CardContent>
        </Card>
      </form>
    </Box>
  );
};

export default CourseForm;
