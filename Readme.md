[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Build Status](https://dev.azure.com/smack0007/Github/_apis/build/status/smack0007.ChocolateTS?branchName=master)](https://dev.azure.com/smack0007/Github/_build/latest?definitionId=11?branchName=master)

# ChocolateTS

<img align="right" width="160px" height="160px" src="https://github.com/smack0007/ChocolateTS/raw/master/assets/Logo.png">

ChocolateTS is a build script for TypeScript applications based on .NET / MSBuild tooling. It is slightly oppinionated in
that there is a suggested default application structure.

ChocolateTS helps you to "package" your application. It works on the concept of application entry points. There are 3 types
of entry points into your application:

- TypeScript files (default: src/main.ts)
- Scss files (default: src/main.scss)
- Html files (default: src/main.html)

Per default the script assumes there is only one file for each
entry type but your project can be configured to include multiple
files of each type. Each entry point also has an associated
output path:

- main.ts => {ProjectName}.js
- main.scss => {ProjectName}.scss
- main.html => index.html

These default output paths can also be configured in the project.

Each entry point is scanned for imported files and a single
output file is produced per entry point. The syntax for doing
this in TypeScript and SCSS is already part of the language spec
but html files are scanned for `<import src="file.html"></import>` tags. 

## Credits

Adapted logo `Ice Cream` by [Kieu Thi Kim Cuong](https://thenounproject.com/kieukimcuong/) from the Noun Project.

## Author

Zachary Snow aka [smack0007](http://smack0007.github.io).