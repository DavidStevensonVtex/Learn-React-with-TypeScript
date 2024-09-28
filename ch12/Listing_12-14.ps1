# Listing 12.14 Running Code Coverage

npm run test -- --coverage --watchAll=false

# ------------------------------|---------|----------|---------|---------|-------------------
# File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
# ------------------------------|---------|----------|---------|---------|-------------------
# All files                     |   57.44 |     62.5 |      60 |   57.77 |                   
#  src                          |       0 |        0 |       0 |       0 |                   
#   App.tsx                     |       0 |        0 |       0 |       0 | 5-14              
#   index.tsx                   |       0 |      100 |     100 |       0 | 7-19
#   reportWebVitals.ts          |       0 |        0 |       0 |       0 | 3-10
#  src/Checklist                |    93.1 |    93.75 |      90 |   92.85 |
#   Checklist.tsx               |     100 |      100 |     100 |     100 |
#   assertValueCanBeRendered.ts |     100 |      100 |     100 |     100 |
#   getNewCheckedIds.ts         |      50 |       50 |      50 |      50 | 9-10
#   index.ts                    |       0 |        0 |       0 |       0 |
#   isChecked.ts                |     100 |      100 |     100 |     100 |
#   types.ts                    |       0 |        0 |       0 |       0 |
#   useChecked.ts               |     100 |      100 |     100 |     100 |
# ------------------------------|---------|----------|---------|---------|-------------------