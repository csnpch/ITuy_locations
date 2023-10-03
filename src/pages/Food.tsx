import LayoutPlace from '../components/LayoutPlace';
import { menus } from '../data/menu';
import { routerDict } from '../routes';

export default function Food() {
    return (
        <>
            <LayoutPlace
                customTitle={`${menus.food.emoji.slice(2)} ${menus.food.title}`}
                prevRoute={routerDict.root.path}
                iframe={<>
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1GQNeVweNT5-MwztZAn_QaiMkrl1X7HY&ehbc=2E312F&noprof=1"
                        className='wh-full'
                        // disable 2 finger zoom
                        style={{ touchAction: 'none' }}
                    />
                </>}
            />
        </>
    )
}
