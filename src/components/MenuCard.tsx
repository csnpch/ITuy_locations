import { useNavigate } from "react-router"
import { _class } from "../utils/helper"

interface propsInterface {
    emoji?: string
    title: string
    short_description?: string
    backgroundImg?: string
    backgroundPosition?: string
    path?: string
    className?: HTMLElement['className']
}


export default function MenuCard(props: propsInterface) {

    const navigation = useNavigate()


    const handleNavigate = () => {
        if (!props.path) return
        navigation(props.path)
    }


    return (
        <>

            <div 
                className={_class(`
                    relative bg-white rounded-xl w-11/12 mx-auto max-w-[40rem] 
                    h-[10rem] shadow-lg overflow-hidden cursor-pointer hover:shadow-xl duration-200
                    xl:w-full xl:h-[12rem]
                    ${props.className || ''}
                `)}
                onClick={handleNavigate}
            >
                <div className={_class(`
                    absolute z-10 top-0 left-0 wh-full px-[1.1rem] py-2.5 
                    text-xl flex flex-col items-start justify-between
                    ${props.backgroundImg ? 'text-white': ''}
                `)}>
                    <p className={`text-base`}>{ props.emoji }</p>
                    <p className={`text-base tracking-wide xl:font-light`}>{ props.title }</p>
                </div>
                <div className="absolute z-0 top-0 left-0 wh-full bg-gradient-to-t from-black via-transparent to-transparent" />
                {
                    props.backgroundImg && 
                    <img
                        src={props.backgroundImg} 
                        alt="#" 
                        className={_class(`
                            wh-full object-cover 
                            ${
                                props.backgroundPosition || 'object-right'
                            }
                        
                        `)} 
                    />
                }
            </div>

        </>
    )
}