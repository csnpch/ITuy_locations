import LayoutPlace from '../components/LayoutPlace';
import { menus } from '../data/menu';
import { routerDict } from '../routes';

export default function Cafe() {
    return (
        <>
            <LayoutPlace
                customTitle={`${menus.cafe.emoji.slice(0, 1)} ${menus.cafe.title}`}
                prevRoute={routerDict.root.path}
                iframe={<>
                    <iframe 
                        src="https://www.google.com/maps/d/u/5/embed?mid=16BejvkokHzHykywtUr9T7FVxZmVhaT4&ehbc=2E312F&noprof=1"
                        className='wh-full' 
                    />
                </>}
            />
        </>
    )
}
