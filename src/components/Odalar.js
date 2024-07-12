import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Carousel } from 'antd';
import {Link} from 'react-router-dom';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Odalar({ room }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={room.imageurls[0]} className='smallimg'></img>
      </div>
      <div className='col-md-7'>
        <h1>{room.name}</h1>
        <b><p>Kapasite: {room.maxcount}</p>
          <p>Tel No: {room.phonenumber}</p>
          <p>Oda Türü: {room.type}</p></b>

        <div style={{ float: 'right' }}>
          <Link to={`/book/${room._id}`}>
          <button className='btn btn-primary'>Rezervasyon
          </button>
          </Link>
        </div>

        <Button type="primary" onClick={showModal}>
          İncele
        </Button>
        <Modal title={room.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>{room.imageurls[0]}</h3>
            </div>
            <div>
              <h3 style={contentStyle}>{room.imageurls[1]}</h3>
            </div>
            <div>
              <h3 style={contentStyle}>{room.imageurls[2]}</h3>
            </div>
          </Carousel>
          <p>{room.description}</p>
        </Modal>

      </div>
    </div>
  )

}

export default Odalar