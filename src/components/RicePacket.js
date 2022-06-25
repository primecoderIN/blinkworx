import { Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useUserContext } from "../contexts/UserContext";

const RicePacket = () => {
  const [rice, setRice] = useState({
    id: 4,
    itemTypeId: 2,
    itemName: "Rice Packet",
    itemDescription: "This is rice packet",
    itemSpecifications: {
      sizeInKG: 1,
    },
  });

  const { handleCreatedOrder } = useUserContext();
  useEffect(() => {
    handleCreatedOrder(4, rice);
  }, [rice]);
  return (
    <Stack direction="row" py={3} width="50%">
      <Typography flexGrow={1}>Select the pack size in KG</Typography>
      <Stack direction="row" alignContent="center">
        <RemoveIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            rice.itemSpecifications.sizeInKG > 0 &&
            setRice({
              ...rice,
              itemSpecifications: {
                sizeInKG: rice.itemSpecifications.sizeInKG - 1,
              },
            })
          }
        />
        <Typography sx={{ border: "1px solid blue" }} px={1}>
          {rice.itemSpecifications.sizeInKG}
        </Typography>
        <AddIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            setRice({
              ...rice,
              itemSpecifications: {
                sizeInKG: rice.itemSpecifications.sizeInKG + 1,
              },
            })
          }
        />
        <Typography color="blue" px={1}>
          KG
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RicePacket;
