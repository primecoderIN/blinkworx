import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

const ParleGBiscuit = () => {
  const [biscuit] = useState({
    id: 3,
    itemTypeId: 2,
    itemName: "Parle G Buiscuit 70gm",
    itemDescription: "This is parle g biscuit 70 hm",
    itemSpecifications: null,
  });

  const { handleCreatedOrder } = useUserContext();
  useEffect(() => {
    handleCreatedOrder(3, biscuit);
  }, [biscuit]);
  return null;
};

export default ParleGBiscuit;
