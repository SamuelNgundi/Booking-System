const Booking = require('../../models/booking');
const { transfromBooking, transformEvent} = require('./merge')
const Event = require('../../models/event');



  module.exports = {
    bookings: async () => {
      try {
        const bookings = await Booking.find();
        return bookings.map(booking => {
          return transfromBooking(booking);
        });
      } catch (err) {
        throw err;
      }
    },
    bookEvent: async args => {
      const fetchedEvent = await Event.findOne({ _id: args.eventId });
      const booking = new Booking({
        user: '64ea4a01b4ae24472a4d0c50',
        event: fetchedEvent
      });
      const result = await booking.save();
      return transfromBooking(result);
    },
    cancelBooking: async args => {
      try {
        const booking = await Booking.findById(args.bookingId).populate('event');
        const event = transformEvent(booking.event);
        await Booking.deleteOne({ _id: args.bookingId });
        return event;
      } catch (err) {
        throw err;
      }
    }
  };