import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import About from "../Tabs/About";
const Content  = () => {
    return(
        <Router>
            <div className={"content"}>
                <Route path={"/"}/>
                <Route path={"/about"} component={About} />
            </div>
        </Router>
    );
}
export default Content;