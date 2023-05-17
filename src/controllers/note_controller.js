/* eslint-disable arrow-parens */
import Note from '../models/note';

export const getNotes = async () => {
  const notes = await Note.find({});
  return notes.reduce((result, item) => {
    result[item.id] = item;
    return result;
  }, {});
};

export const deleteNote = async (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  try {
    const response = await Note.findByIdAndDelete(id);
    return response;
  } catch (error) {
    throw new Error(`error in delete ${error}`);
  }
};

export const createNote = async (fields) => {
  // you know the drill. create a new Note mongoose object
  // return .save()
  const note = new Note();
  note.title = fields.title;
  note.x = fields.x;
  note.y = fields.y;
  note.zIndex = fields.zIndex;
  note.text = fields.text;
  try {
    const savedNote = await note.save();
    return savedNote;
  } catch (error) {
    throw new Error(`create note error: ${error}`);
  }
};

export const updateNote = async (id, fields) => {
  const note = await Note.findById(id);
  // check out this classy way of updating only the fields necessary
  Object.keys(fields).forEach((k) => {
    note[k] = fields[k];
  });
  return note.save();
};
