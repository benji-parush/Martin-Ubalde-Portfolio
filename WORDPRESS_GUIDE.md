# WordPress Implementation & Publishing Guide for Martin Gabriel Ubalde

This guide provides step-by-step instructions to recreate and publish this exact **"Hire Me" Personal Portfolio** on [WordPress.com](https://wordpress.com), fulfilling all the requirements of the **Module on Digital Presence and Personal Branding Checkpoint Activity**.

---

## 1. Quick Setup on WordPress.com (Free Tier)

1. Go to [https://wordpress.com/start](https://wordpress.com/start).
2. Choose **Free domain** (e.g., `martingabrielubalde.wordpress.com` or `martinubalde-portfolio.wordpress.com`).
3. Select the **Free Plan** ("Start with a free site").
4. Choose a clean, modern, minimalist block theme:
   - **Recommended themes:** *Twenty Twenty-Four*, *Astra*, *Ollie*, or *Pendant* (which features a luxury editorial navy & gold aesthetic).

---

## 2. Page Structure & Block Mapping

In WordPress, open your **Home Page** in the **Block Editor (Gutenberg)** and construct each section using the blocks mapped below:

### Section 1: Hero / Introduction (Header Cover Block)
- **WordPress Block:** `Cover` block
  - **Background:** Deep navy blue (`#0A0F1D`) with subtle gradient or the business card image as an accent.
  - **Inside the Cover Block:**
    - `Paragraph` (Tag style): `Available for Immediate IT Support, ITSM & VA Opportunities`
    - `Heading 1`: **MARTIN GABRIEL UBALDE**
    - `Heading 3` (Gold color `#C5A059`): *IT Support Specialist | IT Service Manager | Virtual Assistant*
    - `Paragraph`: *BS in Information Technology (Major in Service Management) • Batangas State University*
    - `Paragraph`: Short professional summary (from your resume):
      > *"A hardworking graduating college student from Batangas State University taking the program of Bachelor of Science in Information Technology, majoring in Service Management. An aspiring IT professional dedicated to learning how organizations flow and deliver quality IT services."*
    - `Buttons` Block:
      - Button 1: **Hire Me / Contact** (Links to `#contact`)
      - Button 2: **View Resume** (Links to your PDF/resume document or section)
    - `Columns (2 Columns)`:
      - Left column: Metric highlights (BS IT Service Management, 3+ Core Domains, 3rd Place Speech Awardee, 100% Dedication).
      - Right column: `Image` block displaying your custom Business Card (`assets/card-front.png` / `assets/card-back.png`).

---

### Section 2: About Me & Personal Brand
- **WordPress Block:** `Group` block with `Columns (60 / 40)`
  - **Left Column:**
    - `Heading 2`: **About Me & Professional Philosophy**
    - `Paragraph`: Academic background at Batangas State University, hands-on immersion, and multi-disciplinary versatility.
    - `Columns (2x2 Grid)` with icons:
      1. *IT Service Management* (ITIL principles, service request fulfillment)
      2. *System Troubleshooting* (Hardware/OS diagnosis, network configuration)
      3. *Programming & Tech* (Web technologies, Python scripting, logic building)
      4. *Communication & Leadership* (Public speaking awardee, ICT Club President)
  - **Right Column (Quick Factsheet Card):**
    - `Group` block with light border and background padding:
      - **Full Name:** Martin Gabriel Ubalde
      - **Program:** BS in Information Technology
      - **Major:** Service Management
      - **Institution:** Batangas State University
      - **Secondary:** Joseph Marello Institute Inc. (TVL-ICT Strand, Honors)
      - **Location:** San Carlos, Lipa City, Batangas, Philippines
      - **Languages:** English (Fluent), Filipino (Native)

---

### Section 3: Skills & Areas of Expertise
- **WordPress Block:** `Group` block
  - `Heading 2`: **Skills & Core Competencies**
  - `Columns (3 Columns)`:
    - **Column 1: IT & Systems Support**
      - System Troubleshooting & Diagnostics
      - Hardware Fault Isolation & Driver Setup
      - Operating Systems (Windows, Linux basics)
      - Network Triage & Peripherals
    - **Column 2: IT Service Management & Operations**
      - ITIL Principles & Service Flow
      - Incident Triage & Ticket Queues
      - Service Level Agreements (SLAs)
      - Virtual Assistance & Executive Coordination
    - **Column 3: Programming, Creative & Soft Skills**
      - Computer Programming (HTML, CSS, JavaScript, Python)
      - Graphic Design & Apparel Mockups (Photoshop, Canva)
      - Video Editing & Promotional Reels
      - Public Communication (Speech Contest 3rd Place)

---

### Section 4: Work Experience & Projects
- **WordPress Block:** `Group` or `Media & Text` block
  - `Heading 2`: **Experience & Real-World Projects**
  - **Featured Experience:**
    - `Heading 3`: **Graphic Designer (Intern) & Marketing Assistant**
    - `Paragraph`: *Streight Clothing Company | 2024*
    - `List`:
      - Created various graphic designs for t-shirts and urban apparel line.
      - Assisted in managing product inventory preparation and warehouse handling.
      - Provided assistance to the marketing department as a brand model and video editor for product advertisements.
  - **Featured Case Study:**
    - *Streight Clothing Brand & Apparel Design Suite*

---

### Section 5: Education & Academic Timeline
- **WordPress Block:** `Columns` or `Timeline/Group` block
  - `Heading 2`: **Education & Academic Journey**
  - **Item 1:**
    - *Batangas State University (2024 – Current / Graduating)*
    - Degree: Bachelor of Science in Information Technology (Major in Service Management)
    - Focus: Enterprise IT delivery, system administration, database systems, network infrastructure.
  - **Item 2:**
    - *Joseph Marello Institute Inc. (2022 – 2024)*
    - Senior High School: TVL Track – ICT Strand (Graduated with Honors)
    - Leadership: President of the ICT Club, Committee on Service (School Choir).

---

### Section 6: Honors, Awards & Certifications
- **WordPress Block:** `Columns (2 Columns)`
  - `Heading 2`: **Honors, Awards & Certifications**
  - **Award 1:** *Beyond the Bytes: A Speech Contest (3rd Place | 2026)*
    - Recognized for competitive public speaking, poise, and clear technical communication.
  - **Award 2:** *DATABIZ Conference 2024 – Certificate of Participation (2024)*
    - Active participation in Data Science, Artificial Intelligence, and Business Analytics.
  - **Character Reference Callout (`Quote` block):**
    > **Marinelo P. Sevilla, LPT**  
    > Immersion Adviser, Joseph Marello Institute Inc.  
    > Phone: `09683660311`

---

### Section 7: Contact Information ("Hire Me")
- **WordPress Block:** `Columns (50 / 50)`
  - **Left Column (Direct Channels):**
    - `Paragraph`: **Email:** [martinubalde156@gmail.com](mailto:martinubalde156@gmail.com)
    - `Paragraph`: **Phone:** (+63) 961 109 7564
    - `Paragraph`: **Location:** San Carlos, Lipa City, Batangas, Philippines
    - `Paragraph`: **LinkedIn:** [linkedin.com/in/martin-gabriel-ubalde-3b0a41431/](https://www.linkedin.com/in/martin-gabriel-ubalde-3b0a41431/)
  - **Right Column (Contact Form):**
    - `Form` block (built into WordPress.com):
      - Name field
      - Email field
      - Subject / Role selector
      - Message field
      - Submit button: *"Send Inquiry to Martin"*

---

## 3. Alternative: Direct Embedding via Custom HTML Block

If your WordPress theme permits the **Custom HTML** block:
1. Copy the code from `index.html` (or selected sections like the Hero with 3D card).
2. Insert a **Custom HTML** block into your WordPress page.
3. Paste the code and click **Preview**.

---

## 4. Submitting Your Assignment

Once published on WordPress:
1. Copy your live website URL (e.g., `https://martinubalde-portfolio.wordpress.com/`).
2. Verify that all links, contact details, and images render crisply.
3. Send the link to your instructor via **Private Message** on your school LMS/portal.
4. Mark the activity as **Done** on your checkpoint submission dashboard.
