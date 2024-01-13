import fs from "fs/promises";

const logging = async (req, res, next) => {
  try {
    const text = `\nIp: ${req.ip},Method ${req.method},Endpoint ${req.originalUrl}`;
    await fs.appendFile("Logs.txt", text);
  } catch {
    await fs.appendFile(
      "logs.txt",
      `\nlogging Error on IP: ${req.ip} , Method ${req.method},Endpoint ${req.originalUrl}`
    );
  }
  next();
};

export default logging;
