import React from "react";
import "../css/main.css"

const MainPage = () => {

    return (
        <div class="homepage">
            <div class="container">
                <h1>Welcome to my ReactApp</h1>
            </div>
            <div class="container">
                <h2>About Me</h2>
                <article>
                    My name is Kennon Micheal Dong, I am currently 24 years old as of 2022 and my birthday is in Februrary. I was born in British Columbia, Canada in Burnaby. With my mother's side coming from the Netherlands and my father's side from China, I am the third generation to live in Canada. I have a passion for working with computers.
                </article>
            </div>
            <div class="container">
                <h2>Languages</h2>
                <div class="container">
                    <h3>High Level Languages</h3>
                    <ul class="display">
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div class="container">
                    <h3>Web Development</h3>
                    <ul class="display">
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                </div>
                <div class="container">
                    <h3>Database Languages</h3>
                    <ul class="display">
                        <li>SQL</li>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div class="container">
                    <h3>Looking to learn!</h3>
                    <ul class="display">
                        <li>Rust</li>
                        <li>C</li>
                        <li>Typescript</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainPage;