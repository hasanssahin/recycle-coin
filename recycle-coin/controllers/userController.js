const soap = require("soap");
const User = require("../models/userModel");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const client = require("../grpc/client");
const url = "http://localhost:8000/wsdl?wsdl";

const yeniUserOlustur = async (req, res, next) => {
  try {
    const eklenecekUser = new User(req.body);
    soap.createClient(url, function (err, client) {
      if (err) {
        throw err;
      }
      const args = {
        donusecekEmail: req.body.email,
      };
      client.SHA256olusturma(args, async function (err, gelenSonuc) {
        if (err) {
          throw err;
        }
        const gelenSHA256 = gelenSonuc.result;
        eklenecekUser.sha = gelenSHA256;
      });
    });
    const userRequest = {
      email: req.body.email,
    };
    client.generatingUsername(userRequest, (err, data) => {
      if (!err) {
        eklenecekUser.userName = data.userName;
      }
    });
    eklenecekUser.sifre = await bcrypt.hash(req.body.sifre, 10);
    const { error, value } = eklenecekUser.joiValidation(req.body);
    if (error) {
      next(error);
    } else {
      const sonuc = await eklenecekUser.save();
      res.json(sonuc);
    }
  } catch (e) {
    next(e);
  }
};

const girisYap = async (req, res, next) => {
  try {
    const user = await User.girisYap(req.body.email, req.body.sifre);
    const token = await user.generateToken();
    res.json({
      user: user,
      token: token,
    });
  } catch (e) {
    next(e);
  }
};

const oturumAcanKullaniciBilgileri = (req, res) => {
  res.json(req.user);
};

const oturumAcanKullaniciyiGuncelle = async (req, res, next) => {
  if (req.body.hasOwnProperty("sifre")) {
    req.body.sifre = await bcrypt.hash(req.body.sifre, 10);
  }
  const { error, value } = User.joiValidationForUpdate(req.body);
  if (error) {
    next(error);
  } else {
    try {
      const sonuc = await User.findByIdAndUpdate(
        { _id: req.user._id },
        req.body,
        { new: true, runValidators: true }
      );
      if (sonuc) {
        return res.json(sonuc);
      } else {
        return res.json({
          mesaj: "Kullanıcı bulunamadı",
        });
      }
    } catch (e) {
      next(createError(e));
    }
  }
};

const oturumuAcanKullaniciKendiniSil = async (req, res, next) => {
  try {
    const sonuc = await User.findByIdAndDelete({ _id: req.user.id });
    if (sonuc) {
      return res.json({
        mesaj: "Kullanıcı Silindi",
      });
    } else {
      throw createError("Kullanıcı Bulunamadı");
    }
  } catch (e) {
    next(createError(e));
  }
};

const tumUserlariEmaileGoreListele = async (req, res) => {
  const tumUserlar = await User.find({}).sort({ email: -1 });
  res.json(tumUserlar);
};

const adminUserSilme = async (req, res, next) => {
  try {
    const sonuc = await User.findByIdAndDelete({ _id: req.params.id });
    if (sonuc) {
      return res.json({
        mesaj: "Kullanıcı Silindi",
      });
    } else {
      throw createError("Kullanıcı Bulunamadı");
    }
  } catch (e) {
    next(createError(e));
  }
};

const userKarbonDegeriniGuncelle = async (req, res, next) => {
  const bulunanKisi = await User.findOne({ userName: req.params.userName });
  const karbonToplam = bulunanKisi.karbonMiktari + req.body.karbonMiktari;
  const guncellenecekKisi = await User.findOneAndUpdate(
    { userName: req.params.userName },
    { karbonMiktari: karbonToplam },
    { new: true, runValidators: true }
  );

  while (guncellenecekKisi.karbonMiktari >= 10000) {
    guncellenecekKisi.karbonMiktari = guncellenecekKisi.karbonMiktari - 10000;
    guncellenecekKisi.coinMiktari = guncellenecekKisi.coinMiktari + 1;
  }
  const sonuc = await User.findOneAndUpdate(
    { userName: req.params.userName },
    {
      karbonMiktari: guncellenecekKisi.karbonMiktari,
      coinMiktari: guncellenecekKisi.coinMiktari,
    }
  );
  if (sonuc) {
    res.json({
      msg: "Başarıyla sonuçlandı",
    });
  } else {
    res.json({
      msg: "Hata",
    });
  }
};

const coinTransferi = async (req, res, next) => {
  const gonderici = await User.findOne({ sha: req.user.sha });
  if (gonderici) {
    if (gonderici.coinMiktari !== 0) {
      const gondericiBakiye = gonderici.coinMiktari - req.body.gonderilenCoin;
      await User.updateOne(
        { sha: req.user.sha },
        { coinMiktari: gondericiBakiye }
      );
      const alici = await User.findOne({ sha: req.params.sha });
      if (alici) {
        const aliciBakiye = alici.coinMiktari + req.body.gonderilenCoin;
        await User.updateOne(
          { sha: req.params.sha },
          { coinMiktari: aliciBakiye }
        );
      } else {
        return res.json({
          mesaj: "Alıcı sha adresi yanlış",
        });
      }
    } else {
      res.json({
        mesaj: "Coininiz bulunmamaktadır",
      });
    }
  } else {
    return res.json({
      mesaj: "Gönderici sha adresi yanlış",
    });
  }
};

module.exports = {
  yeniUserOlustur,
  girisYap,
  oturumAcanKullaniciBilgileri,
  oturumAcanKullaniciyiGuncelle,
  oturumuAcanKullaniciKendiniSil,
  tumUserlariEmaileGoreListele,
  adminUserSilme,
  userKarbonDegeriniGuncelle,
  coinTransferi,
};
