import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
  return (
    <Card sx={{ minWidth: 250 }}>
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
  );
};

export default ProgramCard;
