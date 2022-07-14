 const fs = require('fs').promises;

 const newUser = async (req, res) => {
    const result = await fs.readFile('./talker.json', 'utf-8');
    const { name, age, talk } = req.body;
    const talker = JSON.parse(result);
    const id = talker.length + 1;
    talker.push({ id, name, age, talk });
    await fs.writeFile('./talker.json', JSON.stringify(talker));
    res.status(201).json({ id, name, age, talk });
  };
  
module.exports = newUser;