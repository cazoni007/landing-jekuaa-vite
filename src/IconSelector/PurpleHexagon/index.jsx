import { IconSelector } from '..'
import './PurpleHexagon.css'

function PurpleHexagon({extra}) {
    return (
        <IconSelector type={"purpleHexagon"} extra={extra ? extra : ""}/>
    )
}

export { PurpleHexagon }