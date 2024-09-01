import toast from "react-hot-toast";
import { useId } from "react";
import { Field, Form, Formik } from "formik";
import { Wind, CupHot, Diagram3, Display, Droplet, Grid1x2, Grid, Grid3x3Gap, Map } from "react-bootstrap-icons";
import FormButton from "../FormButton/FormButton.jsx";
import { useDispatch } from "react-redux";
import { setFilterParams } from "../../redux/filters/slice.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import { resetPage } from "../../redux/campers/slice.js";

import css from "./FilterForm.module.css";

const initialValues = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

export default function FilterForm() {
  const dispatch = useDispatch();

  const cityFieldId = useId();
  const acFieldId = useId();
  const transmissionFieldId = useId();
  const kitchenFieldId = useId();
  const tvFieldId = useId();
  const bathroomFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(setFilterParams(values));
    dispatch(resetPage());
    dispatch(fetchCampers())
      .unwrap()
      .catch((error) => {
        toast("Sorry, no campers were found matching your criteria.", {
          style: {
            color: "#FFFFFF",
            backgroundColor: "#E44848",
          },
        });
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className={css.formContainer}>
          <label className={css.locationLable} htmlFor={cityFieldId}>
            Location
          </label>
          <Field className={css.locationInput} type="text" name="location" id={cityFieldId} placeholder="City" />
          <Map className={css.mapIcon} size={20} />
          <p className={css.filtersTitlle}>Filters</p>
          <h3 className={css.searchParamsTitle}>Vehicle equipment</h3>
          <ul className={css.equipmentList}>
            <li>
              <label htmlFor={acFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="AC" id={acFieldId} />
                <span data-custom-checkbox="true" className={css.custom}>
                  <Wind className={css.icon} size={32} />
                  AC
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={transmissionFieldId}>
                <Field
                  className={css.visuallyHidden}
                  type="checkbox"
                  name="transmission"
                  id={transmissionFieldId}
                  checked={values.transmission === "automatic"}
                  onChange={() => setFieldValue("transmission", values.transmission === "automatic" ? "" : "automatic")}
                />
                <span className={css.custom}>
                  <Diagram3 className={css.icon} size={32} />
                  Automatic
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={kitchenFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="kitchen" id={kitchenFieldId} />
                <span className={css.custom}>
                  <CupHot className={css.icon} size={32} />
                  Kitchen
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={tvFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="TV" id={tvFieldId} />
                <span className={css.custom}>
                  <Display className={css.icon} size={32} />
                  TV
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={bathroomFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="bathroom" id={bathroomFieldId} />
                <span className={css.custom}>
                  <Droplet className={css.icon} size={32} />
                  Bathroom
                </span>
              </label>
            </li>
          </ul>
          <h3 className={css.searchParamsTitle}>Vehicle type</h3>
          <ul className={css.typeList}>
            <li>
              <label>
                <Field className={css.visuallyHidden} type="radio" name="form" value="panelTruck" />
                <span className={css.custom}>
                  <Grid1x2 className={css.icon} size={32} />
                  Van
                </span>
              </label>
            </li>
            <li>
              <label>
                <Field className={css.visuallyHidden} type="radio" name="form" value="fullyIntegrated" />
                <span className={`${css.custom} ${css.special}`}>
                  <Grid className={css.icon} size={32} />
                  Fully Integrated
                </span>
              </label>
            </li>
            <li>
              <label>
                <Field className={css.visuallyHidden} type="radio" name="form" value="alcove" />
                <span className={css.custom}>
                  <Grid3x3Gap className={css.icon} size={32} />
                  Alcove
                </span>
              </label>
            </li>
          </ul>
          <FormButton>Search</FormButton>
        </Form>
      )}
    </Formik>
  );
}
