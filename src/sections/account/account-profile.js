import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar:"/assets/avatars/accounsts.png",
  projectName: 'Automate T-Shirt Sizing',
  name: 'Make Your Account',
  zone: 'Admin Panel'
};

export const AccountProfile = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            mb:2,
            width: 100
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.projectName}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.zone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  
  </Card>
);
