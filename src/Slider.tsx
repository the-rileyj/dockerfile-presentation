import { alignType } from "spectacle"

class Slider {
    public align: alignType
    public content: JSX.Element
    public constructor(content: JSX.Element, align?: alignType) {
        if (this.align !== undefined) {
            this.align = align as alignType
        } else {
            this.align = "flex-start flex-start"
        }

        this.content = content
    }
}

export default Slider