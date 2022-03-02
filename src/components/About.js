// yimport React, { useState } from 'react'

export default function About() {
    // const [myStyle, setstyle] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: 'black'
    //     })
    // const [btnText, setBtnText] = useState("Enable dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setstyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else {
    //         setstyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }
    return (
        <>
            <div className="container">
                <h1 >About Us</h1>
                <div className="card">
                    <div className="card-body" >
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">As you've probably noticed by now, this translator lets you change your font using Unicode symbols. You can use it to change fonts on your Instagram bio, use fonts on Roblox, change the fonts in your Tweets or Twitter bio - you can even change the font in your Facebook posts to make them stand out more! It's the future, people.

This is a duplicate of my Fancy Text Generator translator because people use a million different search terms to try and find things that help them generate weird Unicode symbols to represent their text. So hopefully this covers a decent chunk of searchers who missed my other translator. I'll keep them updated in sync anyway so you can use whichever one you want :)</p>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={toggleStyle} className="btn btn-primary my-3" >{btnText}</button>
            </div> */}
        </>
    )
}
