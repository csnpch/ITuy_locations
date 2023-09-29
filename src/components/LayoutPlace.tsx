import { useEffect, useState } from "react";
import { _class } from "../utils/helper";
import Navbar from "./Navbar";
import ReactLoading from 'react-loading';

interface propsInterface {
    customTitle?: string,
    prevRoute?: string,
    children?: React.ReactNode,
    iframe?: React.ReactNode,
}



export default function LayoutPlace(props: propsInterface) {
    
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 1000)
    }, [])
    
    return (
        <>
            <Navbar
                customTitle={props.customTitle} 
                prevRoute={props.prevRoute}
                height={46}
            />

            <div className={_class(`
                ${
                    props.iframe &&
                    'pt-[2.8rem] w-full h-screen-svh overflow-y-hidden'
                }
            `)}>
                { props.children && props.children }
                { props.iframe && props.iframe }
            </div>

            {
                (loading) &&
                <div className={`fixed wh-full top-0 left-0`}>
                    <div className="wh-full flex-center pt-20">
                        <ReactLoading type={'bubbles'} color={'black'} height={'16%'} width={'16%'} />
                    </div>
                </div>
            }
        </>
    )
}