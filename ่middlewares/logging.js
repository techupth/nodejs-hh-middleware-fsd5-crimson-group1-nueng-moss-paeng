import fs from "fs/promises";

export const logging = async (req, res, next) => {
  try {
    const text = `IP: ${req.ip}, ${req.method}, ${req.originalUrl}`;
    await fs.writeFile("logs.txt", text);
  } catch {
    await fs.writeFile(
      "logs.txt",
      `\n Logging Error on IP:${req.ip}, ${req.method} ${req.originalUrl}`
    );
  }
  next();
};
