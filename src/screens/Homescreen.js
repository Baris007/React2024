
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
import Oda from '../components/Odalar';
import { DatePicker , Space } from 'antd';
const {RangePicker} = DatePicker; 



const Homescreen = () => {



  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  const [error, seterror] = useState()


  const fetchData = async () => {
    try {
      setloading(true)
      const { data } = await axios.get('/api/rooms/getallrooms');
      setrooms(data);
      setloading(false)
    } catch (error) {
      seterror(true)
      console.error(error);
      setloading(false)
    }

  }


  useEffect(() => {
    fetchData()
  }, []);
  /*
  function filterByDate(dates){
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))


  }*/

  /*
  function filterByType(){
    const temprooms = duplicaterooms.filter(room =>room.type.toLowerCase() == e.toLowerCase())
    setrooms(temprooms)
  }


  function filterBySearch(){
    const temprooms = duplicaterooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))
    setrooms(temprooms)
  }
  */
  return (
    <div className='container'>
      <div className='row bs'>
        <div className='col-md-3'>
          <RangePicker format='DD-MM-YYYY' /*onChange={filterByDate}*/></RangePicker>
        </div>
        <div className='col-md-5'>
          <input type='text' className='form-control' placeholder='oda ara' /*value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch}*/></input>

        </div>

        <select className='form-control' /*value={type} onChange={(e)=>{filterByType(e.target.value)}}*/>
          <option value="all">hepsi</option>
          <option value="Cift Kisilik">cift kisilik</option>
          <option value="Tek Kisilik">tek kisilik</option>
          <option value="Aile">aile</option>
        </select>
      </div>


      <div className='row justify-content-center mt-5' >
        {loading ? (<h1>loading...</h1>) : error ? (<h1>Error</h1>) : (rooms.map(room => {
          return <div className='col-md-9 mt-2'>
            <Oda room={room} /*fromdate={fromdate} todate={todate}*/></Oda>
          </div>;
        }))};
      </div>

    </div>
  )
}

export default Homescreen;
