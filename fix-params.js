const fs = require('fs');  
const files = [  
  'app/api/contact/[id]/route.ts',  
  'app/api/internship/[id]/route.ts',  
  'app/api/training/[id]/route.ts',  
  'app/api/internship/[id]/status/route.ts',  
  'app/api/training/[id]/status/route.ts'  
];  
files.forEach(file = 
  let content = fs.readFileSync(file, 'utf8');  
