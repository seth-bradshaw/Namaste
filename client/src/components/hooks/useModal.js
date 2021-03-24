import { useState } from "react";

const useModal = () => {
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);
  return [modalActive, openModal, closeModal];
};

export default useModal;
