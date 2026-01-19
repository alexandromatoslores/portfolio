import { EmailTemplate } from "@/definitions/contact";
import { contactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDflMutation } from "./use-dfl-mutation";
import { z } from "zod";
import { SendEmail } from "@/services/contact.service";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const defaultValue: EmailTemplate = {
  name: "",
  email: "",
  message: "",
};

const useSendContact = (defaultValues: EmailTemplate = defaultValue) => {
  const { t } = useTranslation("contact");
  const { control, handleSubmit, reset } = useForm<
    z.infer<typeof contactSchema>
  >({
    resolver: zodResolver(contactSchema),
    defaultValues, // 👈 ahora siempre es un objeto con strings vacíos
  });

  const { mutate, error, isLoading, data } = useDflMutation({
    action: async (vals: EmailTemplate) => {
      return await SendEmail(vals);
    },
    onSuccess: async () => {
      toast.success(t("common:successOperation"), {
        description: t("common:sendEmailSuccess"),
        duration: 5000,
      });
      reset(defaultValue);
    },
  });

  return {
    control,
    isLoading,
    data,
    error,
    onSubmit: handleSubmit((values) => mutate(values)),
  };
};


export default useSendContact;
