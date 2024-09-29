# Listing 12.17 Running Code Coverage

npm run test -- --coverage --watchAll=false

# Results

# ------------------------------|---------|----------|---------|---------|-------------------
# File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
# ------------------------------|---------|----------|---------|---------|-------------------
# All files                     |    65.9 |    66.66 |   66.66 |   66.66 |                   
#  src                          |       0 |        0 |       0 |       0 |                   
#   App.tsx                     |       0 |        0 |       0 |       0 | 5-14              
#   reportWebVitals.ts          |       0 |        0 |       0 |       0 | 3-10              
#  src/Checklist                |     100 |      100 |     100 |     100 |                   
#   Checklist.tsx               |     100 |      100 |     100 |     100 | 
#   assertValueCanBeRendered.ts |     100 |      100 |     100 |     100 | 
#   getNewCheckedIds.ts         |     100 |      100 |     100 |     100 | 
#   isChecked.ts                |     100 |      100 |     100 |     100 | 
#   useChecked.ts               |     100 |      100 |     100 |     100 | 
# ------------------------------|---------|----------|---------|---------|-------------------