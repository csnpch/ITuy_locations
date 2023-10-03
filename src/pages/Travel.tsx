import LayoutPlace from '../components/LayoutPlace';
import { menus } from '../data/menu';
import { routerDict } from '../routes';

export default function Travel() {
    return (
        <>
            <LayoutPlace
                customTitle={`${menus.travel.emoji.slice(2)} ${menus.travel.title}`}
                prevRoute={routerDict.root.path}
                iframe={<>
                    <iframe 
                        src="https://www.google.com/maps/d/u/5/embed?mid=14rPSODIoW1FWW9PDSUPCbw4qEDIOYK8&ehbc=2E312F&noprof=1" 
                        className='wh-full' 
                    />
                </>}
            />
        </>
    )
}
