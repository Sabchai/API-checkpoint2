
import React from 'react'

const Ul = ({elment:{id, name, username, adresse, email, phone}}) => {
  return (
    <div>
     <li> {name}</li>
     <li> {username} </li>
     <li> {phone}</li>
     <li> {email} </li>
    </div>
  )
}
export default Ul