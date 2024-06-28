import Statistics from "./content/Statistics";
import NextReleases from "./content/NextReleases";
import Genres from "./content/Genres";
import Popular from "./content/Popular";
import PreSale from "./content/PreSale";

export default function ContentWrap () {
    return (
        <main className="content-wrap">
            <PreSale/>
            <Statistics/>
            <NextReleases/>
            <Popular/>
            <Genres/>
        </main>
    )
}