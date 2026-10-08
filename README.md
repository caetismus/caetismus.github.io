# James Cubito - Engineering Portfolio

This repository contains the source code for my professional engineering portfolio website. Built with React and tailored for the power sector and electrical engineering industry.

## Tech Stack
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (Automated via GitHub Actions)

## Local Development

To run this project locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`). 
Any changes pushed to the `main` branch will automatically trigger a build process and deploy the static site to the `gh-pages` branch, making the updates live immediately.

To deploy your changes, simply commit and push to `main`:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```
Alternatively, you can use the included PowerShell script: `.\scripts\commit.ps1 "Your message"`.

## Project Structure

- `src/components/` - React UI components grouped by sections and layout.
- `src/data/` - Contains `constants.ts` and `types.ts` where all text, content, and data for the site are stored. Modify `constants.ts` to easily update your portfolio text.
- `public/assets/` - Static files including images and PDF documents (like resumes).
- `.github/workflows/` - CI/CD pipeline for GitHub Pages deployment.
