import Modal from "react-modal";
import React from "react";
import { Input, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { noteFormSchema } from "@/journal/schemas/noteFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormDataDefault } from "@/journal/defaults/noteFormDataDefault";
import { FormInputFeedback } from "@/shared/components";
import { customStyleModal } from "@/journal/defaults/customStyleModal";
import { useDispatch } from "react-redux";
import { postNote } from "@/journal/thunks";

export const AddNoteModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  Modal.setAppElement("#root");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: loginFormDataDefault,
    resolver: yupResolver(noteFormSchema),
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(postNote(data));
    handleClose();
  };

  const handleClose = () => {
    reset();
    onHide();
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      style={customStyleModal}
      contentLabel="Example Modal"
    >
      <div
        className="d-flex w-100 align-items-center"
        style={{ marginBottom: 15 }}
      >
        <h2 style={{ color: "black" }}>Add new note</h2>
      </div>
      <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>Título</InputLabel>
        <Input className="w-100" label="Título" {...register("title")}></Input>
        <FormInputFeedback message={errors.title?.message} />
        <InputLabel className="mt-3">Mensaje</InputLabel>
        <Input className="w-100" label="Mensaje" {...register("body")}></Input>
        <FormInputFeedback message={errors.body?.message} />

        <div className="d-flex w-100" style={{ marginTop: 35 }}>
          <button className="w-50" type="submit">
            Add
          </button>
          <span className="mx-1"></span>
          <button type="button" className="w-50" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};
