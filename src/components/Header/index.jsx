export default function Header() {
    return (
        <>
            <div>
                <h2></h2>
            </div>
            <div>
                <fieldset>
                    <legend>Saison</legend>
                    <input id="springSummer" type="checkbox" name="season" value="springSummer" checked></input><label htmlFor="springSummer">Printemps/Éte</label>
                    <input id="autumnWinter" type="checkbox" name="season" value="autumnWinter" checked></input><label htmlFor="autumnWinter">Automne/Hiver</label>
                </fieldset>
            </div>
        </>
    )
}