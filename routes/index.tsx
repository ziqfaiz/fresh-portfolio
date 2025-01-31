import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import ChangingText from "../islands/ChangingText.tsx";
import ChangingTextSignals from "../islands/ChangingTextSignals.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/rb_5958.png"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">I'm Haziq. Nice to meet you.</h1>

        <Counter count={count} />
        <ChangingText></ChangingText>
    
      </div>
    </div>
  );
}
