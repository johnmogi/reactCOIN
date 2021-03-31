import { NavLink } from "react-router-dom";

export default function HeaderTheme(){
    return (
<div className="header">
    <span className="title">COINS</span> 
    <div className="menu">
                <NavLink to="/home" activeClassName="active-route" exact>Home</NavLink>
                <NavLink to="/coins" activeClassName="active-route" exact>Coins</NavLink>
                <NavLink to="/live" activeClassName="active-route" exact>Live</NavLink>
            </div>

            
</div>
    )
}