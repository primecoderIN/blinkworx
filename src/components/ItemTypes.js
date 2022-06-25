import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import { useUserContext } from "../contexts/UserContext";

const ItemTypes = () => {
  const { newOrder, handleCheckbox } = useUserContext();
  return (
    <Stack direction="column" width="15%">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="Electronics"
              checked={
                newOrder?.itemTypes[0]?.itemTypeName === "Electronics" ||
                newOrder?.itemTypes[1]?.itemTypeName === "Electronics"
              }
              onChange={(e) => handleCheckbox(1, "Electronics")}
            />
          }
          label="Electronics"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="Groceries"
              checked={
                newOrder?.itemTypes[1]?.itemTypeName === "Groceries" ||
                newOrder?.itemTypes[0]?.itemTypeName === "Groceries"
              }
              onChange={(e) => handleCheckbox(2, "Groceries")}
            />
          }
          label="Groceries"
        />
      </FormGroup>
    </Stack>
  );
};

export default ItemTypes;
