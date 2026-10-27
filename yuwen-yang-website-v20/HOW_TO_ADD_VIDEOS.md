# How to add your videos

The website does not contain MP4 files. Its video players and preview images are already configured.

## Filenames and destinations

- Fanletter: `videos/fanletter-performance.mp4`
- Her Rage (Directing): `videos/her-rage-performance.mp4`

The `videos` folder is already in this website directory. Keep the names **exactly** as written. On GitHub Pages, names are case-sensitive.

## Add videos on a Mac

1. Unzip this website ZIP in Finder. Open the `yuwen-yang-website-v20` folder.
2. Open `videos` inside it.
3. Locate your Fanletter MP4, then copy it (Command+C) and paste it into `videos` (Command+V).
4. Rename that copied file to `fanletter-performance.mp4`.
5. Copy your Her Rage MP4 into the same folder and rename it to `her-rage-performance.mp4`.
6. You should now have `videos/fanletter-performance.mp4` and `videos/her-rage-performance.mp4`.
7. To test locally, open Terminal and run `cd `, drag your website folder into the Terminal window to insert its path, press Return, then run `python3 -m http.server 8000`. Open `http://localhost:8000/fanletter.html` and `http://localhost:8000/her-rage.html`. Use Control+C to stop the server. If Python is not available, you can test after publishing via GitHub Pages.

## Upload to GitHub Pages

Upload the **contents** of this folder (including `index.html`, assets, PDFs, and videos) to the root of your GitHub Pages repository; do not upload only the outer folder. You can use GitHub's Add file → Upload files flow for small batches.

GitHub blocks individual files larger than 100 MB via normal Git uploads. Compress large MP4s, preferably H.264 video + AAC audio (e.g., a 1080p export), before uploading. Don't upload the original 4K Her Rage file if it exceeds the limit. For media that can't be compressed small enough, use a separate video hosting service and update the video `src`.

The player will continue displaying a poster image until a video is loaded. If your video doesn't play, verify the exact filename, extension, and location in `videos/`.
