"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Generates a CSV of product package changes over time */
exports.generateCSV = (packageChanges) => {
    const csvData = [['']];
    packageChanges.forEach(packageChange => {
        const firstColumn = csvData[0];
        const currentRow = firstColumn.push(packageChange.date) - 1;
        Object.entries(packageChange.akDeps).forEach(([name, { version }]) => {
            let depColumnIndex = csvData.findIndex(item => item[0] === name);
            if (depColumnIndex === -1) {
                depColumnIndex = csvData.push([name]) - 1;
            }
            // console.log(csvData)
            csvData[depColumnIndex][currentRow] = version;
        });
    });
    for (let i = 0; i < csvData.length; i++) {
        for (let j = 0; j < csvData.length; j++) {
            if (typeof csvData[i][j] !== 'string') {
                // console.log('found empty cell');
                csvData[i][j] = '';
            }
        }
        if (i !== 0 && csvData[0].length < csvData[i].length) {
        }
    }
    const csvStrings = [];
    csvData.forEach(column => {
        if (!column) {
            return;
        }
        for (let rowIndex = 0; rowIndex < csvData[0].length; rowIndex++) {
            const rowItem = column[rowIndex] || '';
            if (typeof csvStrings[rowIndex] !== 'string') {
                csvStrings[rowIndex] = '';
            }
            csvStrings[rowIndex] += `"${rowItem}",`;
        }
    });
    return csvStrings.join('\n');
};
//# sourceMappingURL=generate-csv.js.map