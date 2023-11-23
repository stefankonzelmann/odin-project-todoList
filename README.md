# odin-project-todoList

## Concept notes

### Objects

ToDo-Items

```json
{
    title,
    description,
    dueDate,
    priority,
    subtasks,
    notes
}
```

Projects

```json
{
    // Attributes
    name,
    description,
    color,
    defaultFlag,
    toDos = []

    // Methods
    addToDo()
    getToDos()
    removeToDo()
}
```

### Modules

- Project Class
- ToDoItemt Class
- DomController
- Project Creator
- ToDo Creator

### Next Steps

- Standalone ToDos
  - Removing ToDos via Checkbox
  - Button and Form for adding ToDos
  - Save ToDos to Local Storage
- Styling
  - more minimal (no header / footer)
  - inlcude title and button in sidebar
  - get nordic font from form project for title
- Implement Projects (steps tbd)

---

Feels like im stuck because of trying to make a module for everything. Change of course: Move everything to index.js and outsource it bit by bit as I go along.
