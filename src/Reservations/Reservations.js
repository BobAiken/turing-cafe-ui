import React from 'react';
import Card from '../Card/Card';


const Reservations = ({reservations}) => {
  const reservationCards = reservations.map(reservation => {
    console.log(reservation)
    return (
      <Card
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      id={reservation.id}
      key={reservation.id}
      />
    )
  })

  return (
    <div className='reservations-container'>
      {reservationCards}
    </div>
  )

}

export default Reservations