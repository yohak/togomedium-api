const express = require('express');
const browserSync = require("browser-sync");
const path = require("path");
const { exec } = require("child_process");
const chalk = require('chalk');

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
}

const app = express();
const bs = browserSync.create();

app.use(express.static('src'))
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"))
})
app.listen(expressPort);
bs.watch("./**/*.yaml").on("change", () => {
	validate();
});
bs.init(
	{
		ui: false,
		proxy: `http://localhost:${expressPort}`,
		port: bsPort
	}
);
validate();

