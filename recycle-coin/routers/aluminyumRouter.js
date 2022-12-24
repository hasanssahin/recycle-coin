const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniAluminyumEkle,
  adminAluminyumSil,
  aluminyumKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/aluminyumController");

router.post("/", yeniAluminyumEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminAluminyumSil);
router.get("/", [authMiddleware, adminMiddleware], aluminyumKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
