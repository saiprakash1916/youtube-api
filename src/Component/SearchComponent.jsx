import React, { Fragment, useState } from 'react'

const SearchComponent = ({onTermSubmit}) => {
    let [search, setSearch] = useState({
        term: "",
    });
    let handleChange = e => {
        setSearch({ [e.target.name]: e.target.value });
    };
    // let handleVoice = e => {
    //     window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    //     // eslint-disable-next-line no-undef
    //     let recongation = new SpeechRecognition();
    //     recongation.addEventListener("result", e => {
    //         let transcript = e.results[0][0].transcript.replace();
    //         setSearch({ term: transcript });
    //         e.preventDefault();
    //         handleSubmit();
    //     });
    //     recongation.start();
    // };
    let handleSubmit = e => {
        e.preventDefault();
        onTermSubmit(search.term);
    };
    return (
        <Fragment>
            <section className="Container">
                <div className="container col-md-8 mx-auto my-4">
                    <form onSubmit={handleSubmit}>
                        <span className="bars"><i class="fas fa-bars fa-lg"></i></span>
                        <div>
                            <img src="./logo.png" alt="logo" className="logo"/>
                        </div>
                        <input type="text" name="term" placeholder="Search" value={search.term} onChange={ handleChange}/>
                        <button><span className="search"><i class="fas fa-search"></i></span></button>
                        <span className="microphone" ><i className="fas fa-microphone fa-lg"></i></span>
                        <span className="video"><i className="fas fa-video-plus fa-lg"></i></span>
                        <span className="bell"><i className="fas fa-bell fa-lg"></i></span>
                        <span className="profile"><i className="fas fa-user-circle fa-lg"></i></span>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default SearchComponent
