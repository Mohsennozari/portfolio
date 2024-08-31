// Initialize i18next with configuration
i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "home": "Home",
          "about": "About",
          "services": "Services",
          "portfolio": "Portfolio",
          "blog": "Blog",
          "testimonials": "Testimonials",
          "faq": "FAQ",
          "contact": "Contact Us",
          "aboutMe": "About Me",
          "service1": "Web Development",
          "service1Desc": "We create responsive and user-friendly websites.",
          "service2": "UI/UX Design",
          "service2Desc": "We focus on creating intuitive user interfaces.",
          "service3": "E-commerce Solutions",
          "service3Desc": "We offer comprehensive e-commerce solutions.",
          "service4": "SEO & Digital Marketing",
          "service4Desc": "Enhance your online presence with our SEO services.",
          "contact": "Feel free to reach out for a custom solution tailored to your project!",
          "portfolio": "Portfolio",
          "project1": "Weather App",
          "project1Desc": "Stay updated with real-time weather forecasts.",
          "project2": "Note App",
          "project2Desc": "Organize your thoughts and ideas effortlessly.",
          "project3": "Quote App",
          "project3Desc": "Discover and share inspiring quotes.",
          "blog": "Blog",
          "latestPost1": "Understanding CSS Grid Layout",
          "latestPost1Desc": "Explore the fundamentals of CSS Grid Layout.",
          "latestPost2": "JavaScript ES6 Features",
          "latestPost2Desc": "Dive into the new features introduced in JavaScript ES6.",
          "latestPost3": "Building Responsive Websites",
          "latestPost3Desc": "Learn the best practices for building responsive websites.",
          "testimonials": "Testimonials",
          "testimonial1": "“Working with Mohsen Nozari has been a game-changer for our company.”",
          "client1": "Jack, CEO, Tech Innovations",
          "testimonial2": "“Mohsen Nozari delivered our project on time and exceeded our expectations.”",
          "client2": "Tom, Marketing Director, Creative Solutions",
          "testimonial3": "“We are thrilled with the results! Mohsen Nozari was professional and responsive.”",
          "client3": "Bungalow, Project Manager, Bungalow Designs",
          "faq": "Frequently Asked Questions (FAQ)",
          "faqQuestion1": "What is the purpose of this application?",
          "faqAnswer1": "This application is designed to help users manage their tasks efficiently.",
          "faqQuestion2": "How can I reset my password?",
          "faqAnswer2": "To reset your password, go to the login page and click on the 'Forgot Password?' link.",
          "faqQuestion3": "Where can I find user support?",
          "faqAnswer3": "User support can be found on our support page or by contacting our customer service team."
        }
      },
      fa: {
        translation: {
          "welcome": "خوش آمدید",
          "home": "خانه",
          "about": "درباره من",
          "services": "خدمات",
          "portfolio": "پرتفولیو",
          "blog": "وبلاگ",
          "testimonials": "نظرات",
          "faq": "پرسش‌های متداول",
          "contact": "تماس با ما",
          "aboutMe": "درباره من",
          "aboutText": "سلام! من محسن رضایی هستم، یک توسعه‌دهنده فرانت‌اند با بیش از ۵ سال تجربه در ایجاد وب‌سایت‌های زیبا و کاربردی. تخصص من در HTML، CSS، JavaScript و فریمورک‌هایی مانند React و Vue.js است. با اشتیاق به کدنویسی و طراحی، هدف من ارائه وب‌سایت‌های واکنش‌گرا و کاربرپسند است و به‌طور مداوم به دنبال ارتقاء تجربه کاربری هستم. بیایید دنیای دیجیتال را با هم تغییر دهیم!",
          "service1": "توسعه وب",
          "service1Desc": "ما وب‌سایت‌های واکنش‌گرا و کاربرپسند ایجاد می‌کنیم.",
          "service2": "طراحی UI/UX",
          "service2Desc": "ما بر روی ایجاد رابط‌های کاربری شهودی تمرکز داریم.",
          "service3": "راه‌حل‌های تجارت الکترونیک",
          "service3Desc": "ما راه‌حل‌های جامع تجارت الکترونیک ارائه می‌دهیم.",
          "service4": "SEO و بازاریابی دیجیتال",
          "service4Desc": "با خدمات SEO ما، حضور آنلاین خود را تقویت کنید.",
          "contact": "برای دریافت راه‌حل سفارشی متناسب با پروژه‌تان، لطفاً با ما تماس بگیرید!",
          "portfolio": "پرتفولیو",
          "project1": "اپلیکیشن آب و هوا",
          "project1Desc": "با پیش‌بینی‌های آب و هوای لحظه‌ای به‌روز بمانید.",
          "project2": "اپلیکیشن یادداشت",
          "project2Desc": "افکار و ایده‌های خود را به‌راحتی سازماندهی کنید.",
          "project3": "اپلیکیشن نقل قول",
          "project3Desc": "نقل قول‌های الهام‌بخش را کشف و به اشتراک بگذارید.",
          "blog": "وبلاگ",
          "latestPost1": "درک CSS Grid Layout",
          "latestPost1Desc": "با اصول CSS Grid Layout آشنا شوید.",
          "latestPost2": "ویژگی‌های JavaScript ES6",
          "latestPost2Desc": "به ویژگی‌های جدید JavaScript ES6 بپردازید.",
          "latestPost3": "ساخت وب‌سایت‌های واکنش‌گرا",
          "latestPost3Desc": "بهترین شیوه‌ها برای ساخت وب‌سایت‌های واکنش‌گرا را بیاموزید.",
          "testimonials": "نظرات",
          "testimonial1": "“کار با محسن رضایی تغییر بزرگی برای شرکت ما بود.”",
          "client1": "جک، مدیرعامل، Tech Innovations",
          "testimonial2": "“محسن رضایی پروژه ما را به موقع تحویل داد و انتظارات ما را فراتر از آن برآورده کرد.”",
          "client2": "تام، مدیر بازاریابی، Creative Solutions",
          "testimonial3": "“ما از نتایج بسیار خوشحالیم! محسن رضایی حرفه‌ای و پاسخگو بود.”",
          "client3": "Bungalow، مدیر پروژه، Bungalow Designs",
          "faq": "پرسش‌های متداول",
          "faqQuestion1": "هدف این برنامه چیست؟",
          "faqAnswer1": "این برنامه برای کمک به کاربران در مدیریت کارهایشان به‌طور مؤثر طراحی شده است.",
          "faqQuestion2": "چگونه می‌توانم رمز عبورم را بازنشانی کنم؟",
          "faqAnswer2": "برای بازنشانی رمز عبور، به صفحه ورود بروید و بر روی لینک 'رمز عبور را فراموش کرده‌ام؟' کلیک کنید.",
          "faqQuestion3": "کجا می‌توانم پشتیبانی کاربر را پیدا کنم؟",
          "faqAnswer3": "پشتیبانی کاربر در صفحه پشتیبانی ما یا با تماس با تیم خدمات مشتری از طریق ایمیل یا چت قابل دسترسی است."
        }
      },
      ar: {
        translation: {
          "welcome": "مرحبا",
          "home": "الرئيسية",
          "about": "عني",
          "services": "الخدمات",
          "portfolio": "المحفظة",
          "blog": "مدونة",
          "testimonials": "الشهادات",
          "faq": "الأسئلة المتكررة",
          "contact": "اتصل بنا",
          "aboutMe": "عني",
          "aboutText": "مرحبًا! أنا محسن رضائي، مطور واجهات أمامية مع أكثر من 5 سنوات من الخبرة في إنشاء تطبيقات ويب جميلة وعملية. أتخصص في HTML، CSS، JavaScript، وأطر العمل مثل React و Vue.js. بشغف للبرمجة والتصميم، أهدف إلى تقديم مواقع ويب متجاوبة وسهلة الاستخدام وأستمر في السعي لتحسين تجارب المستخدم. دعونا نحول العالم الرقمي معًا!",
          "service1": "تطوير الويب",
          "service1Desc": "نقوم بإنشاء مواقع ويب متجاوبة وسهلة الاستخدام.",
          "service2": "تصميم UI/UX",
          "service2Desc": "نركز على إنشاء واجهات مستخدم بديهية وتجارب مستخدم سلسة.",
          "service3": "حلول التجارة الإلكترونية",
          "service3Desc": "نقدم حلول تجارة إلكترونية شاملة.",
          "service4": "SEO والتسويق الرقمي",
          "service4Desc": "عزز وجودك على الإنترنت من خلال خدمات SEO الخاصة بنا.",
          "contact": "لا تتردد في التواصل للحصول على حل مخصص يتناسب مع مشروعك!",
          "portfolio": "المحفظة",
          "project1": "تطبيق الطقس",
          "project1Desc": "ابق على اطلاع بتوقعات الطقس الحية.",
          "project2": "تطبيق الملاحظات",
          "project2Desc": "نظم أفكارك وملاحظاتك بسهولة.",
          "project3": "تطبيق الاقتباسات",
          "project3Desc": "اكتشف وشارك الاقتباسات الملهمة.",
          "blog": "مدونة",
          "latestPost1": "فهم CSS Grid Layout",
          "latestPost1Desc": "استكشف أساسيات CSS Grid Layout.",
          "latestPost2": "ميزات JavaScript ES6",
          "latestPost2Desc": "تعرف على الميزات الجديدة التي تم تقديمها في JavaScript ES6.",
          "latestPost3": "بناء مواقع ويب متجاوبة",
          "latestPost3Desc": "تعلم أفضل الممارسات لبناء مواقع ويب متجاوبة.",
          "testimonials": "الشهادات",
          "testimonial1": "“العمل مع محسن رضائي كان تحولاً كبيراً لشركتنا.”",
          "client1": "جاك، الرئيس التنفيذي، Tech Innovations",
          "testimonial2": "“محسن رضائي سلم مشروعنا في الوقت المحدد وتجاوز توقعاتنا.”",
          "client2": "توم، مدير التسويق، Creative Solutions",
          "testimonial3": "“نحن متحمسون للنتائج! كان محسن رضائي محترفاً وسريع الاستجابة.”",
          "client3": "Bungalow، مدير المشروع، Bungalow Designs",
          "faq": "الأسئلة المتكررة",
          "faqQuestion1": "ما هو هدف هذا التطبيق؟",
          "faqAnswer1": "تم تصميم هذا التطبيق لمساعدة المستخدمين في إدارة مهامهم بكفاءة.",
          "faqQuestion2": "كيف يمكنني إعادة تعيين كلمة المرور الخاصة بي؟",
          "faqAnswer2": "لإعادة تعيين كلمة المرور الخاصة بك، انتقل إلى صفحة تسجيل الدخول واضغط على رابط 'نسيت كلمة المرور؟'.",
          "faqQuestion3": "أين يمكنني العثور على دعم المستخدم؟",
          "faqAnswer3": "يمكنك العثور على دعم المستخدم في صفحة الدعم لدينا أو من خلال الاتصال بفريق خدمة العملاء."
        }
      }
    }
  }, function(err, t) {
    if (err) return console.error(err);
    updateContent();
  });

// Function to update content based on the current language
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerText = i18next.t(key);
  });

  // Update year in footer
  document.getElementById('year').innerText = new Date().getFullYear();
}

// Handle language selection
document.querySelectorAll('[data-lang]').forEach(el => {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    const lang = this.getAttribute('data-lang');
    i18next.changeLanguage(lang, () => {
      updateContent();
    });
  });
});

// Handle theme toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Animate content on page load
document.addEventListener('DOMContentLoaded', () => {
  // Animate About section
  const aboutSection = document.getElementById('about');
  const leadText = aboutSection.querySelector('.lead');
  const profileImage = aboutSection.querySelector('.img-fluid');

  setTimeout(() => {
    aboutSection.style.opacity = '1';
  }, 500); // Delay for container

  setTimeout(() => {
    leadText.style.opacity = '1';
  }, 1000); // Delay for text

  setTimeout(() => {
    profileImage.style.opacity = '1';
  }, 1500); // Delay for image

  // Animate Service cards on scroll
  const serviceCards = document.querySelectorAll('.service-card');

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  };

  // Add event listener for scroll to trigger animations
  const handleScroll = () => {
    serviceCards.forEach((card) => {
      if (isInViewport(card)) {
        card.style.opacity = '1'; // Make the card visible
      }
    });
  };

  // Run the function on scroll
  window.addEventListener('scroll', handleScroll);
  // Trigger animation on page load
  handleScroll();
});
