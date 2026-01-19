'use server';
import { headers } from "next/headers";

export const downloadCV = async (locale: string) => {
  try {
    const h = await headers();
    const protocol = h.get("x-forwarded-proto") || "http";
    const host = h.get("x-forwarded-host") || h.get("host");

    if (!host) {
      throw new Error("No se pudo determinar el host para generar el PDF");
    }

    const origin = `${protocol}://${host}`;

    const response = await fetch(`${origin}/api/generate-cv-pdf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        locale
      })
    });

    if (!response.ok) {
      throw new Error('No se pudo generar el PDF');
    }

    // Devolver el blob para que el cliente lo maneje
    return {
      success: true,
      blob: await response.blob(),
      filename: response.headers.get('Content-Disposition')?.match(/filename="(.+)"/)?.[1] || 'cv.pdf'
    };
  } catch (error) {
    console.error('Error al descargar el CV:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }
};
