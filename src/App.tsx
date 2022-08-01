import { useState, useEffect } from "react";

import { Loading } from "./Loading";
import { Tours } from "./Tours";

import { ToursData } from "./@types/tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<ToursData[]>([]);

  async function fetchTours() {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
