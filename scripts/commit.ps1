<#
.SYNOPSIS
  Stages all changes, commits them, and automatically pushes to GitHub to trigger
  the GitHub Pages deployment.

.USAGE
  .\scripts\commit.ps1
  .\scripts\commit.ps1 "Update hero section layout"

.MANUAL_INSTRUCTIONS
  If you prefer to manually push changes to GitHub (which triggers the site update),
  you can run the following commands in your terminal:
  
  1. git add .
  2. git commit -m "Your commit message"
  3. git push origin main

.NOTES
  Run from the project root directory.
  Requires git remote 'origin' to be configured.
#>

param(
    [string]$Message = ""
)

# Ensure we're running from the repo root
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

# Build commit message
if ($Message -eq "") {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    $Message   = "chore: update portfolio [$timestamp]"
}

Write-Host ""
Write-Host "==> Staging all changes..." -ForegroundColor Cyan
git add -A

# Check if there is anything to commit
$status = git status --porcelain
if ($status) {
    Write-Host "==> Committing: $Message" -ForegroundColor Cyan
    git commit -m $Message

    if ($LASTEXITCODE -ne 0) {
        Write-Host "==> Commit failed. Aborting push." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "==> Nothing new to commit. Proceeding to push existing HEAD..." -ForegroundColor Yellow
}

Write-Host "==> Pushing to origin/main (Deploying to GitHub Pages)..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "==> Push successful. GitHub Actions will now build and update your live site!" -ForegroundColor Green
} else {
    Write-Host "==> Push failed. Check git output above." -ForegroundColor Red
    exit 1
}
