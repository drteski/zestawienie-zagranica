import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { isToday, parseISO } from "date-fns";
import { Input } from "@/components/ui/input";

const CellMails = ({ data, countryId, accountId, dateStart, dateEnd }) => {
  const [mail, setMail] = useState(() => {
    return data
      .map((mail) => (isToday(parseISO(mail.createdAt)) ? mail.count : 0))
      .reduce((acc, curr) => acc + curr, 0);
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const updateMails = async (e) => {
    setMail(e.target.value);
    return await axios
      .post("/api/mails", {
        countryId,
        accountId,
        count: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleMails = useMutation({
    mutationFn: updateMails,
    onSuccess: (res) => {
      queryClient.invalidateQueries([
        "mails",
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
      onChange={handleMails.mutate}
      type="number"
      className="text-center border-0 bg-transparent"
      defaultValue={mail}
    />
  );
};

export default CellMails;
