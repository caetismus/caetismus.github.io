<#
.SYNOPSIS
  Stages all pending changes, commits, and pushes to origin/main.
  Use this when you want to deploy an immediate update to GitHub Pages.

.USAGE
  .\scripts\push.ps1
  .\scripts\push.ps1 "Fix contact section styling"

.NOTES
  Run from the project root directory.
  Requires git remote 'origin' to be configured.
  GitHub Actions will automatically build & deploy after the push.
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
    $Message   = "chore: push update [$timestamp]"
}

Write-Host ""
Write-Host "==> Staging all changes..." -ForegroundColor Cyan
git add -A

# Only commit if there's something staged
$status = git status --porcelain
if ($status) {
    Write-Host "==> Committing: $Message" -ForegroundColor Cyan
    git commit -m $Message

    if ($LASTEXITCODE -ne 0) {
        Write-Host "==> Commit failed. Aborting push." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "==> Nothing new to commit. Pushing existing HEAD..." -ForegroundColor Yellow
}

Write-Host "==> Pushing to origin/main..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "==> Push successful. GitHub Actions will build and deploy." -ForegroundColor Green
} else {
    Write-Host "==> Push failed. Check git output above." -ForegroundColor Red
    exit 1
}
