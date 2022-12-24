const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniAhsapEkle,
  adminAhsapSil,
  ahsapKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/ahsapController");

//yeni ahsap ekler
router.post("/", yeniAhsapEkle);

//admin eklenen ahsapları onaylamazsa listeden silinir
router.delete("/:id", [authMiddleware, adminMiddleware], adminAhsapSil);

//admin tum ahsapları görebilir
router.get("/", [authMiddleware, adminMiddleware], ahsapKayitListele);

//admin emaili girilen kişinin kayıtlarını listeler
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);

//admin sha adresi girilen kişi kaç ahsap kayıt ettiğini görebilir
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
