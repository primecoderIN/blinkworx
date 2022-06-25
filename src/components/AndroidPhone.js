import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

const AndroidPhone = () => {
  const [phone, setPhone] = useState({
    id: 2,
    itemTypeId: 1,
    itemName: "Android Phone",
    itemDescription: "This is android phone",
    itemSpecifications: {
      memory: "512GB",
    },
  });
  const { handleCreatedOrder } = useUserContext();
  useEffect(() => {
    handleCreatedOrder(2, phone);
  }, [phone]);

  const selectPhoneMemory = (memory) => {
    setPhone({ ...phone, itemSpecifications: { memory } });
  };

  const memoryTypes = ["128GB", "256GB", "512GB", "1024GB"];

  return (
    <Stack direction="row" py={1} width="50%" alignItems="center">
      <Typography flexGrow={1}>Please select memory</Typography>
      <Stack direction="row" alignContent="center">
        {memoryTypes.map((memory) => {
          return (
            <Button
              key={memory}
              onClick={() => selectPhoneMemory(memory)}
              sx={{
                color:
                  phone.itemSpecifications.memory === memory ? "blue" : "black",
                borderBottom: `1px solid ${
                  phone.itemSpecifications.memory === "128GB"
                    ? "blue"
                    : "transparent"
                }`,
              }}
            >
              {memory}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default AndroidPhone;
