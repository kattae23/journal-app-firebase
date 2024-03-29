

import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { startNewNote } from '../../store/journal'
import JournalLayout from '../layout/JournalLayout'
import NoteView from '../views/NoteView'
import NothingSelectedView from '../views/NothingSelectedView'

const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout >

      {/* {
        (!!active)
          ? <Route path="/*" element={<NoteView />} />
          : <Route path="/*" element={<NothingSelectedView />} />
      } */}
      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }

      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}

export default JournalPage
