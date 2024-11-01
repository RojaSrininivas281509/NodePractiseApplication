const https= require('https');
const fs= require('fs');

fs.readFile('./data.json','utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data); // Parse the JSON data
        console.log('File content:', jsonData);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
      
})