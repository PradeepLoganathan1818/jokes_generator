import { useState } from "react";
import Button from "./Button.jsx";

export default function Joke()
{
    const[joke,setJoke]=useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    return(<>
    <Button callapi={fetchApi}></Button>
    <p>{joke}</p>
    </>);
}