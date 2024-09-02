import Card from "../Card/Card";
import { listData } from "../../lib/rentalData";
import "./ListForProfile.scss";

export default function ListForProfile() {
    return (
        <div className="list">
            {listData.map((item) => <Card key={item.id} item={item} />)}
        </div>
    )
}