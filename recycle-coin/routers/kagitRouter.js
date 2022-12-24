const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  yeniKagitEkle,
  adminKagitSil,
  kagitKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/kagitController");

router.post("/", yeniKagitEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminKagitSil);
router.get("/", [authMiddleware, adminMiddleware], kagitKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
