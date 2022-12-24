const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniElektronikEkle,
  adminElektronikSil,
  elektronikKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/elektronikController");

router.post("/", yeniElektronikEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminElektronikSil);
router.get("/", [authMiddleware, adminMiddleware], elektronikKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
