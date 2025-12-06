# Projects Data

This folder contains the project data in JSON format. You can easily update project details without modifying the React components.

## File: `projects.json`

### Structure

Each project has the following fields:

- **title**: Project title (displayed on card)
- **description**: Short description (displayed on card)
- **stack**: Array of technologies used
- **highlight**: Key highlight/achievement
- **details**: Detailed information shown in the modal

### Project Types

#### 1. Notification System (with steps)
For projects with detailed step-by-step explanations:

```json
{
  "title": "Project Name",
  "description": "Short description",
  "stack": ["Tech1", "Tech2"],
  "highlight": "Key highlight",
  "details": {
    "steps": [
      {
        "title": "Step Title",
        "description": "Optional description",
        "dataPayload": {
          "immediate": "Code example as string",
          "scheduled": "Code example as string"
        },
        "points": [
          "Point 1 with **bold** text support",
          "Point 2 with `code` support"
        ]
      }
    ]
  }
}
```

#### 2. Standard Projects (with overview)
For simpler projects:

```json
{
  "title": "Project Name",
  "description": "Short description",
  "stack": ["Tech1", "Tech2"],
  "highlight": "Key highlight",
  "details": {
    "overview": "System overview text",
    "features": [
      "Feature 1",
      "Feature 2"
    ]
  }
}
```

### Tips

- Use `**text**` for bold text in points
- Use `` `code` `` for inline code in points
- For code blocks in dataPayload, use multi-line strings with `\n` for newlines
- Keep descriptions concise for card display
- Add detailed explanations in the `details` section

### Editing

Simply edit `projects.json` and save. The changes will be reflected when you refresh the page (or restart dev server if needed).

