import { AiOutlinePlus } from 'react-icons/ai';
import { _class } from '../utils/helper';
import { useNavigate } from 'react-router-dom';
import { routerDict } from '../routes';


export default function FloatingButton() {

    const navigation = useNavigate()

    
    return (
        <>
            
            <div 
                className={_class(`
                    w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 
                    fixed duration-200 cursor-pointer active:brightness-110
                    xl:bottom-10 xl:right-10 bottom-5 right-5 
                `)}
                style={{
                    boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.6)'
                }}
                onClick={() => navigation(routerDict.add_place.path)}
            >
                <div className='text-[1.2rem] w-min h-min absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                    <AiOutlinePlus />
                </div>
            </div>
        
        </>
    )
}