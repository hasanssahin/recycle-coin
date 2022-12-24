const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniBetonEkle,
  adminBetonSil,
  betonKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/betonController");

router.post("/", yeniBetonEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminBetonSil);
router.get("/", [authMiddleware, adminMiddleware], betonKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
