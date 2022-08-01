import { Tour } from "./Tour";

import { ToursData } from "./@types/tours";

type ToursProps = {
  tours: ToursData[];
  removeTour: (id: string) => void;
};

export function Tours({ tours, removeTour }: ToursProps) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}
