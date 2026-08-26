import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";

const directory = join(process.cwd(), "public", "gallery");
const files = (await readdir(directory)).filter((file) => file.endsWith(".jpg"));

await Promise.all(
  files.map(async (file) => {
    const source = join(directory, file);
    const output = join(directory, `${parse(file).name}.webp`);
    await sharp(source)
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(output);
  }),
);

console.log(`Optimized ${files.length} gallery images.`);
