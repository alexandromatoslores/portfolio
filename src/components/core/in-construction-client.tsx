"use client";
import { Construction, Clock, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useLocalePath } from "@/hooks/use-locale-path";

type Props = {
  cite: string;
  message: string;
  contact: string;
  contactMe: string;
};

const ClientInConstruction = ({ cite, message, contact, contactMe }: Props) => {
  const { getLocalePath } = useLocalePath();

  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-gradient-to-b  p-4">
      <div className="max-w-md w-full mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <Construction className="h-24 w-24 text-yellow-500" />
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center animate-pulse">
              <Clock className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{cite}</h1>
          <Separator className="h-0.5 bg-primary w-20 mx-auto" />
          <p className="  text-lg">{message}</p>
        </div>

        <Separator className="h-0.5 bg-primary mx-auto w-40" />

        <div className="pt-6  mt-8">
          <p className="text-sm   mb-4">{contact}</p>
          <Link href={getLocalePath("/contact#form")}>
            <Button className="uppercase">
              <Send className="mr-2 h-4 w-4" />
              {contactMe}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientInConstruction;
