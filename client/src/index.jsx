import React from 'react';
import ReactDOM from 'react-dom';
import ListingInfo from './listinginfo/dist/index.jsx';
import BookingApp from './booking-info-service-jeff/dist/components/BookingApp.jsx';
import CalendarApp from './calendar-component-kt/client/src/components/CalendarApp.jsx';
import ReviewSection from './reviewList-ak/client/src/components/ReviewSection.jsx';

ReactDOM.render(
  <ListingInfo />,
  document.getElementById('listing-info')
);

ReactDOM.render(
  <BookingApp />, 
  document.getElementById('booking-app')
);

ReactDOM.render(
  <CalendarApp />,
  document.getElementById('calendar-app')
);

ReactDOM.render(
  <ReviewSection />,
  document.getElementById('review-section')
);