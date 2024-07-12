import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Bookingscreen({ march }) {
    /*const [loading, setloading] = useState();
    const [error, seterror] = useState();
    const [room, setrooms] = useState();
    const fetchData = async () => {
        try {
            setloading(true)
            const data = await axios.get('/api/rooms/getroombyid', { roomid: march.params.roomid }).data;
            setrooms(data);
            setloading(false);
        } catch (error) {
            seterror(true)
            setloading(false)
        }

    }
    useEffect(() => {
        fetchData()
    }, []);

*/
    return (
        <div>
            <div>
                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-5'>
                        <h1>Tek Kişilik Hotel Odası</h1>
                        <img src={"https://nurteks.com.tr/wp-content/uploads/2019/06/otel-halisi-nurteks1.jpg"} className='bigimg'></img>
                    </div>
                    <div className='col-md-5'>
                        <div style={{textAlign:'right'}}>

                            <h1>Detaylar</h1>
                            <hr />
                            <p>Ad: baris </p>
                            <p>Şu Tarihten:  </p>
                            <p>Bu Tarihe:  </p>
                            <p>Toplam Kişi: 1 </p>

                        </div>
                        <div style={{textAlign:'right'}}>
                            <h1>Miktar</h1>
                            <hr/>
                            <p>Toplam Gün: 1 </p>
                            <p>Gün Başı Fiyat: 500</p>
                            <p>Toplam Fiyat: 500 </p>
                        </div>
                        <div style={{float: 'right'}}>
                            <button className='btn btn-primary'>Öde</button>

                        </div>

                    </div>

                </div>



            </div>)

        </div>
    )
}

export default Bookingscreen