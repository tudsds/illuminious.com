#!/bin/bash

# Illuminious Website - Local Preview Script
# Run this script whenever you want to preview the latest changes

echo "🚀 Starting Illuminious Website Local Preview..."
echo ""

# Step 1: Pull latest changes from GitHub
echo "📥 Pulling latest changes from GitHub..."
git pull origin claude/analyze-repo-preview-nf0K3

# Step 2: Install/update dependencies
echo ""
echo "📦 Installing dependencies..."
pnpm install

# Step 3: Start development server
echo ""
echo "✅ Starting development server..."
echo "🌐 Preview will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

pnpm dev

