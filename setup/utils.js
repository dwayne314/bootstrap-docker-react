const fs = require('fs');
const _ = require('lodash');


class File {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = '';
    };

    read(fileType) {
        const [readFileArgs, transformFunc] = fileType === 'json' ?
            [[this.filePath], JSON.parse] :
            [[this.filePath, 'utf8'], data => data];

        return new Promise((resolve, reject) => {
            fs.readFile(...readFileArgs, (err, data) => {
                if (err) reject(err);
                else {
                    this.data = transformFunc(data);
                    resolve(this.data);
                }
            });
        });
    };

    write(filePath=this.filePath) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, this.data, err => {
                if (err) reject(err);
                else resolve(this.data);
            });
        });
    };
};


class JSONFile extends File {
    constructor(filePath) {
        super(filePath);
    };

    read() {
        return super.read('json');
    };

    jsonify(data) {
        return JSON.stringify(data,  null, 2);
    };

    updateFile() {
        super.write();
    };    
};


class PackageFile extends JSONFile {
    constructor(filePath) {
        super(filePath);
    };

    generateWithNewName(name) {
        this.data = this.jsonify({ ...this.data, name: name });
    };
};


class PackageLockFile extends JSONFile {
    constructor(filePath) {
        super(filePath);
    };

    generateWithNewName(name) {
        this.data = this.jsonify(
            {
                ...this.data,
                name: name,
                packages: {
                    ...this.data.packages,
                    "": {
                        ...this.data.packages[""],
                        name: name
                    }
                }
            });
    };
};

class HTMLFile extends File {
    constructor(filePath) {
        super(filePath);
    };

    read() {
        return super.read('html');
    };

    updateIndexPage(indexPagePath) {
        super.write(indexPagePath);
    }

    generateFromTemplate(templateMapper={}) {
        const compiled = _.template(this.data);
        this.data = compiled(templateMapper);
    };    
};

module.exports = { File, PackageFile, PackageLockFile, HTMLFile };
