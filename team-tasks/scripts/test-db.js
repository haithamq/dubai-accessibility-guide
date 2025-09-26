#!/usr/bin/env node

import { testConnection } from '../lib/db/index';

async function testDatabaseConnection() {
  console.log('🔍 Testing PostgreSQL database connection...\n');

  try {
    const isConnected = await testConnection();
    
    if (isConnected) {
      console.log('✅ Database test completed successfully!');
      process.exit(0);
    } else {
      console.log('\n❌ Database test failed!');
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Make sure Docker containers are running: docker-compose up -d');
      console.log('2. Check if PostgreSQL container is healthy: docker-compose ps');
      console.log('3. View container logs: docker-compose logs postgres');
      console.log('4. Wait a few seconds for PostgreSQL to fully start');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Database test failed:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Make sure Docker containers are running: docker-compose up -d');
      console.log('2. Check if PostgreSQL container is healthy: docker-compose ps');
      console.log('3. View container logs: docker-compose logs postgres');
    }
    
    process.exit(1);
  }
}

// Run the test
testDatabaseConnection(); 