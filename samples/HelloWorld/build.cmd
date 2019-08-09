@ECHO OFF

CALL tsc --project %~dp0..\..\src\tsconfig.json
node %~dp0..\..\src\bin\TSWrangler.js %~dp0tswrangler.json