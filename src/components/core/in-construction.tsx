import { Construction, Clock, Send } from "lucide-react";

import { TFunction } from "i18next";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ClientInConstruction from "./in-construction-client";

type Props = {
  t: TFunction<["translation", ...string[]], undefined>;
};

const InConstruction = ({ t }: Props) => {
  // Traducir los textos en el servidor
  const cite = t("common:construction.cite");
  const message = t("common:construction.message");
  const contact = t("common:construction.contact");
  const contactMe = t("common:contactMe");

  return (
    <ClientInConstruction
      cite={cite}
      message={message}
      contact={contact}
      contactMe={contactMe}
    />
  );
};

export default InConstruction;
