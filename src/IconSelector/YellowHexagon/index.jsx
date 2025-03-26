import { IconSelector } from '..'
import './YellowHexagon.css'

function YellowHexagon({extra}) {
    return (
        <IconSelector type={"yellowHexagon"} extra={extra ? extra : ""}/>
    )
}

export { YellowHexagon }