import { IconButton } from "@mui/material";
import { JournalLayout } from "@/journal/layout/JournalLayout";
import { NothingSelectedView } from "@/journal/views";
import { AddOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AddNoteModal } from "@/journal/components/AddNoteModal";
import { useState } from "react";

export const JournalPage = () => {
  const { active, isActive } = useSelector((state) => state.journal);
  const { isSideBarOpen } = useSelector((state) => state.sideBar);
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => setModalShow((oldState) => !oldState);
  const closeModal = () => setModalShow((oldState) => !oldState);

  return (
    <JournalLayout>
      <NothingSelectedView
        activeNote={active}
        isActive={isActive}
        isSideBarOpen={isSideBarOpen}
      />

      <IconButton
        size="large"
        onClick={() => openModal()}
        sx={{
          color: "white",
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          backgroundColor: "error.main",
          "&:hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      <AddNoteModal show={modalShow} onHide={() => closeModal()} />
    </JournalLayout>
  );
};
