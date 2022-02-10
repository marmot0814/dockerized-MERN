import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function NotFound() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography varient="subtitle1">Not Found</Typography>
    </Box>
  );
}