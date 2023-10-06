import { useState } from 'react';
import LayoutPlace from '../components/LayoutPlace';
import { routerDict } from '../routes';
import { _class } from '../utils/helper/index';
import { useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import axios from 'axios';
import { configs } from '../config';


interface dataFormInterface {
    lat_lang: string,
    url_location: string,
    place_name: string,
    place_description: string,
}


const swal = withReactContent(Swal)

export default function AddPlace() {

    const navigate = useNavigate()
    const [stateToggleMode, setStateToggleMode] = useState<'location'|'url'>('location')
    const [dataForm, setDataForm] = useState<dataFormInterface>({
        lat_lang: '',
        url_location: '',
        place_name: '',
        place_description: '',
    })


    const classBtnMode = {
        active: 'bg-indigo-700 h-10',
        hold: 'bg-black/70 text-sm h-8'
    }


    const verifyInput = async () => {
        if (stateToggleMode === 'location') {
            if (dataForm.lat_lang === '') {
                return 'กรุณากรอก Lat, Long สถานที่'
            }
        } else if (stateToggleMode === 'url') {
            if (dataForm.url_location === '') {
                return 'กรุณากรอก URL สถานที่'
            }
        }
        return 'pass'
    }


    const onToggleMode = (mode: 'location'|'url') => {
        setDataForm(prev => ({ ...prev, url_location: '', lat_lang: '' }))
        setStateToggleMode(mode)
    }


    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setDataForm(prev => ({ ...prev, [name]: value }))
    }



    const onSubmit = async () => {
        const resultVerify = await verifyInput()
        if (resultVerify !== 'pass') {
            swal.fire({
                timer: 4000,
                title: <span className='text-lg'>โปรดให้ข้อมูลที่จำเป็นกับเรา</span>,
                html: resultVerify,
                icon: 'error',
                showConfirmButton: false,
            })
            return
        }

        await swal.fire({
            title: <span className='text-lg'>กำลังส่งคำขอเพิ่มสถานที่</span>,
            html: <span>โปรดรอสักครู่,<br />ขอบคุณที่แนะนำสถานที่ให้เรา 🙏🏻</span>,
            allowOutsideClick: false,
            confirmButtonText: 'สำเร็จ, ปิด',
            confirmButtonColor: '#4caf50',
            didOpen: async () => {
                Swal.showLoading()
                
                try {
                    const res = await axios.post(configs.url_sheet_db, dataForm)
                    if (res.status === 201) {
                        Swal.hideLoading()
                        return
                    }
                    throw new Error('ไม่สามารถส่งคำขอได้')
                } catch (err: any) {
                    console.log(err)
                    Swal.close()
                    swal.fire({
                        timer: 2000,
                        icon: 'error',
                        title: <span className='text-lg'>ไม่สามารถส่งคำขอได้</span>,
                        html: <span>โปรดลองใหม่อีกครั้งในภายหลัง</span>,
                        showConfirmButton: false,
                    })
                }
            },
        })
    }


    return (
        <>
            <LayoutPlace
                customTitle={`📌 แนะนำสถานที่ให้เรา`}
                prevRoute={routerDict.root.path}
                disableLoding
                className='xl:w-4/12 mx-auto'

            >
                <div className='space mt-14' />
                <form method='#' action='#' className='px-6 pb-20'>

                    <div className='flex-center gap-4 w-full h-20'>
                        <button 
                            type='button' 
                            className={_class(`
                                duration-200 w-full rounded-md text-white
                                ${stateToggleMode === 'location' ? classBtnMode.active : classBtnMode.hold}
                            `)}
                            onClick={() => onToggleMode('location')}
                        >
                            Position Lat, Lng
                        </button>
                        <button 
                            type='button' 
                            className={_class(`
                                duration-200 w-full rounded-md text-white
                                ${stateToggleMode === 'url' ? classBtnMode.active : classBtnMode.hold}
                            `)}
                            onClick={() => onToggleMode('url')}
                        >
                            URL Location
                        </button>
                    </div>
                    <div className='flex flex-col gap-6 mt-2'>
                        {/* input */}
                        {
                            stateToggleMode === 'location' ? (
                                <div>
                                    <p className='label-input'>📍 ลัทติจูท, ลองติจูท&nbsp;&nbsp;(Lat, Long)</p>
                                    <input 
                                        name='lat_lang'
                                        type="text" 
                                        className='text-sm mt-2 text-input' 
                                        placeholder='12.530264, 164.135242' 
                                        onChange={onChangeInput}
                                    />
                                </div>
                            ) : (
                                <div className='text-sm'>
                                    <p className='label-input'>🔗 ลิ้งสถานที่</p>
                                    <textarea 
                                        name='url_location'
                                        className='mt-2 text-input min-h-[68px] -mb-2' 
                                        placeholder='https://googl.map/aksf1q251s' 
                                        onChange={onChangeInput}
                                    />
                                </div>   
                            )
                        }
                        <div className='text-sm'>
                            <p className='label-input'>ชื่อสถานที่ (ถ้ามี)</p>
                            <input
                                name='place_name'
                                type="text" 
                                className='mt-2 text-input' 
                                placeholder='น้ำเป็นตะลิโตนเด้' 
                                onChange={onChangeInput}
                            />
                        </div>
                        <div className='text-sm'>
                            <p className='label-input'>สถานที่แห่งหนึ่งในประเทศไทย (ถ้ามี)</p>
                            <textarea 
                                name='place_description'
                                className='mt-2 text-input min-h-[68px]' 
                                placeholder='อธิบายบางสิ่งบางอย่างเกี่ยวกับสถานที่นี้'
                                onChange={onChangeInput}
                            />
                        </div>

                        {/* button */}
                        <div className='w-full flex-center flex-col gap-2.5 -mt-2'>
                            <button 
                                type='button' 
                                className='active:bg-blue-800 hover:bg-blue-700 w-full h-12 text-sm text-white tracking-wider bg-blue-600 rounded-lg shadow-md'
                                onClick={onSubmit}
                            >
                                ส่งคำขอเพิ่มสถานที่
                            </button>

                            <button 
                                onClick={() => navigate(routerDict.root.path)}
                                type='button' 
                                className='active:bg-black/80 hover:bg-black/70 w-full h-10 text-sm text-white tracking-wider bg-black/60 rounded-lg shadow-md'
                            >
                                ยกเลิก
                            </button>
                        </div>

                    </div>
                </form>
            </LayoutPlace>
        </>
    )
}
