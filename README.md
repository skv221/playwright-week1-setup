# Playwright Python – Week 1

This repository documents my Week 1 learning progress with **Playwright in Python**.

---

## 📅 Week 1 Focus: Introduction & Setup

### ✅ Completed Tasks

- Installed Playwright:
  - `pip install playwright`
  - `playwright install`

- Explored:
  - Difference between `sync_playwright` (synchronous API, easier for beginners) and `async_playwright` (asynchronous API, uses `asyncio` and `await` for advanced workflows).

- Wrote and committed a basic script to:
  - Launch a Chromium browser
  - Navigate to Google
  - Search for a term
  - Wait for results
  - Close the browser

---

## 🔍 Key Differences Noted: Playwright vs Selenium

| **Aspect**         | **Playwright**                                      | **Selenium**                             |
|---------------------|-----------------------------------------------------|-----------------------------------------|
| Installation        | Built-in drivers, easy setup with `playwright install` | Requires separate browser drivers setup |
| Supported Browsers  | Chromium, Firefox, WebKit (inbuilt)           | Chrome, Firefox, Edge, Safari (external) |
| Wait Handling       | Auto-waits for actions and elements                  | Needs explicit or implicit waits        |
| Speed               | Generally faster, modern design                     | Can be slower, older design             |
| Async Support       | Native `async/await` via `async_playwright`         | More limited or manual async            |
| Selectors           | Text, CSS, role selectors, XPath                    | Mostly XPath, CSS                      |

---