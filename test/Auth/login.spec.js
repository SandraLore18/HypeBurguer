import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";
import axios from "axios";

describe("all about login", () => {
  const server = setupServer(
    rest.post("/login/:id_user", (request, response, ctx) => {
      const { id_user } = request.params;
      if (id_user === "sandra01") {
        return response(ctx.status(200), ctx.json({ token: "12345" }));
      }
      return response(
        ctx.status(401),
        ctx.json({ message: "Para ingresar debe registrarse" })
      );
    })
  );
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  it("should return a state (200)", async () => {
    const response = await axios.post("/login/sandra01");
    expect(response.status).toBe(200);
    expect(response.data.token).toBe("12345");
  });
  it("should return a state (401)", async () => {
    try {
      await axios.post("/login/sandra");
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.message).not.toBe("12345");
    }
  });
});
