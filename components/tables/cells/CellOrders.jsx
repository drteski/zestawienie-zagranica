"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import useInitialState from "@/hooks/useInitialState";
import { useClickAway } from "@uidotdev/usehooks";

const CellOrders = ({ data, countryId, accountId }) => {
  const [check, setCheck] = useState(0);
  const [order, setOrder] = useInitialState(data, countryId, accountId);
  const [open, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateOrders = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setOrder(parseInt(e.target.value));
    return await axios
      .post("/api/orders", {
        countryId,
        accountId,
        count: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleOrders = useMutation({
    mutationFn: updateOrders,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["allorders"]);
      if (res)
        toast({
          title: `${res.message}`,
        });
    },
  });

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();
    e.stopPropagation();
  };

  return (
    <>
      <span
        className={`${!open ? "block" : "hidden"}`}
        onClick={() => setIsOpen(true)}
      >
        {order}
      </span>
      <Input
        ref={ref}
        onFocus={(e) => setCheck(parseInt(e.target.value))}
        onBlur={handleOrders.mutate}
        type="number"
        className={`text-center border-0 bg-transparent ${
          open ? "block" : "hidden"
        }`}
        defaultValue={order}
        onWheel={numberInputOnWheelPreventChange}
        pattern="/^\d+$/"
      />
    </>
  );
};

export default CellOrders;
