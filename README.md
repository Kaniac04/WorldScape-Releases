<div align="center">

# WorldScape — Quickstart Guide

**Write your manuscript, build your world, and gather your inspiration — in one desktop app.**

`WorldSkript` (write) · `Worldbook` (plan) · `MoodBoard` (inspire)

</div>

---

## Contents

1. [What is WorldScape?](#1-what-is-worldscape)
2. [Install and quick start](#2-install-and-quick-start)
3. [The library: collections and projects](#3-the-library-collections-and-projects)
4. [The workspace: Write, Plan, MoodBoard](#4-the-workspace-write-plan-moodboard)
5. [WorldSkript: writing your manuscript](#5-worldskript-writing-your-manuscript)
6. [Worldbook: building your world](#6-worldbook-building-your-world)
7. [MoodBoard: getting inspired](#7-moodboard-getting-inspired)
8. [How the three apps stay in sync](#8-how-the-three-apps-stay-in-sync)
9. [Where your files live](#9-where-your-files-live)
10. [Shortcuts cheat sheet](#10-shortcuts-cheat-sheet)

> All screenshots below were taken from the running app using a demo project, *The Ember Crown*.

---

## 1. What is WorldScape?

WorldScape keeps everything about a book in one place. Each **project** links a manuscript to its world, and you work on both side by side.

| App | What it is for |
|---|---|
| **WorldSkript** | Writing the manuscript: chapters, page layout, notes, dictionary, citations, images, history |
| **Worldbook** | Your story bible: characters, places and lore, relationships, storyboard, timeline, calendars |
| **MoodBoard** | Free-form boards of pictures, notes and colour swatches linked to your characters and places |

You can open any app on its own (**full view**) or two together (**split view**).

---

## 2. Install and quick start

### Install and first launch

1. Download the installer for your system from the project's [**Releases** page](https://github.com/Kaniac04/WorldScape-Releases/releases/latest): Windows (`.exe` / `.msi`), macOS (`.dmg`) or Linux (`.deb` / `.rpm` / `.AppImage`). The app is only distributed as installation files.
2. Install and open **Worldscape**. The app works fully offline, and nothing is pre-filled: no sample projects, no dictionaries.
3. The app checks for updates in the background. Nothing installs by itself: when a new version is ready, click **Restart and update**. Your work is saved first.

### If your system shows a warning

Worldscape is not code-signed yet, so Windows and macOS may warn you the first time you open it.

- **Windows:** if a blue "Windows protected your PC" window appears, choose **More info**, then **Run anyway**.
- **macOS:** open the `.dmg` and drag Worldscape into Applications. Then run `xattr -cr /Applications/Worldscape.app` once in Terminal. If macOS still blocks it, choose **Open Anyway** in System Settings → Privacy & Security.
- **Linux:** make the AppImage executable (right-click → Properties, or `chmod +x`) and open it. The `.deb` and `.rpm` files install with your package manager.

### Updates

Worldscape checks shortly after it starts and then every six hours. When a new version is ready, a small bar appears and nothing installs until you click **Restart and update**. Your chapters and open panels are saved first, and the update is cancelled if anything cannot be saved. Updates are signed, and the app only accepts packages signed with Worldscape's own key. You can also check at any time in **Settings**.

### Your first five minutes

1. **Create a project.** On the start page, click **New project**, name it and click **Create & open**.
2. **Set up your book.** In WorldSkript, click **Page layout** to set the title, author, book size, typeface and cover.
3. **Write.** Add chapters with **Chapter** and start writing. Chapter titles are added to the contents for you.
4. **Build your world.** Switch to Worldbook to add characters and places.
5. **Gather inspiration.** Open MoodBoard to collect images, notes and colours for a character or place.

---

## 3. The library: collections and projects

The start page is your **Library**. Use **Shelf** (book spines) or **Grid** (covers) to browse.

![Empty library](images/01.webp)

### Create your first project

1. Click **New project**.
2. Give it a **name**, an optional **note** and a **cover colour**.
3. Choose a **collection** (for example one book series), or create a new one by typing its name.
4. Pick where the project folder should be saved, then click **Create & open**.

![New project dialog](images/02.webp)

Your project now appears on the shelf, and you can drag books between collections to reorder them.

![Library with a project](images/03.webp)

### Settings and shortcuts

Open **Settings** (gear icon, top right) to **check for updates** and to **change any keyboard shortcut**. If two actions share a key, they are outlined in red until you fix it.

![Settings](images/04.webp)

---

## 4. The workspace: Write, Plan, MoodBoard

Open a project (double-click it) and you land in **Write + Plan** split view.

![Split view](images/05.webp)

| Action | How |
|---|---|
| Show an app | Click **WorldSkript**, **Worldbook** or **MoodBoard** in the top bar (click two to see them side by side) |
| Show one app only | **Double-click** its button |
| Switch directly | `Ctrl/⌘ + 1` Write · `Ctrl/⌘ + 2` Plan · `Ctrl/⌘ + 3` MoodBoard |
| Swap left and right | The ⇄ button |
| Second monitor | **Pop out** moves a pane into its own window |
| Back to the library | **Library** button or `Ctrl/⌘ + 0` |

The **Saved** indicator in the top bar tells you that all apps have saved.

---

## 5. WorldSkript: writing your manuscript

### Page layout

Click **Page layout** to set up the whole book. A live preview shows your changes.

- **Manuscript:** rename the manuscript, add the author name and choose the cover colour.
- **Book size:** nine formats, from mass-market paperback to A4.
- **Typeface:** eleven book fonts.
- **Text:** size, line spacing, paragraph indent, alignment and margins.
- **Chapters:** heading style, numbering and chapter openers.
- **Page and cover:** paper tone, page numbers, headers and cover design.

![Book size](images/06.webp)
![Typeface](images/07.webp)
![Text](images/08.webp)
![Chapters](images/09.webp)
![Page and cover](images/10.webp)

### Writing, chapters and notes

Type directly on the page. Add a **chapter** with the **Chapter** button, or press **Enter three times**. Chapters start on a new page and appear in the **Index** on their own.

Select text to:

- add a **note**, shown as a yellow sticky note in the **Notes** panel (`Ctrl/⌘+Alt+N`)
- flag a **major event** at the cursor (`Ctrl/⌘+Alt+E`), shown as a dot in the margin
- **right-click** to add a note, a flag or an *artifact* (a character, place or lore item)

![Writing with a note](images/11.webp)

### Navigate with the outline

The **☰** button opens **Chapters** and **Events**. Jump to any chapter, set one aside, or send events to Worldbook.

![Outline](images/12.webp)

### Events: send and add in both directions

An **event** is a key moment in a chapter. A flag in WorldSkript and an event in the Worldbook storyboard are two views of the same moment, and you can start from either side. Click inside a chapter first: the **Events** tab only lists the chapter your cursor is in.

**WorldSkript → Worldbook (send a flag)**

1. Click in the chapter where it happens, then click the **flag** button in the toolbar (or press `Ctrl/⌘+Alt+E`).
2. Leave **Worldbook event** on *Independent flag*, type a label and click **Add flag**. A dot appears in the margin beside that line.

![Add flag dialog](images/13.webp)

3. Open **☰ → Events**. Your flag is listed as *WorldSkript*. Click **Send to storyboard**.

![Events tab with a flag ready to send](images/14.webp)

4. The flag is now linked. The list says *Worldbook · In manuscript*, and the event appears under that chapter in the Worldbook storyboard.

![Flag sent to the storyboard](images/15.webp)

**Worldbook → WorldSkript (add at cursor)**

1. In Worldbook, open **Storyboard** and click **+ event** on a chapter (see [Storyboard](#storyboard)).
2. In WorldSkript, put the cursor in that chapter and open **☰ → Events**. Events that are planned in Worldbook but not yet in the text are marked *Worldbook · Planned*.

![Planned Worldbook events](images/16.webp)

3. Click **Add at cursor** (the button reads **Add at chapter start** when your cursor is in another chapter). The flag is placed in the text and the event now reads *In manuscript*.

![A Worldbook event placed in the manuscript](images/17.webp)

You can also link a flag to a Worldbook event while you create it: in the **Add flag** dialog, pick the event from the **Worldbook event** list.

**Working with a flag**

- Click its dot in the margin to **Link Worldbook event…**, **Rename flag** or **Remove flag**.
- In Worldbook, a linked event carries a **Manuscript flag** button. Click it and WorldSkript opens at that exact spot, next to Worldbook.

![Flag menu in the margin](images/18.webp)

![Jumping from a Worldbook event to its flag](images/19.webp)

### Guides in the left margin

The thin rail on the far left lists the cover, the index, every chapter and every flag as small dashes, so you can move through a long manuscript quickly. Long dashes are chapters and short gold dashes are event flags. Hover over one to see its name, click it to jump there. The dash for the part you are reading is highlighted.

![Margin guides with a hover label](images/20.webp)


### Artifacts

The **Artifacts** panel lists the characters, places and lore involved in the chapter you are reading, taken from Worldbook.

![Artifacts](images/21.webp)

### Dictionary

Add your own words with a definition, or import a dictionary. With spell check on, right-click a red word to correct it or **Add to dictionary**.

![Dictionary](images/22.webp)

### Citations

Add sources by hand or import them from **Zotero**, then cite them in the text. The bibliography is added at the end of the book and to the index.

![Citations](images/23.webp)

### Scrapyard

Not sure about a chapter? Send it to the **Scrapyard**. **Restore** puts it back in its original place, and **Place…** lets you choose another position. Its history is kept.

![Scrapyard](images/24.webp)

### History

Every chapter keeps saved versions. Save one yourself with **Save a version** (or `Ctrl/⌘+S`); WorldSkript also saves them automatically. Click a version to compare it to the current text, then restore it if you wish.

![History](images/25.webp)

### Focus mode, spell check and more

The **⋯** menu holds **Dictionaries**, **Spell check** (on or off), **Focus mode** (dims the menus while you type) and **Backup**. Use **Export** to create a Word or EPUB file.

![More menu](images/26.webp)


### Extra pages and the index

Use **+ Extra page** (the small button under the index, and between extra pages) to add a prelude, a dedication, notes or a map page before the first chapter.

1. Click **+ Extra page**. The cursor jumps to the page heading.
2. Type a **heading** (for example *Prelude*), then write the page text, or place an image from the **Images** panel.
3. The heading is added to the **Contents** by itself, with its own page number. A page with **no heading** stays out of the index.
4. Use the arrows on the page to move it up or down, and the bin to delete it. Chapters added later also appear in the index by themselves.

Before, the index lists only the chapters:

![Index before an extra page](images/27.webp)

After adding the extra page *Prelude*, it appears in the index, and the page itself sits in front of Chapter 1:

![Index with the extra page](images/28.webp)

![The extra page](images/29.webp)


> **Images:** place pictures in your manuscript or on extra pages from the **Images** panel.

---

## 6. Worldbook: building your world

Worldbook has eight sections in its left menu.

### Characters

Click **+ New character** and fill in name, role, appearance and backstory. You can also record how a character changes from chapter to chapter.

![Characters](images/30.webp)

### Places & Lore

Cities, landmarks, factions, magic systems and items. Link each entry to a chapter and, if you like, to a calendar.

![Places and lore](images/31.webp)

### Relationships

Record how characters, places, lore, chapters and events relate, and how those relationships change over the story. The graph shows connections, and you can filter by entity or chapter.

![Relationships](images/32.webp)
![Relationship graph](images/33.webp)

#### Link relationships

Besides a relationship between two entities, you can link **a relationship to another relationship**, or **a relationship to an entity** (a place, an event, a calendar event).

1. Click **+ Link entity**.
2. Choose the **Source relation**, the one you are linking from.
3. Under **Link to**, choose *An existing relation* or *An existing entity* and pick it.
4. Add an optional **label** (for example *Caused by*) and the chapter it applies to, then click **Save link**.

![Link form](images/34.webp)

A link is drawn as a **dashed line** from the middle of the source relation. Here a link labelled *Caused by* joins the *Former allies* and *Rivals* relationships, and *Taught in* joins the mentor bond to Highmere:

![Relationship graph with links](images/35.webp)

Below the graph, all links are listed under **Links**, and they also show up as gold chips on that chapter in the [Storyboard](#storyboard).

![List of relationships and links](images/36.webp)


### Storyboard

Arcs, chapters and events. **Chapters created here appear in WorldSkript, and the other way round.** Add events to a chapter here, and place them in the manuscript wherever you want.

![Storyboard](images/37.webp)

Scroll down past the progress board to the **arcs**. An arc holds its chapters, and each chapter holds its events:

- Chapters made in WorldSkript appear here by themselves, inside the **Manuscript** arc. The **Visible** switch shows whether the chapter is in the manuscript.
- Click **+ event** on a chapter to open the event editor: title, order, description, characters, places and calendar date. Use the **⋮** menu on an event to open or delete it.
- Round initials next to a chapter title are the characters involved. Relationships and links for that chapter show as gold chips under its notes.
- An event that has a flag in the manuscript carries a **Manuscript flag** button, which opens WorldSkript at that spot.

![Arcs, chapters and events](images/38.webp)

![A chapter with events, relationships and links](images/39.webp)

See [Events: send and add in both directions](#events-send-and-add-in-both-directions) for how events move between the two apps.


### Timeline

See your whole story at a glance: chapter lengths, events and relationship shifts, in order.

![Timeline](images/40.webp)

### Calendar

Use the standard calendar or create your own fantasy calendar with custom months, weeks and named days.

![Calendar](images/41.webp)

### Search and History

**Search** finds anything in the world (use `#tags`). **History** keeps automatic snapshots of your world that you can restore.

![Search](images/42.webp)
![World history](images/43.webp)

---

## 7. MoodBoard: getting inspired

Each character, place or lore entry can have its own board. Add **images**, **notes** and **colour swatches**. A palette is built from your pictures. **Tidy** arranges everything into a neat collage.

- Add pictures with **+ Images**, by dropping files or by pasting.
- Boards can also be **Independent**, linked to nothing.
- **Open in Worldbook** jumps to the linked entry.

![MoodBoard](images/44.webp)

---

## 8. How the three apps stay in sync

- A chapter created in **WorldSkript** appears in the **Worldbook** storyboard, and the other way round.
- The **Visible** switch on a Worldbook chapter shows whether it is in the manuscript or set aside in the Scrapyard.
- **Delete from manuscript** in WorldSkript removes the text only. **Complete deletion** in Worldbook removes the chapter everywhere and cannot be undone.
- Characters and places from Worldbook feed the **Artifacts** panel and the MoodBoard sidebar.
- An event sent from WorldSkript (**☰ → Events → Send to storyboard**) appears in the Worldbook chapter. An event planned in Worldbook (**+ event**) can be placed in the text with **Add at cursor**. Both stay linked, so the **Manuscript flag** button always finds the spot.
- Extra pages and new chapters are added to the WorldSkript index by themselves.

---

## 9. Where your files live

Everything is saved in your project folder, so you can back it up or sync it like any other folder:

```
<Project name>/
  worldscape.json     project settings and links
  manuscript/         your WorldSkript drafts
  world/              your Worldbook file
  moodboards/         your boards and pictures
```

Removing a book from the library only removes its card. Your files are never deleted.

---

## 10. Shortcuts cheat sheet

Every shortcut can be changed in **Settings**. Defaults:

| Action | Shortcut |
|---|---|
| Write / Plan / MoodBoard | `Ctrl/⌘ + 1` / `2` / `3` |
| Back to library | `Ctrl/⌘ + 0` |
| Save a version | `Ctrl/⌘ + S` |
| Find / Replace | `Ctrl/⌘ + F` / `H` |
| Add note | `Ctrl/⌘ + Alt + N` |
| Sticky notes panel | `Ctrl/⌘ + Alt + M` |
| Flag a major event | `Ctrl/⌘ + Alt + E` |
| Cite a source | `Ctrl/⌘ + Alt + R` |
| Scene break | `Ctrl/⌘ + Enter` |
| New page | `Ctrl/⌘ + Alt + Enter` |
| Paragraph styles | `Ctrl/⌘ + Alt + 0–3` |

---

<div align="center">

*Happy writing.*

</div>
