import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { Suspense, useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations.js";
import { Outlet, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import AboutCamper from "../../components/AboutCamper/AboutCamper.jsx";
import CamperInfoNavigation from "../../components/CamperInfoNavigation/CamperInfoNavigation.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import css from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { currentItem } = useSelector(selectCampers);
  const { id } = useParams();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <section className={css.camper}>
      {loading && <Spinner isLoading={loading} />}
      {error && <ErrorMessage error={error} />}
      {currentItem && (
        <div className={css.container}>
          <AboutCamper camper={currentItem} />
          <CamperInfoNavigation />
          <div className={css.secondContainer}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </div>
      )}
      <Toaster position="top-right" containerStyle={{ zIndex: 9999 }} />
    </section>
  );
}
