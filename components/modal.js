import React from 'react'
import style from './modal.module.css'

const Modal = ({isVisible, onClose, content, src, index}) => {
    if(!isVisible) return null;

    return(
        <div className={style.background} onClick = {() => onClose()}>
            <div class="position-absolute top-50 start-50 translate-middle">
                <div className={style.content}>
                    <img src={src} width={300} height={300} style= {{"borderRadius": "10%"}} alt=""/>
                    <div className={style.content_inner}>
                        <div className={style.content_text}>PoG NO.{index}</div>
                        {
                            content.map((i) => {
                                return <div key={index} className={style.content_text}>{i.trait_type}: {i.value}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;