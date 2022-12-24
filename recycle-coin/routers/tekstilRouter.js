const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniTekstilEkle,
  adminTekstilSil,
  tekstilKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/tekstilController");

router.post("/", yeniTekstilEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminTekstilSil);
router.get("/", [authMiddleware, adminMiddleware], tekstilKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
