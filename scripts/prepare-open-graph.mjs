import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const sourcePath = "open_graph_welberth.png";
const outputDirectory = "public";
const outputPath = `${outputDirectory}/open_graph_welberth.jpg`;

await mkdir(outputDirectory, { recursive: true });

await sharp(sourcePath)
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(outputPath);
