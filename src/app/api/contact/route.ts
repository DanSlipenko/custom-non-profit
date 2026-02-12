export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { name?: unknown; email?: unknown; message?: unknown }
    | null;

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  const emailOk = /^\S+@\S+\.\S+$/.test(email);
  if (name.length < 2) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!emailOk) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return Response.json(
      { error: "Please add a bit more detail to your message." },
      { status: 400 },
    );
  }

  // TODO: Wire this to an email provider (SendGrid/Mailgun/etc.).
  // For now, we simply log the message server-side.
  console.log("[contact]", { name, email, message });

  return Response.json({ ok: true });
}

