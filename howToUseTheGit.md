# Git
## start project
git clone https://github.com/menaSami/ecommerce
cd ecommerce/
git config --list

git config --global credential.helper

git config --global user.name "your user"
git config --global user.email youremail@example.com
git config --global github.user "your user"
git config --global github.token "your password"
git config --list

git config user.name "your user"
git config user.email youremail@example.com
cat .git/config


## to pull files
git pull

## to push files
git add *
git commit -m "any commit you want"
git push

## to delete file or folder
git rm -r "folder name" ### some thig like git rm css/* --dry-run ###
git commit -m "any commit you want"
git push
