import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { ContactFormSchema } from "@/shared/types";

const app = new Hono<{ Bindings: Env }>();

app.post("/api/contact", zValidator("json", ContactFormSchema), async (c) => {
  const { name, email, message } = c.req.valid("json");

  try {
    // Store the contact submission in the database
    await c.env.DB.prepare(
      "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)"
    )
      .bind(name, email, message)
      .run();

    return c.json({ success: true });
  } catch (error) {
    console.error("Error storing contact submission:", error);
    return c.json({ success: false, error: "Failed to store message" }, 500);
  }
});

export default app;
