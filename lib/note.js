const Note = `
  # Note object
  type Note {
    # ID key
    id: Int!
  }

  type Query {
    # Get all notes
    notes: [Note]
  }
`;

module.exports = Note;
