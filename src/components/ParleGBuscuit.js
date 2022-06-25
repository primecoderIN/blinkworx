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

  const { handleCreatedOrder, removeUncheckedItems} = useUserContext();
  useEffect(() => {
    handleCreatedOrder(3, biscuit);
    return ()=>  removeUncheckedItems(3)
  }, [biscuit]);
  return null;
};

export default ParleGBiscuit;
