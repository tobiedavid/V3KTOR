# V3KTOR — Data sources and their terms

V3KTOR's code is AGPL-3.0 and its name is a registered trademark of True Color
Foundation. The word values and corrections inside the app are **not** ours:
they come from published lexical norms, each under its own terms. Anyone who
redistributes, re-hosts or sells a build of V3KTOR inherits every one of these
obligations, not only the AGPL. Check them before you ship.

| Source | Used for | Terms (as published; verify before any commercial use) |
|---|---|---|
| **NRC VAD Lexicon v2.1** — Mohammad, S. M. (2018, updated 2025), NRC | Valence / arousal / dominance of every pool word (English pool; borrowed by the French pool) | Free for research and non-commercial use. **Commercial use requires written permission** from the author (saif.mohammad@nrc-cnrc.gc.ca). |
| **SUBTLEX-US** — Brysbaert, M., & New, B. (2009), *Behavior Research Methods* | English Zipf frequency in WORD_FREQ (length + frequency reading-time correction) | Free for research; cite the paper. |
| **English word prevalence** — Brysbaert, M., Mandera, P., McCormick, S. F., & Keuleers, E. (2019), *BRM* | Share of native speakers who know each word; pool review | Published with the paper (OSF); cite. |
| **Glasgow Norms** — Scott, G. G., Keitel, A., Becirspahic, M., Yao, B., & Sereno, S. C. (2019), *BRM* | Imageability, familiarity, concreteness, age of acquisition; two-routes analysis | Supplementary material of the paper; cite. |
| **Warriner norms** — Warriner, A. B., Kuperman, V., & Brysbaert, M. (2013), *BRM* | Second English crowd for valence / arousal / dominance; disagreement check | Supplementary material of the paper; cite. |
| **English Lexicon Project** — Balota, D. A., et al. (2007), *BRM* | Mean lexical-decision RT, z-score, accuracy; low-accuracy flag and ELP lens | **No published data licence** (checked 25 Oct 2026: site, about page and OSF trial-level data state none; the GPL file on the site covers the website code; re3data lists "Copyrights", registration required). Copyright applies by default. The CC BY-NC 4.0 on the GitHub ELP-annotations copy covers pronunciation/morphology only, not response times. For commercial or standard-setting use, ask permission (elp@artsci.wustl.edu); cite. |
| **French Lexicon Project** — Ferrand, L., New, B., Brysbaert, M., et al. (2010), *BRM* | French lexical-decision RT, z-score, error rate for 491 of 516 French pool words; low-accuracy flag and French ELP-type lens | Published with the paper (FLP.words.csv, lexique.org / BRM supplement); cite. Same default-copyright caution as ELP if no licence is stated on the copy you use. |
| **Lexique 3.83** — New, B., Pallier, C., Brysbaert, M., & Ferrand, L. (2004), *BRM* | French Zipf frequency in WORD_FREQ (index-fr) | **CC BY-SA 4.0** — attribution required; derived frequency tables must stay under the same licence. |
| **FAN — French affective norms** — Monnier, C., & Syssau, A. (2014), *BRM* | French valence / arousal / imageability for 121 pool words; disagreement check (not yet applied to pool values) | Supplementary material of the paper; cite. |
| **wordfreq** (large_fr) — Speer, R. | Early French frequency pass, superseded by Lexique | Code MIT; underlying corpora carry mixed CC licences. No longer shipped in the app. |

## What this means for a fork

- A **research or non-profit** build that keeps the credits intact complies
  with all of the above by citing them.
- A **paid or closed** product cannot ship the current pool as-is: the NRC
  values need written permission, the ELP and FLP columns have no licence at
  all (so default copyright, permission needed), and the Lexique-derived table
  must remain CC BY-SA. Replacing them means collecting
  new norms, which is a research project, not a reskin.
- The AGPL network clause separately requires any hosted version to offer its
  full source to its users.
- "V3KTOR" and the logo may not be used on a modified build without permission
  from True Color Foundation.

## Citing V3KTOR

If you use the instrument or its file format in published work, cite the
repository release (version and commit) and the sources above that your
analysis depends on. Participants' exports stamp the pool and protocol hash;
report them.

*Terms summarized in good faith as of October 2026; the linked originals
govern. This is not legal advice.*
