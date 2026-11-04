/**
 * Martin Gabriel Ubalde - Hire Me Portfolio
 * Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initBusinessCard();
  initSkillsFilter();
  initProjectModal();
  initResumeModal();
  initContactForm();
  initCopyButtons();
});

/* ==========================================================================
   Theme Toggle (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('mgu_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('mgu_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme} theme`, 'palette');
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ==========================================================================
   Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveSection();
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        links.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }
}

/* ==========================================================================
   3D Business Card Interactive Flip
   ========================================================================== */
function initBusinessCard() {
  const cardWrapper = document.getElementById('business-card-wrapper');
  const flipTrigger = document.getElementById('flip-card-btn');

  if (!cardWrapper) return;

  function toggleFlip() {
    cardWrapper.classList.toggle('flipped');
  }

  cardWrapper.addEventListener('click', toggleFlip);
  if (flipTrigger) {
    flipTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFlip();
    });
  }
}

/* ==========================================================================
   Skills Filtering
   ========================================================================== */
function initSkillsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterCategory === 'all' || categories.includes(filterCategory)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Project Detail Modal
   ========================================================================== */
const projectData = {
  streight: {
    title: "Streight Clothing Co. - Apparel & Brand Collateral Suite",
    subtitle: "Graphic Design & Marketing Internship (2024)",
    image: "assets/projects/streight-apparel.jpg",
    category: "Graphic Design & Commercial Marketing",
    overview: "During my internship at Streight Clothing Company, I spearheaded digital apparel graphics creation, marketing media production, and product fulfillment operations. This role united technical graphic software expertise with real-world consumer apparel marketing, including the flagship Streight® Premium Blend commercial campaign.",
    keyPoints: [
      "Designed commercial graphic mockups and marketing assets for the Streight® Premium Blend apparel collection.",
      "Assisted in hands-on merchandise inventory management, packaging, and product preparation.",
      "Filmed and edited high-engagement promotional video reels and social advertisements.",
      "Served on the marketing frontline as both a digital brand model and video editor."
    ],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "CapCut / Premiere Pro", "Visual Merchandise Prep", "Apparel Mockups"],
    impact: "Boosted product visual engagement across digital channels and supported seamless fulfillment during key seasonal apparel drops."
  },
  itsm: {
    title: "IT Service Desk & Incident Lifecycle System",
    subtitle: "Enterprise IT Service Management & Helpdesk Architecture",
    image: "assets/projects/project-itsm.svg",
    category: "IT Support & ITIL Service Management",
    overview: "A comprehensive IT service desk workflow model aligning academic IT Service Management (ITSM) principles with enterprise operational standards. Designed to streamline incident triage, prioritize requests, and track service level agreements (SLAs).",
    keyPoints: [
      "Structured Tier-1 and Tier-2 incident categorization and escalation matrices.",
      "Integrated automated SLA compliance monitors and resolution feedback loops.",
      "Created standardized hardware diagnostic checklists and OS configuration procedures.",
      "Designed an intuitive self-service portal mock architecture for internal organizational users."
    ],
    techStack: ["ITIL Framework", "Service Management Principles", "Hardware Diagnostics", "Troubleshooting Workflows", "System Documentation"],
    impact: "Demonstrates practical readiness to lead IT service delivery, reduce ticket turnaround times, and maintain robust system uptime."
  },
  branding: {
    title: "Executive Personal Brand & 3D Interactive Hub",
    subtitle: "Digital Presence, Visual Identity & Web Experience",
    image: "assets/projects/project-branding.svg",
    category: "Personal Branding & Frontend Engineering",
    overview: "Created under the 'Hire Me' project for the Digital Presence and Personal Branding module. Combines a luxury Navy & Gold brand identity with interactive 3D web technologies, QR connectivity, and responsive UI design.",
    keyPoints: [
      "Designed custom luxury navy-and-gold business cards featuring a bespoke MGU monogram and scannable QR code.",
      "Architected a responsive, minimalistic portfolio with dual dark/light themes and 3D card physics.",
      "Implemented seamless copy-to-clipboard actions, live contact validation, and instant modal sheet rendering.",
      "Built with high accessibility and clean semantic HTML5/CSS3/JavaScript."
    ],
    techStack: ["HTML5", "CSS3 / 3D Transforms", "Vanilla JavaScript", "Personal Branding", "Print Stylesheets"],
    impact: "Presents Martin Gabriel Ubalde to employers with exceptional visual polish, modern interactive responsiveness, and seamless professional contact channels."
  },
  databiz: {
    title: "DATABIZ 2024 - AI & Business Analytics Framework",
    subtitle: "Data Science, AI & Business Intelligence Synthesis",
    image: "assets/projects/project-databiz.svg",
    category: "Data Analytics & Emerging AI",
    overview: "Synthesized cutting-edge takeaways from the DATABIZ Conference 2024 into practical IT service management strategies. Explores how data analytics and artificial intelligence can optimize resource allocation and predict system incidents.",
    keyPoints: [
      "Analyzed predictive models for forecasting IT service ticket volumes and recurring failure points.",
      "Explored Generative AI integration for automated Tier-1 response bots and smart user triage.",
      "Created interactive data visualization dashboards mapping IT operational KPIs.",
      "Certified for active conference participation in Data Science, Artificial Intelligence, and Business Analytics."
    ],
    techStack: ["Data Analytics", "Artificial Intelligence", "Business Intelligence", "KPI Visualization", "Predictive Modeling"],
    impact: "Equips IT leadership with data-backed decision-making tools to transform technical support from reactive troubleshooting to proactive optimization."
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-project-modal');
  const projectCards = document.querySelectorAll('.project-card');

  if (!modal) return;

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const data = projectData[projectId];
      if (!data) return;

      document.getElementById('modal-project-img').src = data.image;
      document.getElementById('modal-project-category').textContent = data.category;
      document.getElementById('modal-project-title').textContent = data.title;
      document.getElementById('modal-project-subtitle').textContent = data.subtitle;
      document.getElementById('modal-project-overview').textContent = data.overview;
      document.getElementById('modal-project-impact').textContent = data.impact;

      const pointsContainer = document.getElementById('modal-project-points');
      pointsContainer.innerHTML = '';
      data.keyPoints.forEach(pt => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${pt}</span>`;
        pointsContainer.appendChild(li);
      });

      const techContainer = document.getElementById('modal-project-tech');
      techContainer.innerHTML = '';
      data.techStack.forEach(t => {
        const span = document.createElement('span');
        span.className = 'skill-pill';
        span.textContent = t;
        techContainer.appendChild(span);
      });

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Resume Modal & Print
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('.open-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const printResumeBtn = document.getElementById('print-resume-btn');

  if (!resumeModal) return;

  function openResume() {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openResumeBtns.forEach(btn => btn.addEventListener('click', openResume));
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);
  
  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
      closeResume();
    }
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   Copy to Clipboard Buttons
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Item';

      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${label} to clipboard!`, 'check');
        }).catch(() => {
          fallbackCopy(textToCopy, label);
        });
      } else {
        fallbackCopy(textToCopy, label);
      }
    });
  });

  function fallbackCopy(text, label) {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${label} to clipboard!`, 'check');
    } catch (err) {
      showToast(`Could not copy: ${text}`, 'exclamation-circle');
    }
    document.body.removeChild(input);
  }
}

/* ==========================================================================
   Contact / Hire Me Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('hire-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('sender-name').value.trim();
    const email = document.getElementById('sender-email').value.trim();
    const role = document.getElementById('sender-role').value;
    const message = document.getElementById('sender-message').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'exclamation-circle');
      return;
    }

    // Interactive button loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending message...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fas fa-check"></i> Inquiry Sent!`;
      submitBtn.style.background = '#10B981';

      showToast(`Thank you, ${name}! Your inquiry has been sent to Martin Gabriel Ubalde.`, 'paper-plane');
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 4000);
    }, 1200);
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message, icon = 'info-circle') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-${icon}"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
