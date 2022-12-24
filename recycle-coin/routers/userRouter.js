const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  yeniUserOlustur,
  girisYap,
  oturumAcanKullaniciBilgileri,
  oturumAcanKullaniciyiGuncelle,
  oturumuAcanKullaniciKendiniSil,
  tumUserlariEmaileGoreListele,
  adminUserSilme,
  userKarbonDegeriniGuncelle,
  coinTransferi,
} = require("../controllers/userController");

//Yeni kullanıcı kaydı
router.post("/", yeniUserOlustur);

//Giriş kontrol etme
router.post("/giris", girisYap);

//Oturum açan kullanıcı bilgileri
router.get("/me", authMiddleware, oturumAcanKullaniciBilgileri);

//Oturumu açık olan kullanıcının kendi bilgilerini güncelleyebilmesi için
router.patch("/me", authMiddleware, oturumAcanKullaniciyiGuncelle);

//Oturumu açık kişinin kendi hesabını silmesi için
router.delete("/me", authMiddleware, oturumuAcanKullaniciKendiniSil);

//Adminin tüm userları listelemesi için
router.get(
  "/",
  [authMiddleware, adminMiddleware],
  tumUserlariEmaileGoreListele
);

//Admin idsi girilen user silme
router.delete("/:id", [authMiddleware, adminMiddleware], adminUserSilme);

//admin girilen geri dönüşümü onaylarsa karbon değerini gunceller
router.patch(
  "/:userName",
  [authMiddleware, adminMiddleware],
  userKarbonDegeriniGuncelle
);

//sha adresi girilen kişiye coin transferi
router.patch("/transfer/:sha", authMiddleware, coinTransferi);

module.exports = router;
