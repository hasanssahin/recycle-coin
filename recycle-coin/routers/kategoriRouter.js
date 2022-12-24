const router = require("express").Router();
const {
  tumKategorileriListele,
  tumCamTurleriniListele,
  tumPlastikTurleriniListele,
  tumKagitTurleriniListele,
  tumPilTurleriniListele,
  tumAluminyumTurleriniListele,
  tumDemirTurleriniListele,
  tumAhsapTurleriniListele,
  tumBetonTurleriniListele,
  tumTekstilTurleriniListele,
  tumElektronikTurleriniListele,
} = require("../controllers/kategoriController");

router.get("/", tumKategorileriListele);
router.get("/camTurleri", tumCamTurleriniListele);
router.get("/plastikTurleri", tumPlastikTurleriniListele);
router.get("/kagitTurleri", tumKagitTurleriniListele);
router.get("/pilTurleri", tumPilTurleriniListele);
router.get("/aluminyumTurleri", tumAluminyumTurleriniListele);
router.get("/demirTurleri", tumDemirTurleriniListele);
router.get("/ahsapTurleri", tumAhsapTurleriniListele);
router.get("/betonTurleri", tumBetonTurleriniListele);
router.get("/tekstilTurleri", tumTekstilTurleriniListele);
router.get("/elektronikTurleri", tumElektronikTurleriniListele);

module.exports = router;
