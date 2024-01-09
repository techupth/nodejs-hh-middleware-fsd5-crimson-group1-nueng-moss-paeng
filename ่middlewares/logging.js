import fs from "fs/promises";
import path from "path";

export const logging = async (req, res, next) => {
  try {
    const text = `\n IP:${req.ip}, ${req.method} ${req.originalUrl}`;
    const filePath = path.join("data", "logs.txt");
    await fs.writeFile(filePath, text, { flag: "a" });
  } catch {
    // If an error occurs, log it in the "logs.txt" file under the "data" folder
    const errorText = `\n Logging Error on IP:${req.ip}, ${req.method} ${req.originalUrl}`;
    const errorFilePath = path.join("data", "logs.txt");
    await fs.writeFile(errorFilePath, errorText, { flag: "a" });
  }
  next();
};
