import { IconSelector } from '..'
import './CyanHexagon.css'

function CyanHexagon({extra}) {
    return (
        <IconSelector type={"cyanHexagon"} extra={extra ? extra : ""}/>
    )
}

export { CyanHexagon }