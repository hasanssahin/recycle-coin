const hataYakalayici = (err, req, res, next) => {
  if (err.code == 11000) {
    res.json({
      mesaj: "Girilen değer daha önce girilmiş",
    });
  }
  if (err.name == "ValidatorError") {
    res.json({
      mesaj: "Hatalı giriş",
    });
  }
  if (err.codeName == "ImmutableField") {
    res.json({
      mesaj: "Bu alan değiştirilemez",
    });
  } else {
    res.json({
      mesaj: err.message,
    });
  }
};

module.exports = hataYakalayici;
