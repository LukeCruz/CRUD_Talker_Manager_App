function loginRequest(_req, res) {
    let charSet = '';
    const charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789';
    const random = charactersUpper + charactersUpper.toLowerCase() + num;
    for (let i = 0; i < 16; i += 1) {
   charSet += random[Math.floor(Math.random() * charactersUpper.length)];
  }
  const token = charSet;
  res.status(200).json({ token });
}

module.exports = loginRequest;