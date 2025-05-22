# <font color=orange> Prompt เริมต้น Reuse ได้ </font>

```
ผมต้องการสร้าง webapp ใช้ CBA-Architecure ผมมีโครงสร้างตัวอย่างที่ผมใช้

/app              # หน้า Home (Page Container)
   page.tsx                    # หน้าแรก import MainLayout + TodoContainer
   /subpage
       page.tsx                # rout แสงหน้า subpage เช่น about login setting
/components
    /containers        # ► Container Components (stateful)
       TodoContainer.tsx       # ดึง/use state, hooks แล้วส่ง presentational
       UserContainer.tsx       # (ถ้ามี feature user)
   /features           # ► Presentational / Feature components
       /todo
           TodoList.tsx                # รับ props.todos -> render list
           TodoForm.tsx                # รับ props.onAdd -> render form
           TodoItem.tsx                # รับ props.todo, props.onToggle, props.onDelete
           index.ts                    # re-export
   /layouts             # ► Layout Components
       Header.tsx                  # โลโก้ + ชื่อแอป
       Footer.tsx                  # ลิขสิทธิ์
       MainLayout.tsx              # ครอบ header + footer + children
   /ui                 # ► Atoms / Primitives
       Button.tsx              # primitive ปุ่ม
       Input.tsx               # primitive กล่องกรอกข้อความ
       Card.tsx                # primitive กล่อง Card
       index.ts                # re-export

/styles         # โดยทั่วไปเราจะแยกไฟล์สไตล์หลักอยู่บนสุดของโปรเจ็ค
               (เพราะความชัดเจนเรื่องขอบเขตเพราะสไตล์ที่ใช้ทั้งแอป และ theme.ts เก็บค่าสี, spacing, typography constants)
   globals.css                 # สไตล์ทั่วแอป
   theme.ts                    # ค่าสีและ spacing (ถ้ามี)


ผมอยากให้คุณช่วยเขียนโครงสร้างแบบนี้ จากโจทย์ต่อไปนี้ครับ


Mini Exercise: Component Memory Box
เป้าหมาย:
สร้าง app ขนาดเล็กที่มี "Memory Box" ให้ผู้ใช้:

พิมพ์ข้อความลงไป

กด Save แล้วข้อความนั้นจะไปอยู่ใน list

กด Clear เพื่อเคลียร์ทั้งหมด

Step-by-step Challenge
1. สร้างโฟลเดอร์ /components/containers/MemoryContainer.tsx
2. ภายในเขียน MemoryContainer() ที่ใช้ useState เก็บ memory list
3. สร้าง child component ชื่อ MemoryInput.tsx (แยกเป็น Presentational)
4. ใช้ useRef เก็บข้อความที่ยังไม่ได้ submit
5. มีปุ่ม Save (เรียกฟังก์ชัน saveMemory()) และ Clear (ล้างทั้งหมด)
6. กำหนด type Memory = { id: string; content: string }
7. แสดงผลลัพธ์ใน MemoryList.tsx ที่รับ props memories

```

# ========================================================================================================

I’d like to build a web app using the **CBA Architecture**. Below is the sample structure I’m using:

````

/app # Home page (Page Container)
page.tsx # Landing page – imports MainLayout + TodoContainer
/subpage
page.tsx # Routes to sub-pages such as about, login, settings
/components
/containers # ► Container components (stateful)
TodoContainer.tsx # Pulls/uses state & hooks, then passes data to presentational components
UserContainer.tsx # (if there’s a user feature)
/features # ► Presentational / feature components
/todo
TodoList.tsx # Receives props.todos → renders the list
TodoForm.tsx # Receives props.onAdd → renders the form
TodoItem.tsx # Receives props.todo, props.onToggle, props.onDelete
index.ts # re-export
/layouts # ► Layout components
Header.tsx # Logo + app name
Footer.tsx # Copyright
MainLayout.tsx # Wraps header + footer + children
/ui # ► Atoms / primitives
Button.tsx # Primitive button
Input.tsx # Primitive text-input field
Card.tsx # Primitive card container
index.ts # re-export

/styles # We usually keep the top-level style files here # (to keep global scope clear). theme.ts stores colors, # spacing, typography constants.
globals.css # App-wide styles
theme.ts # Color and spacing scales (if any)


---

### I’d like you to help me write the same kind of structure for the following task.

## Mini Exercise: **Component Memory Box**

**Goal**
Build a small app that provides a **Memory Box** where the user can

* type some text
* press **Save** → the text is added to a list
* press **Clear** → every saved entry is removed

### Step-by-step Challenge

1. Create `/components/containers/MemoryContainer.tsx`.
2. Inside, write `MemoryContainer()` that uses `useState` to store the memory list.
3. Add a child component called `MemoryInput.tsx` (presentational).
4. Use `useRef` to keep the text that hasn’t been submitted yet.
5. Provide two buttons: **Save** (calls `saveMemory()`) and **Clear** (clears everything).
6. Define

   ```ts
   type Memory = { id: string; content: string }
````

7. Render the results in `MemoryList.tsx`, which receives `props.memories`.

---

## The flow I’ll follow for the task

There are two scenarios:

1. **Save scenario**

   - The user types in the input box.
   - When **Save** is pressed, the text is submitted and stored in the Memory Box.
   - Each memory entry should get a **uuid** as its `id`, and the memory should also record the **date and time** it was saved, formatted `yyyy/mm/dd : HH:MM:SS`.

2. **Clear All scenario**

   - When **Clear All** is pressed, a function is triggered that deletes every entry in the Memory Box.

---

### Display

- **app/page.tsx**

  ```tsx
  <h1>Hello World test</h1>
  ```

- **app/dashboard/page.tsx** → `page/DashboardPage.tsx`

  In `DashboardPage.tsx` render:

  ```tsx
  <MainLayout>
    <MemoryContainer />
  </MainLayout>
  ```

```

```
