import './tables.css'
function MainPage() {
    return (
        <div>
            <table id="layout_table">
                <tr className="layout_row">
                    <td colSpan={7}><h1>Welcome to my ReactApp</h1></td>
                </tr>
                <tr className="layout_row">
                    <td colSpan={7}><h2>About Me</h2></td>
                </tr>
                <tr className="layout_row">
                    <td colSpan={7}>
                        <article>
                            My name is Kennon Micheal Dong, I am currently 24 years old as of 2022 and my birthday is in Februrary. I was born in British Columbia, 
                            Canada in Burnaby. With my mother's side coming from the Netherlands and my father's side from China, I am the third generation to live in Canada.
                            I have a passion for working with computers.
                        </article>
                    </td>
                </tr>
                <tr className="layout_row">
                    <td colSpan={7}><h2>Languages</h2></td>
                </tr>
                <tr className="layout_row">
                    <td colSpan={7}><h3>High Level Languages</h3></td>
                </tr>
                <tr className="layout_row">
                    <td>C#</td>
                    <td>Java</td>
                    <td>Python</td>
                </tr >
                <tr className="layout_row">
                    <td colSpan={7}><h3>Database Languages</h3></td>
                </tr>
                <tr className="layout_row">
                    <td>SQL</td>
                    <td>SQLite</td>
                    <td>MongoDB</td>
                </tr >
            </table>
        </div>
    );
}

export default MainPage;