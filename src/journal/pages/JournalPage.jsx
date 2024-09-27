import { IconButton } from "@mui/material";
import { JournalLayout } from "@/journal/layout/JournalLayout";
import { NothingSelectedView } from "@/journal/views";
import { AddOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const JournalPage = () => {
  const { active, isActive } = useSelector((state) => state.journal);
  const { isSideBarOpen } = useSelector((state) => state.sideBar);

  return (
    <JournalLayout>
      <NothingSelectedView
        activeNote={active}
        isActive={isActive}
        isSideBarOpen={isSideBarOpen}
      />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
