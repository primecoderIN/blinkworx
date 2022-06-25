import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

const ApplePhone = () => {
  const [phone, setPhone] = useState({
    id: 1,
    itemTypeId: 1,
    itemName: "iPhone 13 Max Pro",
    itemDescription: "This is iPhone",
    itemSpecifications: {
      memory: "512GB",
      colorChoice: true,
      color: "RED",
    },
  });
  const { handleCreatedOrder, removeUncheckedItems } = useUserContext();

  useEffect(() => {
    handleCreatedOrder(1, phone);
    return ()=>  removeUncheckedItems(1)
  }, [phone]);

  const selectPhoneMemory = (memory) => {
    setPhone({
      ...phone,
      itemSpecifications: { ...phone.itemSpecifications, memory },
    });
  };

  const selectColor = (color) => {
    setPhone({
      ...phone,
      itemSpecifications: { ...phone.itemSpecifications, color },
    });
  };

  const changeColorChoice = (choice) => {
    setPhone({
      ...phone,
      itemSpecifications: { ...phone.itemSpecifications, colorChoice: choice },
    });
  };

  const memoryTypes = ["128GB", "256GB", "512GB", "1024GB"];
  const availableColors = ["RED", "GREEN", "BLUE"];
  return (
    <>
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
                    phone.itemSpecifications.memory === memory
                      ? "blue"
                      : "black",
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
      <Stack direction="row" alignItems="center" width="50%">
        <Typography flexGrow={1}>Do you want to choose color?</Typography>
        <Stack direction="row">
          <Button
            onClick={() => changeColorChoice(true)}
            sx={{
              color: phone.itemSpecifications.colorChoice ? "blue" : "black",
              borderBottom: `1px solid ${
                phone.itemSpecifications.colorChoice ? "blue" : "transparent"
              }`,
            }}
          >
            YES
          </Button>
          <Button
            onClick={() => changeColorChoice(false)}
            sx={{
              color: !phone.itemSpecifications.colorChoice ? "blue" : "black",
              borderBottom: `1px solid ${
                !phone.itemSpecifications.colorChoice ? "blue" : "transparent"
              }`,
            }}
          >
            NO
          </Button>
        </Stack>
      </Stack>
      {phone.itemSpecifications.colorChoice && (
        <Stack direction="row" mt={1} alignItems="center" width="50%">
          <Typography flexGrow={1}> Please choose color</Typography>
          <Stack direction="row">
            {availableColors.map((color) => {
              return (
                <Button
                  key={color}
                  onClick={() => selectColor(color)}
                  sx={{
                    backgroundColor:
                      phone.itemSpecifications.color === color
                        ? "blue"
                        : "transparent",
                    border: `1px solid ${
                      phone.itemSpecifications.color === color
                        ? "blue"
                        : "transparent"
                    }`,
                  }}
                >
                  {color}
                </Button>
              );
            })}
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default ApplePhone;
