import fs from "fs/promises";

async function logging(req, res, next) {
  const logMessage = `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`;

  console.log(logMessage);

  try {
    await fs.writeFile("data/logs.txt", logMessage, { flag: "a" }); 
  } catch {
    await fs.writeFile("data/logs.txt", `Logging Error on ${logMessage}`, { flag: "a" }); 
  }

  next();
}

export default logging;
