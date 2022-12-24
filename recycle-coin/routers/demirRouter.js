const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  yeniDemirEkle,
  adminDemirSil,
  demirKayitListele,
  kisiKayitlari,
  kisiKayitSayisi,
} = require("../controllers/demirController");

router.post("/", yeniDemirEkle);
router.delete("/:id", [authMiddleware, adminMiddleware], adminDemirSil);
router.get("/", [authMiddleware, adminMiddleware], demirKayitListele);
router.get("/:email", [authMiddleware, adminMiddleware], kisiKayitlari);
router.get("/:sha", [authMiddleware, adminMiddleware], kisiKayitSayisi);

module.exports = router;
