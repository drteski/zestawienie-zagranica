import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { isToday, parseISO } from "date-fns";
import { Input } from "@/components/ui/input";

const CellOrders = ({ data, countryId, accountId, dateStart, dateEnd }) => {
  const [order, setOrder] = useState(() => {
    return data
      .map((order) => (isToday(parseISO(order.createdAt)) ? order.count : 0))
      .reduce((acc, curr) => acc + curr, 0);
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const updateOrders = async (e) => {
    setOrder(e.target.value);
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
      queryClient.invalidateQueries([
        "orders",
        countryId,
        accountId,
        dateStart,
        dateEnd,
      ]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });
  return (
    <Input
      onChange={handleOrders.mutate}
      type="number"
      className="text-center border-0 bg-transparent"
      defaultValue={order}
    />
  );
};

export default CellOrders;
