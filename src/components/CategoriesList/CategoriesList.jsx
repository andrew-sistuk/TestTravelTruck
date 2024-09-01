import { Wind, CupHot, Diagram3, Display, Droplet, Water, Fire, Snow, FuelPump, UiRadios } from "react-bootstrap-icons";
import CategoriesItem from "../CategoriesItem/CategoriesItem.jsx";

import css from "./CategoriesList.module.css";

export default function CategoriesList({
  camper: { transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water },
}) {
  const categories = {
    transmission,
    engine,
    kitchen,
    AC,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  };

  const iconMap = {
    transmission: Diagram3,
    engine: FuelPump,
    kitchen: CupHot,
    AC: Wind,
    bathroom: Droplet,
    TV: Display,
    radio: UiRadios,
    refrigerator: Snow,
    microwave: Water,
    gas: Fire,
    water: Droplet,
  };

  const data = Object.entries(categories).filter(([key, value]) => value);

  return (
    <ul className={css.categoriesList}>
      {data.map(([key, value]) => {
        const IconComponent = iconMap[key];

        const title = key === "transmission" || key === "engine" ? value : key;

        return (
          IconComponent && (
            <li key={key}>
              <CategoriesItem icon={IconComponent} title={title} />
            </li>
          )
        );
      })}
    </ul>
  );
}
