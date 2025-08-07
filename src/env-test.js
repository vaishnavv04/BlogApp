// Quick environment test
import conf from './conf/conf.js';

console.log('=== Environment Variables Debug ===');
console.log('appwriteUrl:', conf.appwriteUrl);
console.log('appwriteProjectId:', conf.appwriteProjectId);
console.log('appwriteDatabaseId:', conf.appwriteDatabaseId);
console.log('appwriteCollectionId:', conf.appwriteCollectionId);
console.log('appwriteBucketId:', conf.appwriteBucketId);

// Check if any are empty strings
const emptyValues = Object.entries(conf).filter(([key, value]) => value === '' || value === 'undefined');
if (emptyValues.length > 0) {
    console.error('Empty configuration values:', emptyValues);
} else {
    console.log('✓ All configuration values are set');
}
