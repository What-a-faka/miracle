const fs = require('fs');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');

function copyPackageReadme() {
  const packagePath = path.join(ROOT_PATH, 'packages');
  const files = fs.readdirSync(packagePath);
  // copy packages
  files.forEach((dirname) => {
    const readmePath = path.join(packagePath, dirname, 'README.md');
    if (fs.existsSync(readmePath)) {
      fs.writeFileSync(
        path.join(ROOT_PATH, 'docs/packages', `${dirname}.md`),
        fs.readFileSync(readmePath)
      );
    }
  });
}

function copyRootReadme() {
  const from = path.join(ROOT_PATH, 'README.md')
  const target = path.join(ROOT_PATH, 'docs/README.md')
  fs.writeFileSync(target, fs.readFileSync(from))
}

function main() {
  copyPackageReadme()
  copyRootReadme()
}

main()
