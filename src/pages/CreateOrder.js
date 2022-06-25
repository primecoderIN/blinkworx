import { Button, InputBase, styled, Stack } from "@mui/material";
import Accordian from "../components/Accordian";
import AndroidPhone from "../components/AndroidPhone";
import { useNavigate } from "react-router-dom";
import RicePacket from "../components/RicePacket";
import ApplePhone from "../components/ApplePhone";
import ParleGBiscuit from "../components/ParleGBuscuit";
import { useUserContext } from "../contexts/UserContext";
import ItemTypes from "../components/ItemTypes";
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "8px",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid grey",
  width: "98.3%",
}));

const CreateOrder = () => {
  const { createOrder, handleOrderDescription, newOrder } = useUserContext();
  const navigate = useNavigate();
  return (
    <>
      <Stack direction="row" px={10} py={5}>
        <ItemTypes />

        <Stack flexGrow={1}>
          <Search>
            <InputBase
              onChange={handleOrderDescription}
              fullWidth
              placeholder="Enter order description..."
            />
          </Search>
          {(newOrder?.itemTypes[0]?.itemTypeName === "Electronics" ||
            newOrder?.itemTypes[1]?.itemTypeName === "Electronics") && (
            <Accordian
              ProductName="iPhone 13 Max Pro"
              ProductSubText="This is iPhone"
            >
              <ApplePhone />
            </Accordian>
          )}
          {(newOrder?.itemTypes[1]?.itemTypeName === "Groceries" ||
            newOrder?.itemTypes[0]?.itemTypeName === "Groceries") && (
            <Accordian
              ProductName="Rice Packet"
              ProductSubText="This is rice packet"
            >
              <RicePacket />
            </Accordian>
          )}

          {(newOrder?.itemTypes[0]?.itemTypeName === "Electronics" ||
            newOrder?.itemTypes[1]?.itemTypeName === "Electronics") && (
            <Accordian
              ProductName="Android Phone"
              ProductSubText="This is android phone"
            >
              <AndroidPhone />
            </Accordian>
          )}
          {(newOrder?.itemTypes[1]?.itemTypeName === "Groceries" ||
            newOrder?.itemTypes[0]?.itemTypeName === "Groceries") && (
            <Accordian
              ProductName="Parle G buscuit 70gm"
              ProductSubText="This is parle g buiscuit of 70 gm"
            >
              <ParleGBiscuit />
            </Accordian>
          )}

          <Stack direction="row" mt={2} gap="2rem">
            <Button
              onClick={() => navigate("/orders")}
              fullWidth
              sx={{
                backgroundColor: "orange",
                color: "#fff",
                ":hover": { backgroundColor: "orange", color: "#fff" },
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={newOrder?.itemTypes?.length === 0}
              onClick={createOrder}
              fullWidth
              sx={{
                backgroundColor: "green",
                color: "#fff",
                ":hover": { backgroundColor: "green", color: "#fff" },
                ":disabled": { backgroundColor: "lightgrey", color: "#fff" },
              }}
            >
              Book Order
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CreateOrder;
