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
      <Card sx={{ minWidth: "250px", maxWidth: "300px"}}>
        <CardContent sx={{ padding: '16px 16px 0px 16px'}}>
          <Typography variant="h6" gutterBottom>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to={`https://${program.URL}`}
              >
                {program.name}
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>{program.specialty}</Typography>
          <Box width="260px" height="70px">
            <Typography variant="body2" color="text.secondary">
              {program.description}
            </Typography>
          </Box>
        </CardContent>

        <CardActions>
          <Button onClick={handleOpen}>Details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
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
              <Typography id="modal-modal-title" variant="h6" gutterBottom>
                {program.name}
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: 'bold '}}>Type: </span>
                {program.type}
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: 'bold '}}>Country: </span> 
                {countries[program.country]}
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: 'bold '}}>Length: </span> 
                {`${program.lengthInWeeks} weeks`}
              </Typography>
              <Typography gutterBottom>
                <span style={{ fontWeight: 'bold '}}>Career Guidance: </span>
                {program.offersCareerGuidance ? "Yes": "No"}
              </Typography>
              <Typography gutterBottom><span style={{ fontWeight: 'bold '}}>Hiatus: </span> {program.onHiatus ? "Yes": "No"}</Typography>
              <Typography gutterBottom>
              <span style={{ fontWeight: 'bold '}}>Additional Resources: </span> {
                  program.additionalResources ? 
                  <Link target="_blank"
                    rel="noopener noreferrer"
                    to={`${program.additionalResources}`}
                  >
                    {program.additionalResources}
                  </Link> 
                  : 
                  "N/A"
                }
              </Typography>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProgramCard;
