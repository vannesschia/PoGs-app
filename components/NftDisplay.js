import styles from './grid.module.css'

export default function NftDisplay(props){

    return(
        <div class="col" style={{"backgroundColor": "black"}}>
            {/* Image */}
            <img 
            onClick={() => {props.handleClick(true, props.index);}}
            className={`${styles.element} ${props.checkModal ? styles.element : styles.e}`} 
            style= {{"borderRadius": "10%"}}
            src = {props.src}
            alt=""
            width={150}
            height={150}/>
            {/* Text Below */}
            <p className={styles.text}>NO.{props.index}</p>
        </div>
    )
}