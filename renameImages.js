const fs = require('fs');
const path = require('path');

const folderPath = '/Users/yusifhuseynli/Desktop/medihelpkorea/public/partners';
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif']; // Add more extensions if needed

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading the folder:', err);
        return;
    }

    let counter = 1;

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
            const oldPath = path.join(folderPath, file);
            const newPath = path.join(folderPath, `partner${counter}${ext}`);
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(`Error renaming file ${file}:`, err);
                } else {
                    console.log(`Renamed ${file} to partner${counter}${ext}`);
                }
            });
            counter++;
        }
    });
});
