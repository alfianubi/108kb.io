
echo

# Clean directory

echo "[x] Delete old directory"

rm -rf blog

# Build blog

echo "[x] Building blog..."

yarn build

echo "[x] Renaming public directory to blog"

mv public/ blog/

echo "[x] done!"

echo
