import React from 'react';


const GamePreview = (props) => {
    console.log(props);
    const { msg, theme, img } = props;
    return (
        <section className="container-fluid mt-5">
            <div className="d-flex flex-sm-row flex-column pokerDesc">
                <div className="flex-grow-1 text-center p-5">
                    <p className="">{msg}</p>
                </div>
                <div className="p-5 text-center" id="pokerD2">
                    <p>Theme:</p>

                    <p>{theme}</p>
                </div>
            </div>
            <div className="container-fluid  h-50 w-100 my-5 d-flex justify-content-center pokerShot">
                <img className="img-fluid" src={require(`../../images/${img.toLowerCase()}.png`)} alt="poker.png" width="80%" />
            </div>
        </section>
    )
}

export default GamePreview;
