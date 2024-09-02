import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import { listData } from "../../lib/rentalData";
import "./List.scss";

export default function List() {
    const data = listData;

    return (
        <div className="list">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {data.map((item) => <Card key={item.id} item={item} />)}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data} />
            </div>
        </div>
    )
}