import { GoChevronLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { _class } from '../utils/helper'
import { routerDict } from '../routes'

interface propsInterface {
    customTitle?: string,
    prevRoute?: string,
    height?: number,
}


export default function Navbar(props: propsInterface) {

    const navigation = useNavigate()

    const handleBackRoute = () => {
        if (!props.prevRoute) return
        navigation(props.prevRoute)
    }

    return (
        <>
            <div className={_class(`
                fixed z-50 top-0 left-0 w-full shadow-xl border-b-1 border-black/20
                bg-white flex justify-center items-center
                ${!props.height && 'h-14'}
            `)}
                style={{
                    height: props.height || ''
                }}
            >
                <div className="wh-full grid grid-cols-[2rem_1fr_2rem]">
                    <div className={`flex items-center`}>
                        {
                            props.prevRoute &&
                            <GoChevronLeft 
                                className='text-xl ml-4 cursor-pointer' 
                                onClick={handleBackRoute}
                            />
                        }
                    </div>
                    <div className={`flex-center flex-col`}>
                        <p className={`tracking-wide`}>
                            { props.customTitle || 'สถานที่แนะนำใกล้มอ' }
                        </p>
                        {
                            (props.prevRoute !== routerDict.root.path) &&
                            <p className='text-[0.7rem] -mt-[0.24rem]'>มจพ. ปราจีนฯ</p>
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}
