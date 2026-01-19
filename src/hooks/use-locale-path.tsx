"use client";
import { usePathname } from "next/navigation";

export const useLocalePath = () => {
  const pathname = usePathname();

  // Extraer el locale actual de la URL (ej: /es/about-me -> "es")
  const pathParts = pathname.split("/").filter(Boolean);
  const locale = pathParts[0] || "es"; // Default a "es" si no hay locale

  // Función para construir URLs respetando el locale actual
  const getLocalePath = (path: string) => {
    // Asegurar que el path empiece con /
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    
    // Remover cualquier locale del inicio del path (ej: /en/resumen -> /resumen)
    const pathWithoutLocale = cleanPath.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
    
    // Retornar con el locale actual (ej: /es + /resumen -> /es/resumen)
    return `/${locale}${pathWithoutLocale}`;
  };

  return { locale, getLocalePath };
};
