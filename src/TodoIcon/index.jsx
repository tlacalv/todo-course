import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg'
import './TodoIcon.css'

const iconTypes = {
    "check": (color)=><CheckSVG fill={color} className='icon-svg' />,
    "delete": (color)=><DeleteSVG fill={color} className='icon-svg' />
}

function TodoIcon({type, color, onClick}) {
    return (
        <span 
            className={`icon-container icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}