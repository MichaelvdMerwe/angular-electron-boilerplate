ang-electron-boilerplate

Run Scripts:

1. npm run electron : Runs electron app in devmode
2. npm run electron-aot : builds and runs the application with the --prod flag

Build Scripts: 

1. buildAll : 
2. buildWin64 :
3. buildWin32 :
4. buildLin64 :
5. buildLin32 :
6. buildMac64 :
7. buildMac32 :

"electron": "ng build && electron .",
		"electron-aot": "ng build --prod && electron .",
		"buildAll": "rimraf ang-electron-boilerplate-* && electron-packager ./ --all ",
		"buildWin64": "rimraf ang-electron-boilerplate-* && electron-packager . --platform=win32 --arch=x64",
		"buildWin32": "rimraf angular-electron-boilerplate-* && electron-packager . --platform=win32 --arch=x32 ",
		"buildLin64": "rimraf angular-electron-boilerplate-* && electron-packager . --platform=linux --arch=x64 ",
		"buildLin32": "rimraf angular-electron-boilerplate-* && electron-packager . --platform=linux --arch=x32 ",
		"buildMac64": "rimraf angular-electron-boilerplate-* && electron-packager . --platform=darwin --arch=x64 ",
		"buildMac32": "rimraf angular-electron-boilerplate-* && electron-packager . --platform=darwin --arch=x32 "