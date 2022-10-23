import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { data } from './data';
import Roll from './components/Roll';

const App = () => {
  // initialize use state
  const [roll, setRoll] = useState(data);

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'rgba(176, 195, 222, 0.32)',
    height: '100vh',
  };
  
  const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    boxShadow: '0px 0px 13px 5px rgba(0,0,0,0.35)',
    borderRadius: 1,
    maxWidth: '500px',
    width: '100%',
    bgcolor: 'background.paper',
  };

  // remove friend
  const removePerson = (id) => {
    const newFriends = roll.filter((person) => person.id !== id);
    setRoll(newFriends);
  };

  return (
    <Box sx={style}>
      <Box sx={styleContainer}>
        {/* title */}
        <Typography variant="h4">{roll.length} Friends</Typography>

        {/* friend list */}
        <Roll roll={roll} removePerson={removePerson} />

        {/* clear all & refresh button */}
        <Button
          onClick={() => (roll.length === 0 ? setRoll(data) : setRoll([]))}
        >
          {roll.length === 0 ? 'Refresh' : 'Clear All'}
        </Button>
      </Box>
    </Box>
  );
};

export default App;
