
cmd /c "npx rimraf .next"
cmd /c "npx rimraf node_modules"

@REM npm i -D
@REM npm run dev

yarn -D
yarn dev
