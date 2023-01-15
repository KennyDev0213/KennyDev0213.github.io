import React from "react";
import "../css/main.css"

const MainPage = () => {

    return (
        <div class="homepage">
            <div class="container">
                <h1>Welcome to my Portfolio</h1>
            </div>
            <div class="container">
                <h2>About Me</h2>
                <article>
                    My full name is Kennon Micheal Dong, I am currently 24 years old as of 2022 and my birthday is in February. 
                    I was born in British Columbia, Canada in Burnaby. 
                    With my mother's side coming from the Netherlands and my father's side from China, I am the third generation to live in Canada. 
                    I have a passion for working with computers and want to use them as a medium to express my creativity. 
                    My dream job or position would be a Game Developer or a Web Developer. Although I may not have much experience, I genuinely want to learn and work with other people who already have experience in the industry.
                    
                </article>
            </div>
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
    )
}

export default MainPage;