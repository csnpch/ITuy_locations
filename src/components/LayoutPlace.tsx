import { useEffect, useState } from "react";
import { _class } from "../utils/helper";
import Navbar from "./Navbar";
import ReactLoading from 'react-loading';

interface propsInterface {
    customTitle?: string,
    prevRoute?: string,
    children?: React.ReactNode,
    iframe?: React.ReactNode,
    refContainerIframe?: React.MutableRefObject<HTMLDivElement>,
    disableLoding?: boolean,
    className?: HTMLElement['className']
}



export default function LayoutPlace(props: propsInterface) {
    
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            document.querySelector('.h-screen-svh')?.classList.add('h-screen-svh-iframe-map')
            document.querySelector('.h-screen-svh')?.scrollTo(0, 0)
        }, 800)

        if (props.disableLoding) return
        setLoading(true)
        setTimeout(() => setLoading(false), 1000)
    }, [document])
    
    
    return (
        <>
            <Navbar
                customTitle={props.customTitle} 
                prevRoute={props.prevRoute}
                height={46}
            />

            <div className={_class(`
                ${props.className || ''}
                ${
                    props.iframe &&
                    'relative pt-[2.8rem] w-full h-screen-svh'
                }
            `)}>
                {/* <div className="p-4 bg-black text-white absolute top-10 left-10" onClick={onClickToggleLocationList}>Open List</div> */}
                { props.children && props.children }
                { props.iframe && props.iframe }
            </div>

            {
                (loading) &&
                <div className={`fixed wh-full top-0 left-0`}>
                    <div className="wh-full flex-center pt-4">
                        <ReactLoading type={'bubbles'} color={'black'} height={'4rem'} width={'4rem'} />
                    </div>
                </div>
            }
        </>
    )
}