const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniPilEkle,
  adminPilSil,
  pilKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/pilController");

router.post("/", yeniPilEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminPilSil);
router.get("/", [authMiddleware, adminMiddleware], pilKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
