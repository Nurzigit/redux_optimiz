import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnnouncement, deleteAnnouncement, editAnnouncement } from '../redux/announcementsSlice';

const AnnouncementsBoard = () => {
  const [text, setText] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const announcements = useSelector((state) => state.announcements);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addAnnouncement({ id: Date.now(), text }));
    setText('');
  };

  const handleEdit = (id) => {
    setEditId(id);
    const announcement = announcements.find(announcement => announcement.id === id);
    setEditText(announcement.text);
  };

  const handleSaveEdit = () => {
    dispatch(editAnnouncement({ id: editId, text: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <div>
     <div className="addLayers">
     <input
        className='text-field__input'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn-add' onClick={handleAdd}>Add</button>
     </div>
      <ul className='appLayout'>
        {announcements.map((announcement) => (
          <li className='appLayout_li' key={announcement.id}>
            {editId === announcement.id ? (
              <div className='appLayout_input'>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Сохранить</button>
              </div>
            ) : (
              <div className='appLayout_all'>
                <div className="appLayout_all-text">
                  {announcement.text}
                </div>
                <div className="appLayput_all-btns">
                  <button className='btn-ed' onClick={() => handleEdit(announcement.id)}>Edit</button>
                  <button className='btn-del' onClick={() => dispatch(deleteAnnouncement(announcement.id))}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsBoard;
