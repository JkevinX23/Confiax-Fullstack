module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'root',
      email: 'admin@email.com',
      contact: '(38) 99951-3227',
      password_hash: '$2y$08$OFvjI341V5GKe9bizJfo6uh78hLDE67b4vqpPzKwccz983ryropk6',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', {email: 'admin@email.com'}, {});
  }
};