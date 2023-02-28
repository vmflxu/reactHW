import InputBar from "./InputBar";


export default function Header({ entireData, entireFunctions }) {

    return (
        <header>
            <InputBar
                entireData={entireData}
                entireFunctions={entireFunctions}
            />
        </header>
    );

}
