import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <div>
      <Link to={"/events/new/"}>
        <IoMdAddCircle 
          style={{
            width: "50px",
            height: "50px",
            color: "#F0007F",
          }}
        />
      </Link>
    </div>
  )
}

export default AddButton
