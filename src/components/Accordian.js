import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Accordian = ({
  children, //Pass a react component to be rendered as accordian item
  onButtonClick, //Pass a function to choose if a product is phone or not
  ProductName,
  ProductSubText,
  isPhone,
  productDetails = {
    id: "",
    itemTypeId: "",
    itemName: "",
    itemDescription: "",
    itemSpecifications: "",
  },
}) => {
  const [product, setProduct] = useState(productDetails);
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ border: "1px solid grey", background: "lightgrey" }}
      >
        <Stack direction="column" flexGrow={0.9}>
          <Typography variant="h5">{ProductName}</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexGrow={1}
          >
            <Typography component="h3">{ProductSubText}</Typography>
            <Box component="span">
              <Button
                size="small"
                variant="contained"
                color={`${isPhone ? "primary" : "secondary"}`}
              >
                YES
              </Button>
              <Button
                size="small"
                variant="contained"
                color={`${isPhone ? "primary" : "secondary"}`}
              >
                NO
              </Button>
            </Box>
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails
        sx={{ border: "1px solid grey", background: "lightgrey" }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian;
