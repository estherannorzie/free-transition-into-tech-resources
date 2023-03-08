import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
  return (
    <Box
      sx={{
        p: 4,
        display: "inline-grid",
      }}
    >
      <Card sx={{ minWidth: "250px" }}>
        <CardContent>
          <Typography variant="h6">{program.name}</Typography>
          <Typography variant="body2">{program.description}</Typography>
        </CardContent>

        <CardActions>
          <Button size="small">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={`https://${program.URL}`}
            >
              Visit Website
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProgramCard;
