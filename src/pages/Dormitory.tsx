import LayoutPlace from '../components/LayoutPlace';
import { menus } from '../data/menu';
import { routerDict } from '../routes';

export default function Dormitory() {
    return (
        <>
            <LayoutPlace
                customTitle={`${menus.dormitory.emoji.slice(2)} ${menus.dormitory.title}`}
                prevRoute={routerDict.root.path}
                iframe={<>
                    <iframe 
                        src="https://www.google.com/maps/d/u/5/embed?mid=1Eo_lzKof3t3Y4P-1k-ZHw9RGqMDsCf4&ehbc=2E312F&noprof=1"
                        className='wh-full'
                        // disable 2 finger zoom
                        style={{ touchAction: 'none' }}
                    />
                </>}
            />
        </>
    )
}
