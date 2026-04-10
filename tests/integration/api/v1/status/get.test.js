test("GET para `api/v1/status` deveria retornar status 200", async () => {
  const host = "http://localhost:3000";
  const api = "/api/v1/status";
  const url = host + api;
  const response = await fetch(url);
  expect(response.status).toBe(200);
});
