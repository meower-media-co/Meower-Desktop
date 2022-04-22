# Meower Desktop
The Meower Launcher
## Building from Source
To build Meower Desktop from source, first check if you have npm installed by using the following command:
```
npm -v
```
Then, download the source with git, or click on the green "Code" button, then click on "Download .ZIP". `cd` to "Meower-Desktop", then run:
```
npm init
```
To initialize the folder. Install all dependencies, like `electron` by using:
```
npm install
```
Finally, to the buliding part, run:
```
npm run make
```
It'll now make a `.AppImage`, a universal package type for all Linux distros. Now, all you need to do now is to wait for it to `make`!


Now, a `.AppImage` will show up in `out/make/`. `cd` to that location and run `dir` to find the `.AppImage`. Once found, run:
```
chmod a+x ./meower-<latest-version>.AppImage
```
Or:
```
chmod a+x ./out/make/meower-<latest-version>.AppImage
```
Now run the `.AppImage` by using the following command:
```
./meower-<latest-version>.AppImage
```
Or:
```
./out/make/meower-<latest-version>.AppImage
```
Congradulations! You just built and ran Meower Desktop! Or you can get a pre-built `.AppImage` by looking at the "Releases" section.
