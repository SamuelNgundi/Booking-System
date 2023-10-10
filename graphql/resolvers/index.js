const authResolver = require('./auth');
const eventsResolver = require('./event');
const bookingResolver = require('./bookings');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
};

module.exports = rootResolver;