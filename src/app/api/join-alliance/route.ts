export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { name?: unknown; email?: unknown; phone?: unknown; message?: unknown } | null;

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  const emailOk = /^\S+@\S+\.\S+$/.test(email);

  if (name.length < 2) {
    return Response.json({ error: "Пожалуйста, введите ваше имя." }, { status: 400 });
  }
  if (!emailOk) {
    return Response.json({ error: "Пожалуйста, введите корректный email." }, { status: 400 });
  }

  // TODO: Wire this to an email provider (SendGrid/Mailgun/etc.).
  console.log("[join-alliance]", { name, email, phone, message });

  return Response.json({ ok: true });
}
