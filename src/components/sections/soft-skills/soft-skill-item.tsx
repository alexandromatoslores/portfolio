"use client";
import { IAboutMeSoftSkill } from "@/definitions/about-me";
import { useTranslation } from "react-i18next";

export const SoftSkillItem = ({ skill }: { skill: IAboutMeSoftSkill }) => {
  const { t } = useTranslation("about-me");
  return (
    <article className="flex flex-col gap-2 py-2">
      <h3 className="font-bold text-lg">{t(skill?.title)}</h3>
      <p className="font-normal text-md sm:text-sm">
        {t(skill?.description)}
      </p>
    </article>
  );
};
