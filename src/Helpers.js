import { toast } from 'react-toastify';

export const notify = () =>
  toast.info(
    'To delete a recipe, right-click on it and then click the delete button',
    {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    }
  );
