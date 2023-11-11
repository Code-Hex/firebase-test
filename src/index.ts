import { Hono } from "hono";
import {
  VerifyFirebaseAuthConfig,
  verifyFirebaseAuth,
} from "@hono/firebase-auth";

const firebaseConfig: VerifyFirebaseAuthConfig = {
  projectId: "my-project-id",
  //   firebaseEmulatorHost: "127.0.0.1:9099",
};
const app = new Hono();

app.use("/test", verifyFirebaseAuth(firebaseConfig));
app.get("/test", (c) => c.text("Hi!"));

export default app;
