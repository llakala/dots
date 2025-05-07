# Syncing
```sh
cd ~/Documents/projects
git clone https://github.com/llakala/dots
grm repos sync config --config dots/grm/projects.yml
grm repos sync config --config dots/grm/repos.yml
```

If you don't feel like cloning nixpkgs, make an empty directory called `nixpkgs` in `repos`, and it'll skip it-->

# Updating
```sh
cd ~/Documents/projects/dots/grm
grm repos find local ~/Documents/projects -f yaml > projects.yml
grm repos find local ~/Documents/repos -f yaml > repos.yml
```

