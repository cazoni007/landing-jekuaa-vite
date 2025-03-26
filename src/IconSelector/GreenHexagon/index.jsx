import { IconSelector } from '..'
import './GreenHexagon.css'

function GreenHexagon({extra}) {
    return (
        <IconSelector type={"greenHexagon"} extra={extra ? extra : ""}/>
    )
}

export { GreenHexagon }