import type { Signal } from "@preact/signals";
import { effect } from "@preact/signals";

interface ChangingTextProps {
    index: Signal<number>;
}

const jobs_arr: string[]=["Data Engineer", "Data Scientist", "Web Developer"];

export default function ChangingTextSignals(props: ChangingTextProps){

    effect(() => {
        const intervalId = setInterval(() => {
            props.index.value = (props.index.value + 1) %3;
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      });

    return(
        <h1 class="text-4xl font-bold">I am a {jobs_arr[props.index.value]}</h1>
    )
}