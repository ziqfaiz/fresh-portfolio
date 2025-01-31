import { useEffect,useState } from "preact/hooks";

export default function ChangingText() {
  // Array of texts to display
  const [currentIndex, setCurrentIndex] = useState(0);
  const names = ["Data Engineer", "Data Scientist", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = (currentIndex + 1)% (names.length);
      setCurrentIndex(updatedData);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div>
      <h1 class="text-4xl font-bold">I am a {names[currentIndex]}</h1>
    </div>
  );
}
