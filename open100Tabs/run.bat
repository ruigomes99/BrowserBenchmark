@echo off
for /l %%i in (1,1,100) do (
  echo Tab Count: %%i
  start chrome.exe "https://google.pt"
)