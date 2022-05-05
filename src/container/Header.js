import {Link} from "react-router-dom"
const Header = () =>{
    return <div className="ui pointing menu"style={{padding:"4px 30px"}}>
      <Link to="/">
          <a className="item active">
             Shopping panel
          </a>
      </Link>
        <div className="right menu">
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                    Shop
                </div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
            </div>
        </div>
    </div>
};

export default Header;