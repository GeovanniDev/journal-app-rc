// Layout Components
import { IconButton } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import { NothingSelectView, ViewNote } from "../view";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export default function JournalPage() {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const handleAddNote = () => {
    dispatch(startNewNote());
  };
  return (
    <>
      <JournalLayout>
        {(active !== null) ? <ViewNote /> : <NothingSelectView />}

        <IconButton
          disabled={isSaving}
          onClick={handleAddNote}
          sx={{
            color: "white",
            backgroundColor: isSaving ? "grey.500" : "error.main",
            ":hover": {
              backgroundColor: isSaving ? "grey.500" : "error.main",
              opacity: 0.9,
            },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
        </IconButton>
      </JournalLayout>
    </>
  );
}
