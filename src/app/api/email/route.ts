import { emailService } from '@/services/email.service';
import { NextResponse } from 'next/server';

export async function OPTIONS() {
  const response = NextResponse.json({});
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const result = await emailService.sendContactEmail({
      name,
      email,
      message
    });

    if (!result.success) {
      const errorMessage =
        result.error instanceof Error
          ? result.error.message
          : "Error al enviar el email";
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    const id = (result as any)?.data?.id;
    return NextResponse.json({ success: true, id });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Error interno del servidor";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
