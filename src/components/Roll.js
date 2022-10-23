// import material ui components
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemIcon,
  Box,
  Button,
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Roll = ({ roll, removePerson }) => {
  return (
    <>
      <List sx={{ width: '70%' }}>

        {/* iterate through prop array */}
        {roll.map((person) => {
          // deconstruct array
          const { id, name, image } = person;

          return (
            <ListItem
              disablePadding
              key={id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: 2,
              }}
            >
              {/* name & avatar */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemAvatar>
                  <Avatar src={image} alt={name} />
                </ListItemAvatar>
                <ListItemText primary={name} />
              </Box>

              {/* delete icon */}
              <ListItemIcon>
                <Button onClick={() => removePerson(id)}>
                  <DeleteOutlinedIcon />
                </Button>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Roll;
