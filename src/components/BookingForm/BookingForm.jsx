import { Controller, useForm } from 'react-hook-form';
import css from './BookingForm.module.css';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function BookingForm() {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: null,
    },
  });

  const onSubmit = data => {
    toast.success('Form submitted successfully!');
    console.log(data);
    reset();
  };

  const handleDateChange = date => {
    const today = new Date();
    if (date < today) {
      toast.error('Cannot select a past date!');
      setValue('date', null); // Reset date if invalid
    } else {
      setValue('date', date); // Set valid date
    }
  };
  return (
      <div className={css.formDetails}>
        <h3 className={css.h3_form}>Book your campervan now</h3>
        <p className={css.p__form}>
          Stay connected! We are always ready to help you.
        </p>
        <form className={css.formByUser} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name' className={css.labelForm}>
            <input
                type='text'
                name='name'
                id='name'
                placeholder='*Name'
                className={css.inputForm}
                {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
                <span className={css.error}>{errors.name.message}</span>
            )}
          </label>
          <label htmlFor='email' className={css.labelForm}>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='*Email'
                className={css.inputForm}
                {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
                <span className={css.error}>{errors.email.message}</span>
            )}
          </label>
          <label htmlFor='date' className={css.labelForm}>
            <Controller
                control={control}
                name='date'
                rules={{ required: 'Date is required' }}
                render={({ field }) => (
                    <DatePicker
                        selected={field.value}
                        onChange={date => handleDateChange(date)}
                        placeholderText='*Booking date'
                        dateFormat='yyyy-MM-dd'
                        className={css.inputForm}
                    />
                )}
            />
            {errors.date && (
                <span className={css.error}>{errors.date.message}</span>
            )}
          </label>
          <textarea
              name='comment'
              id='comment'
              placeholder='comment'
              className={css.textarea}
              {...register('comment')}
          ></textarea>
          <button type='submit' className={css.formBtn}>
            Send
          </button>
        </form>
      </div>
  );
}
