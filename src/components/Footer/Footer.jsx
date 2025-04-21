import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 bg-dark text-light'>
      <div className='d-flex justify-content-evenly'>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.49803842571757!2d73.8156318449415!3d18.485080782216425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfde630c887d%3A0x56917e16795b084f!2sFRP8%2B27G%20Pentagon%20Tower%2C%20Sangunabai%20Bhoj%20Path%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1745201197245!5m2!1sen!2sin" width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{borderRadius : "20px"}}></iframe>
        </div>
        <div>
            <h2>Please Contact - 8855663366</h2>
            <h3>Click on Map for Direction</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer