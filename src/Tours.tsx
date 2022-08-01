import { Tour } from "./Tour";

import { ToursData } from "./@types/tours";

type ToursProps = {
  tours: ToursData[];
};

export function Tours({ tours }: ToursProps) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}
