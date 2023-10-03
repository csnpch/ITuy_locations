import LayoutPlace from '../components/LayoutPlace';
import { menus } from '../data/menu';
import { routerDict } from '../routes';

export default function Repair() {
    return (
        <>
            <LayoutPlace
                customTitle={`${menus.repair.emoji.slice(2)} ${menus.repair.title}`}
                prevRoute={routerDict.root.path}
                iframe={<>
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1cpCSELrXLCdWsbtwCWIrU7I7YW5oJso&ehbc=2E312F&noprof=1" 
                        className='wh-full' 
                    />
                </>}
            />
        </>
    )
}
