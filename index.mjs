import express from "express";
import browserSync from "browser-sync";
import path from "path";
import {exec} from "child_process";
import chalk from "chalk";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv;
const expressPort = args[3] ? args[3] : 8080;
const bsPort = args[2] ? args[2] : 4001;

const validate = () => {
  exec("npm run lint", (error, stdout, stderr) => {
    if (error) {
      console.log(chalk.bgRed(error.message));
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(chalk.bgGray(stdout));
  });
  bs.reload();
};

const app = express();
const bs = browserSync.create();

app.use(express.static("src"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(expressPort);
bs.watch("./**/*.yaml").on("change", () => {
  validate();
});
bs.init({
  ui: false,
  proxy: `http://localhost:${expressPort}`,
  port: bsPort,
});
validate();
