const readline = require('readline');
const validatePackageName = require("validate-npm-package-name")
const { File, PackageFile, PackageLockFile, HTMLFile } = require('./utils')
const {
    packageLocalPath,
    packageLockLocalPath,
    htmlTemplateLocalPath,
    indexPageLocalPath
} = require('./setup.config.js');


async function updatePackageName(packageName, packagePath, type='package') {
    const packageFile = type === 'package' ? new PackageFile(packagePath) : new PackageLockFile(packagePath);

    try {
        await packageFile.read();
        packageFile.generateWithNewName(packageName);
        await packageFile.updateFile();
    } catch (err) {
        throw new Error(err);
    }
};

async function updateIndexTitle(templateMapper, templatePath) {
    const htmlFile = new HTMLFile(templatePath);

    try {
        await htmlFile.read();
        htmlFile.generateFromTemplate(templateMapper);
        await htmlFile.updateIndexPage(indexPageLocalPath);

    } catch (err) {
        throw new Error(err);
    }
};

function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('What is the new package name? ', newPackageName => {
        const { validForNewPackages, errors=[], warnings=[] } = validatePackageName(newPackageName);

        if (validForNewPackages) {
            rl.question('What is index.html title? ', newTitle => {
                updatePackageName(newPackageName, packageLocalPath);
                updatePackageName(newPackageName, packageLockLocalPath, 'package-lock');
                updateIndexTitle({ title: newTitle }, htmlTemplateLocalPath);
                rl.close();
            });
        } else {
            throw new Error([...errors, ...warnings][0]);
        }
    });
};

main();
