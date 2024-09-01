import { useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { selectCampers } from "../../redux/campers/selectors.js";
import css from "./Features.module.css";

export default function Features() {
  const { currentItem } = useSelector(selectCampers);

  const { form, length, width, height, tank, consumption } = currentItem;

  const formattedForm = `${form.charAt(0).toUpperCase()}${form.slice(1)}`;

  function modifiedString(string) {
    return string.replace(/(\d)([a-zA-Z])$/, "$1 $2");
  }
  const modifiedLength = modifiedString(length);
  const modifiedWidth = modifiedString(width);
  const modifiedHeight = modifiedString(height);
  const modifiedTank = modifiedString(tank);

  return (
    <div className={css.featuresCamperWrapper}>
      <CategoriesList camper={currentItem} />
      <div>
        <h3 className={css.paramsTitle}>Vehicle details</h3>
        <div className={css.detailsContainer}>
          <ul className={css.featuresNameList}>
            <li>Form</li>
            <li>Length</li>
            <li>Width</li>
            <li>Height</li>
            <li>Tank</li>
            <li>Consumption</li>
          </ul>
          <ul className={css.featuresValueList}>
            <li>{formattedForm}</li>
            <li>{modifiedLength}</li>
            <li>{modifiedWidth}</li>
            <li>{modifiedHeight}</li>
            <li>{modifiedTank}</li>
            <li>{consumption}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
