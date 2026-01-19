import bcrypt from 'bcryptjs';

const password = 'Admin@123';
const hash = bcrypt.hashSync(password, 10);

console.log('Password Hash:', hash);
console.log('');
console.log('Use this SQL to create the super admin:');
console.log(`INSERT INTO admins (username, passwordHash, name, email, isSuperAdmin, createdAt, updatedAt) VALUES ('superadmin', '${hash}', 'Super Admin', 'admin@illuminious.com', 1, NOW(), NOW());`);
