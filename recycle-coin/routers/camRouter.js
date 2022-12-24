const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniCamEkle,
  adminCamSil,
  camKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/camController");

router.post("/", yeniCamEkle);

router.delete("/:id", [authMiddleware, adminMiddleware], adminCamSil);

router.get("/", [authMiddleware, adminMiddleware], camKayitListele);

router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);

router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
