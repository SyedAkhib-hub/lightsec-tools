# Light Security Tools

A **web-based cybersecurity toolkit** that helps users analyze and improve their digital security. Built entirely with **HTML, CSS, and JavaScript**, this toolkit includes password strength checking, hash generation, Base64 encoding/decoding, and rotation cipher tools.

---

## **Tools Included**

### 1. Password Strength Checker 🔐
- Evaluates password entropy and strength (1–5 scale).
- Estimates how long it would take a computer to crack the password.
- Checks passwords against a list of known breached passwords.
- Optional extended guidance for creating strong passwords.

### 2. Hash Generator 🔑
- Generate cryptographic hashes of text.
- Supported algorithms: **MD5, SHA-1, SHA-256, SHA-512**.
- Useful for securely storing passwords or verifying data integrity.

### 3. Base64 Encode / Decode 🧬
- Encode text into Base64.
- Decode Base64 strings back to original text.
- Useful for safe data transmission or simple obfuscation.

### 4. Rotation Cipher Encode / Decode 🔄
- Encode or decode text using rotation ciphers:
  - **ROT13** (letters)
  - **ROT5** (numbers)
  - **ROT47** (printable ASCII symbols)
- Useful for educational purposes or simple text obfuscation.

---

## **Optional Extended Password Guidance**
- Passwords should be **at least 12 characters** (16+ ideal).  
- Include **uppercase, lowercase, numbers, and symbols**.  
- Use a **unique password for each account**.  
- Avoid **personal info** (birthdays, addresses, pets’ names).  
- Do **not use consecutive letters or numbers** (e.g., ABCD, 1234).  
- Avoid common words like `"password"` or repeated characters.

---

## **Features**
- Clean **light glass UI** with responsive design.
- Works entirely in the browser — **no backend required**.
- Modular design: each tool can be opened via navigation.
- Saves the last checked passwords locally using **LocalStorage**.

---

## **Folder Structure**
/ (root)
│ index.html # Home page / tools hub
│ style.css # Global styles (if separate)
│ /password
│ └ index.html # Password strength tool
│ /hash
│ └ index.html # Hash generator
│ /base64
│ └ index.html # Base64 tool
│ /rot
└ index.html # Rotation cipher tool

---

## **How to Use**
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Navigate to each tool using the navbar.
4. Use password guidance and check against the breach list.

--- screenshot ---<img width="1366" height="768" alt="Screenshot_2025-11-16_03_06_47" src="https://github.com/user-attachments/assets/c39d5ea2-731b-4d10-8adf-13f90a4ba3be" /><img width="1366" height="768" alt="Screenshot_2025-11-16_03_07_00" src="https://github.com/user-attachments/assets/15a7ae38-8fcd-4e68-b6e5-325b33178d02" />


## **Optional**
You can extend this project with:
- Additional hash algorithms
- More ciphers or encoding schemes
- Integration with server-side storage for password history

---

## **License**
This project is open-source. Feel free to use, modify, or extend it.

