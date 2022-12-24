const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniPlastikEkle,
  adminPlastikSil,
  plastikKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/plastikController");

router.post("/", yeniPlastikEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminPlastikSil);
router.get("/", [authMiddleware, adminMiddleware], plastikKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
