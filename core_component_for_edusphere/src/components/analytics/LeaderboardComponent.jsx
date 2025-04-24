import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  Chip,
  Divider
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const MOCK_LEADERBOARD = [
  {
    name: 'John Doe',
    points: 2580,
    rank: 1,
    courses: 8,
    badges: ['Top Performer', 'Quick Learner']
  },
  {
    name: 'Emma Wilson',
    points: 2340,
    rank: 2,
    courses: 7,
    badges: ['Consistent Learner']
  },
  {
    name: 'Michael Chen',
    points: 2100,
    rank: 3,
    courses: 6,
    badges: ['Rising Star']
  },
  {
    name: 'Sarah Johnson',
    points: 1950,
    rank: 4,
    courses: 5,
    badges: ['Active Participant']
  },
  {
    name: 'David Kim',
    points: 1820,
    rank: 5,
    courses: 5,
    badges: ['Fast Learner']
  }
];

const getRankColor = (rank) => {
  switch (rank) {
    case 1:
      return '#FFD700'; // Gold
    case 2:
      return '#C0C0C0'; // Silver
    case 3:
      return '#CD7F32'; // Bronze
    default:
      return '#2196F3'; // Default blue
  }
};

const LeaderboardComponent = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <EmojiEventsIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">
            Learning Leaderboard
          </Typography>
        </Box>

        <List sx={{ width: '100%' }}>
          {MOCK_LEADERBOARD.map((student, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  backgroundColor: index < 3 ? 'rgba(33, 150, 243, 0.04)' : 'transparent',
                  borderRadius: 1
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: getRankColor(student.rank),
                      color: student.rank <= 3 ? 'common.black' : 'common.white'
                    }}
                  >
                    {student.rank}
                  </Avatar>
                </ListItemAvatar>
                
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {student.name}
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {student.points} pts
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ mt: 1 }}>
                      {student.badges.map((badge, badgeIndex) => (
                        <Chip
                          key={badgeIndex}
                          label={badge}
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                  }
                />
                
                <Chip
                  label={`${student.courses} Courses`}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </ListItem>
              {index < MOCK_LEADERBOARD.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default LeaderboardComponent;
