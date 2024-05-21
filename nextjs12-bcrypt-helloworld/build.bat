rmdir /s /q .next
rmdir /s /q node_modules

call yarn
call yarn build
call yarn start
