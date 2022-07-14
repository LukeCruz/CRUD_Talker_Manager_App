const { readFileSync } = require('fs');

class eventError extends Error {
    constructor(message) {
    super(message);
        this.name = 'validation';
    }  
}

const getTalkers = () => {
    try {
        const fileContent = readFileSync('./talker.json', 'utf-8');
        const talkers = JSON.parse(fileContent);
        return talkers;
    } catch (err) { 
        console.log(eventError);
    }
};

module.exports = getTalkers;