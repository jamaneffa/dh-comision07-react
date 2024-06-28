import './ContentWrap.css'

import Statistics from "./contentWrap/Statistics";
import NextReleases from "./contentWrap/NextReleases";
import Genres from "./contentWrap/Genres";
import MostPopulars from "./contentWrap/MostPopulars";
import PreSale from "./contentWrap/PreSale";

export default function ContentWrap () {

    return (
        <main className="content-wrap">
            <PreSale/>
            <Statistics/>
            <NextReleases/>
            <MostPopulars/>
            <Genres/>
        </main>
    )
}