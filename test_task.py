from playwright.sync_api import sync_playwright
import time
with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto('https://www.google.com/')
    page.locator('xpath=//textarea[@name="q"]').fill('Playwright')
    page.keyboard.press('Enter')
    page.wait_for_timeout(5000)
    browser.close()