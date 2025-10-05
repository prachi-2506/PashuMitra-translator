require('dotenv').config();

console.log('🔍 DEBUGGING SENDGRID API KEY\n');

console.log('📋 What we have:');
console.log(`SID (NOT the key): SK9ff77bd2c3928a87f2a71cac74069195`);
console.log(`Secret (This should be the key): ${process.env.SENDGRID_API_KEY}`);
console.log('');

console.log('🔍 Key Analysis:');
console.log(`- Length: ${process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY.length : 'N/A'} characters`);
console.log(`- Starts with 'SG.': ${process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY.startsWith('SG.') : 'No'}`);
console.log('');

console.log('❌ ISSUE IDENTIFIED:');
console.log('Your API key does NOT start with "SG." which is the standard SendGrid format.');
console.log('');

console.log('🚨 POSSIBLE CAUSES:');
console.log('1. You might have copied an incomplete key');
console.log('2. The key might be from a different service');
console.log('3. SendGrid UI might have shown a truncated version');
console.log('');

console.log('🔧 SOLUTIONS TO TRY:');
console.log('');

console.log('OPTION 1: Create a Brand New API Key');
console.log('1. Go to: https://app.sendgrid.com/settings/api_keys');
console.log('2. Click "Create API Key"');
console.log('3. Name: PashuMitra-New');
console.log('4. Permissions: Full Access');
console.log('5. Click "Create & View"');
console.log('6. Copy the COMPLETE key (should start with SG.)');
console.log('');

console.log('OPTION 2: Look for Existing Key');
console.log('1. Go to: https://app.sendgrid.com/settings/api_keys');
console.log('2. Find your "PashuMitra" key');
console.log('3. Click the "..." menu');
console.log('4. Click "View" to see the full key');
console.log('5. Copy the complete key');
console.log('');

console.log('OPTION 3: Try Alternative Email Service');
console.log('If SendGrid continues to have issues, we can use:');
console.log('- Mailgun (also has free tier)');
console.log('- Resend.com (developer-friendly)');
console.log('- Or continue with AWS SES + Gmail account');
console.log('');

console.log('🎯 EXPECTED API KEY FORMAT:');
console.log('SG.1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst');
console.log('   ↑ Should be about 70+ characters long');
console.log('   ↑ Must start with "SG."');
console.log('');

console.log('💡 QUICK TEST:');
console.log('Once you get the correct API key:');
console.log('1. Update .env: SENDGRID_API_KEY=SG.your_new_key_here');
console.log('2. Run: node scripts/test-sendgrid.js');

console.log('\nWhich option would you like to try first?');