import LayoutPlace from '../components/LayoutPlace';
import { menus } from '../data/menu';
import { routerDict } from '../routes';

export default function Services() {
    return (
        <>
            <LayoutPlace
                customTitle={`${menus.services.emoji.slice(6)} ${menus.services.title}`}
                prevRoute={routerDict.root.path}
                iframe={<>
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1xdUfENo4aSPqLP6-kIu_g3WWE63Aj4U&ehbc=2E312F&noprof=1" 
                        className='wh-full'                    
                    />
                </>}
            />
        </>
    )
}
