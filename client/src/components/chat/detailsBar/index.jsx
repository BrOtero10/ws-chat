import "./styles.css";
import searchIcon from "/search.svg";
import optionsIcon from "/options.svg";

export default function DetailsBar({ friendUsername }) {
    return (
        <div className="details-bar">
            <div className="friend-name">{ friendUsername }</div>
            <div className="actions">
                <img src={searchIcon}/>
                <img src={optionsIcon}/>
            </div>
        </div>
    )
}