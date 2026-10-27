# Version 20: Small text corrections

- Centered Writing Her Rage title across the page.
- Made the full New York restaging sentence use one weight, face, color and size.
- Removed only the Her Rage heading from the Historical Background page, leaving the Historical Background heading and references unchanged.
- Videos remain excluded. See `HOW_TO_ADD_VIDEOS.md` for detailed instructions.

---

# v8 - Bio design correction and local CV

- The Bio page now matches the Squarespace section structure, including an italic About title and horizontal rule, an italic Drifting Artist subtitle, bold serif biography text, centered CV button, and bottom divider.
- The CV button opens `files/Yuwen-Yang-CV.pdf`, copied from the user's uploaded PDF. No Squarespace link is needed.
- Retains the Research page corrections and local 91-page thesis PDF from v6, plus the navigation from v7.
- Only about.html, style.css, README.md and the added CV PDF changed.

Open `about.html` to review, then publish the contents of the extracted folder to GitHub Pages.

# Website v7: navigation correction

Compared against the saved Squarespace header and the provided dropdown screenshot.

- Desktop navigation is larger with the original right-aligned layout spacing (1.5vw between items).
- Removed desktop downward arrow symbols, which were absent in the original.
- Directing and Playwriting menus are now right-aligned to their navigation item, not left-aligned floating cards.
- No dropdown shadow, rounded panel, or separate box treatment.
- Preserved underlining of the active Research link, mouse hover, keyboard and click/tap support.
- Preserved the completed homepage/research page edits, including the local thesis PDF.
- White triangular trial preview X overlay is Squarespace's preview UI, not the published website header, and is intentionally not included.

# Yuwen Yang — Homepage design refinement v4

Changes relative to v3 (only homepage typography/spacing; header and colors unchanged):
- “Hello,” and its horizontal rule now share one row at the top of the introduction column.
- Introduction typography increased to match Squarespace heading scale (approximately 75px at a 1640px viewport, with the original heading's 1.232 line-height and normal letter spacing).
- Introduction column/photo proportions changed to closely follow the archived Squarespace grid (5:6 columns and 8.6vw gap at desktop widths).
- “Recent Work” label made smaller (approximately 26px) and its spacing adjusted to sit below the hero image.
- Kept 10-page site intact and added responsive overrides for mobile/tablet.

For best comparison, open index.html at the same browser width and zoom as the Squarespace screenshots. Exact image/typography alignment may still require a final browser comparison.

---

# Yuwen Yang — Design-matched website v3 (header typography & background)

Changes from v2:
- Sitewide canvas and header background updated to **#E0E0DC**, sampled from the original Squarespace screenshot.
- Header wordmark uses **Cormorant Garamond**, the font specified by the original Squarespace source.
- Navigation uses **EB Garamond Bold**, a freely available alternative to the original site's Adobe Garamond Pro. Adobe Garamond Pro requires separate licensing and may cease working with Squarespace.
- Header title and navigation sizes increased to align with the original typography, while existing page layouts are otherwise preserved.

# Yuwen Yang Portfolio — design-aligned GitHub Pages version (v2)

This rebuild is based on 10 archived Squarespace HTML pages and their locally saved image/resource folders. No Squarespace scripts or Squarespace-dependent URLs are required for its essential display and navigation. Do not assume pixel-for-pixel identity: browser screenshots at desktop and mobile widths are needed for final tuning.

Changes from first draft:
- Restored homepage portrait LEFT / text RIGHT layout, original introductory wording and emphasis.
- Mapped every homepage portfolio photo directly to the correct original project and link.
- Portfolio grid matches original settings: 2 columns, 4:3 images, 34px horizontal and 16px vertical gutters, after-hover centered title and dark overlay of 80% opacity.
- Restored Bio / Research / Directing dropdown / Playwriting dropdown / Stage Managing menu.
- Restored dark contact footer.
- Implemented self-contained arrow-key/clickable 6-item Stage Managing carousel.
- Reused and locally stored archived project photographs; original document headings and main text where recoverable.

Limits:
- Exact Squarespace page geometry (especially project text blocks / video modules) is approximated; Squarespace proprietary JS widgets aren't portable.
- The Contact HTML saved in the uploaded ZIP duplicates the Research page, so this replacement uses the site's footer contact information instead.
- Glass Puppet archive contains no meaningful project-page content; this version only shows the cover and original heading.
- Externally hosted PDFs, videos and some font loading may need handling separately. The Google Fonts versions of the saved font families are used; original Squarespace Adobe font licensing doesn't transfer.

To test: start a local HTTP server (`python3 -m http.server 8000`) in this folder or directly open index.html in a browser. For GitHub Pages: create a public repository named YOURUSERNAME.github.io, upload the files in this folder to repository root, and choose Settings → Pages → Deploy from branch main /(root).

For a closer final match, compare 1440px-wide and 390px-wide screenshots of each page with screenshots of the original Squarespace site, then tune style.css values and re-check image cropping.


## Research page v5
- Restored the original Research introduction typography and divider, including italic thesis heading.
- Restored the centered Thesis PDF button. Its destination currently remains the **original Squarespace-hosted PDF** (`https://contrabass-maracas-nbrn.squarespace.com/s/Senior-Honor-Thesis_Yuwen-Yang_2026.pdf`). You MUST upload the PDF file and change the `href` to a local path (for example, `files/Senior-Honor-Thesis_Yuwen-Yang_2026.pdf`) before cancelling Squarespace. The saved ZIP did not contain this PDF.
- Recreated the three-across archive image row, with original image proportions, a top-aligned layout, and dividers.
- Kept the homepage v4 and all other pages unchanged.


## Research page v6 (2026-10-26)
- Reduced Research introduction and heading font sizes and Thesis button dimensions compared with v5.
- Aligned divider above the archival photo grid with the grid's left and right edges on large screens. The original three-image row remains unchanged.
- Thesis now links to the self-contained local `files/Senior-Honor-Thesis_Yuwen-Yang_2026.pdf` (91 pages; directly included). This no longer relies on Squarespace.
- Supersedes the Research v5 note stating the PDF must still be uploaded.
- Homepage v4 and all other pages were preserved.


## Version 9 corrections

* Research photo gallery has matched 48px gaps above and below, plus balanced 82px section top/bottom padding at desktop size.
* Bio section scaled about 6% smaller and slightly left to match the latest reference, with balanced top/bottom section padding.
* Navigation no longer underlines links on hover; only the current page retains its underline.
* Both `files/Yuwen-Yang-CV.pdf` and `files/Senior-Honor-Thesis_Yuwen-Yang_2026.pdf` remain bundled locally.

## Stage Managing v10
Recreated as a full-width, three-square-photo reel with 22px gaps, visible adjacent images, left-aligned captions, and arrows over the images. No visible page heading; white background as on the original Squarespace page. Other pages unchanged from v9.

The Spring Awakening image was **not** included in the saved Squarespace ZIP. A **temporary cropped image from the screenshot you supplied** is used to avoid an empty card. Replace `assets/stage-managing-spring-awakening-temporary.jpg` with the original high-resolution production photograph when available.


## Fanletter v11 (2026-10-26)
- Recreated full-bleed hero and original staggered two-column photo layout from Squarespace saved HTML.
- Restored previous/next project navigation and the native-video position.
- The video is currently streamed from Squarespace using its original `playlist.m3u8` URL. This is TEMPORARY and may stop working when Squarespace is cancelled.
- To self-host: put the original video at `files/fanletter-performance.mp4`. The website will prefer that file when served via GitHub Pages. The video file is **not** included in this ZIP.
- The poster is a temporary screenshot crop; replace `assets/fanletter-video-poster.jpg` with a clean still frame after obtaining original MP4.


## Version 12: Her Rage and self-hosted videos

- `her-rage.html` now has the full-screen photo, design-sketch captions, two-column production notes, embedded video, and next-project link.
- `videos/fanletter-performance.mp4` and `videos/her-rage-performance.mp4` are both local and ready for GitHub Pages.
- The *Her Rage* source was originally 4K (~304 MB), and was resized to 1080p (~12 MB) to stay under GitHub's 100 MB file limit.
- Clicking the navigation no longer invokes global smooth scrolling, and stable scrollbar space reduces layout movement between pages. Browser page loads can still differ slightly, but the source of the most common CSS shift is removed.
- Preview with a local HTTP server (`python3 -m http.server 8000`) and open `http://localhost:8000/` before publishing, since some browsers restrict video in file:// mode.
- If GitHub Pages seems not to load videos immediately, verify that both files are committed under `/videos/`.


## v14: Playwriting pages

- `her-rage-writing.html` now matches the original two-column writing page and includes a two-card project portfolio.
- `her-rage-new-york.html` is rebuilt from the uploaded Squarespace save, including both original local photographs.
- `historical-background.html` is a **draft** grounded in the background material previously provided. The file labeled `Historical Background ... .html` in the new ZIP contains the Squarespace *editor interface*, not the actual public article. To reproduce its original text precisely, save the public Historical Background page with Chrome File > Save Page As > Webpage, Complete and provide both HTML and resource folder.
- The two Playwriting project images and NY production photos are included locally.
- No MP4 files are included. The placeholders and expected video filenames from v13 are unchanged.


## Website v15 updates
- Historical Background contains the full text supplied by the author and all eleven numbered references, linked from the paragraphs.
- Playwriting project cards display captions under images and lead to their own pages.
- Glass Puppet includes all four original Squarespace photographs in a staggered layout.
- Dropdowns have less vertical offset; Stage Managing uses the site-wide gray background.
- Navigation header waits until web font loading has settled to reduce font-flash/layout shifts during page transitions. No font files are bundled.
- Fanletter and Her Rage video players are still placeholders: see videos/ADD_YOUR_VIDEOS_HERE.txt.


## v16 spacing and alignment changes
Updated Writing Her Rage photo-baseline alignment, Stage Managing carousel top and bottom padding, Historical Background typography and width, centered Her Rage two-column content, New York intro/photos, and symmetric Glass Puppet margins. No video files included.


## v17 changes
- Aranya: full-width festival description and square-cropped portrait photo. Crop preserved all four performers and excludes the original logo strip. Original photo retained in assets.
- Fanletter: title and subtitle positioning harmonized with Her Rage's full-screen hero.
- Homepage: brand navigation uses index.html#site-top and pageshow reset to avoid restoring an earlier scroll position.
- Bio: shifted and narrowed text column to the latest screenshot's margins.
- Her Rage in New York: centered the opening introduction.
- Historical Background: reduced text size (contents and references unchanged).
- MP4 files intentionally excluded; add videos/fanletter-performance.mp4 and videos/her-rage-performance.mp4 later.


### v19 layout corrections

- Centered the Fanletter two-column layout with symmetrical outer margins.
- Reduced top padding and the title weight on the Her Rage in New York page.
- Moved the Her Rage performance video placeholder beneath the final text in the right-hand column; on desktop it aligns to the lower edge of the left-hand photograph when content height permits.
- The video is **not** included. Add `videos/her-rage-performance.mp4` to enable playback; the HTML points to that path already.
