import "./styles.css";
import searchIcon from "/search.svg";
import optionsIcon from "/options.svg";

export default function DetailsBar({ friendName }) {
    return (
        <div className="details-bar">
            <div className="friend-name">{ friendName }</div>
            <div className="actions">
                <img src={searchIcon}/>
                <img src={optionsIcon}/>
            </div>
        </div>
    )
}