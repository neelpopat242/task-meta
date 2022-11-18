import React from 'react'
import Carda from './Carda'
import data from '../data/data'
const CardClass = () => {

    const [datas, setdata] = React.useState(data)

    return (
        <div className=''>
        <div className='my-5 py-5' style={{backgroundColor: "white"}} >
            <h3 className='text-center '>
                Classes
            </h3>
            <p className='text-center'>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
            <div className='row'>
                <div className='col-1'>
                </div>
                <div className='col-10'>
                    <div className="row">
                        {
                            datas.map((item) => {
                                return (
                                    <Carda data={item} key={item.ID} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardClass