# Mehaa Eswaran — Personal Portfolio

A responsive single-page portfolio built with HTML5, CSS3 and vanilla JavaScript. The website does not use frontend frameworks.

## Open locally
1. Extract the ZIP file.
2. Open the `profile-website` folder in Visual Studio Code.
3. Open `index.html` in a browser. VS Code Live Server is optional.

## Replace the image placeholders
Replace the SVG placeholders with your own images. You can keep the filenames and overwrite the files, or change the corresponding `src` in `index.html`.

- `images/hero/mehaa-placeholder.svg` — your portrait
- `images/family/family-photo-placeholder.svg` — family photograph
- `images/family/cyrus-placeholder.svg` — separate Cyrus photograph
- `images/interests/` — interest-card artwork
- `images/hobbies/` — hobby artwork

The current SVGs are temporary illustrations, not photographs of you or your family.

## Personalise contact links
In `index.html`, replace `YOUR_EMAIL@example.com`, `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_USERNAME` with your real details before publishing.

## Change the themes
All palette values are centralised in `css/theme.css`. The theme toggle in the header switches between the light and dark palettes; the selected theme is saved in the browser.

## Main files
| Path | Purpose |
|---|---|
| `index.html` | Portfolio content and sections |
| `css/theme.css` | Light and dark theme variables |
| `css/style.css` | Layout, responsive styling, animations |
| `js/main.js` | Theme toggle, mobile navigation, scroll reveals |
| `images/` | Replaceable image assets |
| `.github/workflows/` | GitHub Actions automation |

## Git workflow
Create feature branches instead of committing directly to `main`. Merge reviewed feature branches into `develop`, then create a pull request from `develop` to `main` when the site is ready.

Example:
```bash
git switch develop
git switch -c feature/hero-section
git add .
git commit -m "Build portfolio hero section"
git push -u origin feature/hero-section
```

For theme practice, create branches such as `theme/dark-mode` and `theme/warm-tones`; edit only `css/theme.css`, commit, push and open pull requests.

## GitHub Pages and automation
1. Push the repository to GitHub.
2. Open **Settings → Pages** and select **GitHub Actions** as the source.
3. Merge the deployment-ready version into `main`.
4. The deploy workflow publishes the site.

The included workflows validate HTML/CSS, run pull-request quality checks, deploy to GitHub Pages, run Lighthouse audits, and optionally notify Slack. Set a repository variable `SITE_URL` to your published site URL for Lighthouse. Set a repository secret `SLACK_WEBHOOK_URL` to enable Slack notifications.

Note: the workflows run only after the project is pushed to GitHub and the required repository settings are configured.
