import app from "./app";

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
console.log("Hello a todos ");
