import { mkdir, copyFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });

const files = [
  "index.html",
  "styles.css",
  "script.js"
];

for (const file of files) {
  await copyFile(file, `dist/${file}`);
}

console.log("Production website created in dist.");
