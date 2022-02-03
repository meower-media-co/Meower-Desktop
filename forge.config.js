module.exports = {
  packagerConfig: {
    icon: './app/Images/Meower',
    name: 'meower',
    executableName: 'meower',
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
    },
    {
      name: 'electron-forge-maker-appimage',
    },
    {
      name: '@electron-forge/maker-squirrel',
    },
    {
      name: '@electron-forge/maker-zip',
    },
  ],
};
