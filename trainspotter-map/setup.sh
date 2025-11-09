#!/bin/bash
# setup.sh — create and activate venv, install deps

echo "Setting up environment for Trainspotter-map..."

# Create venv if it doesn’t exist
if [ ! -d ".venv" ]; then
    python3 -m venv .venv
    echo "✅ Virtual environment created."
fi

# Activate
source .venv/bin/activate

# Upgrade pip
pip install --upgrade pip setuptools wheel

# Install dependencies
if [ -f "requirements.txt" ]; then
    pip install -r requirements.txt
fi

echo "✅ Setup complete. Environment is ready!"
