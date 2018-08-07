import * as React from 'react'
import ShadowBoxing from "shadowboxing"
import { Deck, Slide } from "spectacle"
import createTheme from "spectacle/lib/themes/default"
import Slider from "./Slider"

class App extends React.Component {
    public render() {
        const SLIDES: Slider[] = [
            new Slider((
                <ShadowBoxing level={8} style={{ border: "solid #0000FF", borderRadius: ".25rem", height: "80vh", paddingBottom: "1rem", width: "100%" }}>
                    <div>
                        t
                    </div>
                </ShadowBoxing>
            ), "flex-start flex-start"),
        ]

        const theme = createTheme(
            {
                primary: "#168888",
                secondary: "white"
            },
            {
                primary: "Helvetica",
                secondary: { name: "Droid Serif", googleFont: true, styles: ["400", "700i"] }
            }
        );

        return (
            <Deck theme={theme} transition={["slide"]}>
                {
                    SLIDES.map(
                        (slider, index) => (
                            <Slide align="flex-start flex-start" key={index}>
                                {slider.content}
                            </Slide>
                        )
                    )
                }
            </Deck>
        );
    }
}

export default App;