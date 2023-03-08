import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProgramCard = ({ program }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Worldwide",
    "Other",
  ];

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
          <Typography variant="body2">{program.specialty}</Typography>
        </CardContent>

        <CardActions>
          <Button onClick={handleOpen}>Details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                borderRadius: "5px",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {program.description}
              </Typography>
              <Typography>Country: {countries[program.country]}</Typography>
            </Box>
          </Modal>

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
