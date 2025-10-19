import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);

const filesToCopy = ['manifest.json', 'src', 'icons'];
for (const file of filesToCopy) {
  if (fs.existsSync(file)) {
    const destPath = path.join(dist, file);
    if (fs.lstatSync(file).isDirectory()) {
      fs.cpSync(file, destPath, { recursive: true });
    } else {
      fs.copyFileSync(file, destPath);
    }
  }
}

const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });
archive.pipe(output);
archive.directory(dist, false, (entry) => (entry.name.endsWith('.zip') ? false : entry));
await archive.finalize();

console.log(`Build gerado em 'dist/' e 'dist/extension.zip'.`);