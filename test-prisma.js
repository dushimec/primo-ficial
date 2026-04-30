const { prisma } = require('./lib/db/prisma.ts');  
(async () = 
  try {  
    await prisma.$connect();  
    console.log('Connected to database');  
    // Test contact submission  
    const contact = await prisma.contactSubmission.create({  
      data: { name: 'Test', email: 'test@test.com', phone: '123', message: 'Test message' }  
    });  
    console.log('Created contact:', contact.id);  
    // Test training application  
    const training = await prisma.trainingApplication.create({  
      data: { fullName: 'Test Student', email: 'student@test.com', university: 'Test Uni', fieldOfStudy: 'CS', motivationLetter: 'Test motivation' }  
    });  
    console.log('Created training:', training.id);  
    // Clean up  
    await prisma.contactSubmission.delete({ where: { id: contact.id } });  
    await prisma.trainingApplication.delete({ where: { id: training.id } });  
    console.log('Test passed!');  
  } catch (error) {  
    console.error('Error:', error.message);  
  } finally {  
    await prisma.$disconnect();  
  }  
})();  
