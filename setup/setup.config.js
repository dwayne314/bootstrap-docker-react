const path = require('path');


const setupConfig = {
    packageLocalPath: path.resolve(__dirname, '../package.json'),
    packageLockLocalPath: path.resolve(__dirname, '../package-lock.json'),
    htmlTemplateLocalPath: path.resolve(__dirname, './html_template.html'),
    indexPageLocalPath: path.resolve(__dirname, '../src/index.html')
};

module.exports = setupConfig;
