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
  "service1Desc": "We build responsive, user-friendly websites tailored to your needs.",
  "service2": "UI/UX Design",
  "service2Desc": "Creating intuitive and engaging user interfaces that enhance user experience.",
  "service3": "E-commerce Solutions",
  "service3Desc": "Offering robust and scalable e-commerce platforms to grow your business online.",
  "service4": "SEO & Digital Marketing",
  "service4Desc": "Boost your online visibility and drive traffic with our SEO and digital marketing strategies.",
  "contact": "Get in touch to discuss a custom solution tailored to your project!",
  "portfolio": "Portfolio",
  "project1": "Weather App",
  "project1Desc": "Stay informed with accurate and real-time weather updates.",
  "project2": "Note App",
  "project2Desc": "Easily capture and organize your notes and ideas.",
  "project3": "Quote App",
  "project3Desc": "Explore and share a curated collection of inspiring quotes.",
  "blog": "Blog",
  "latestPost1": "Mastering CSS Grid Layout",
  "latestPost1Desc": "Learn the essentials of CSS Grid Layout to enhance your web design skills.",
  "latestPost2": "Exploring JavaScript ES6 Features",
  "latestPost2Desc": "A comprehensive guide to the powerful new features introduced in JavaScript ES6.",
  "latestPost3": "Building Responsive Websites",
  "latestPost3Desc": "Discover best practices and techniques for creating responsive websites.",
  "testimonials": "Testimonials",
  "testimonial1": "“Working with Mohsen Nozari transformed our business. The new website not only looks stunning but performs flawlessly.”",
  "client1": "Jack, CEO of Tech Innovations",
  "testimonial2": "“Mohsen Nozari exceeded our expectations by delivering high-quality work on time, with exceptional creativity.”",
  "client2": "Tom, Marketing Director at Creative Solutions",
  "testimonial3": "“The results are fantastic! Mohsen Nozari was highly professional, responsive, and aligned with our vision.”",
  "client3": "Bungalow, Project Manager at Bungalow Designs",
  "faq": "Frequently Asked Questions (FAQ)",
  "faqQuestion1": "What is the purpose of this application?",
  "faqAnswer1": "This application is designed to help users efficiently manage and organize their tasks.",
  "faqQuestion2": "How can I reset my password?",
  "faqAnswer2": "To reset your password, visit the login page and select 'Forgot Password?' to proceed.",
  "faqQuestion3": "Where can I find user support?",
  "faqAnswer3": "User support is available on our support page or by contacting our customer service team directly."
}

      },
      fa: {
        translation:{
  "welcome": "خوش آمدید",
  "home": "خانه",
  "about": "درباره ما",
  "services": "خدمات",
  "portfolio": "نمونه کارها",
  "blog": "وبلاگ",
  "testimonials": "نظرات مشتریان",
  "faq": "پرسش‌های متداول",
  "contact": "تماس با ما",
  "aboutMe": "درباره من",
  "aboutText": "سلام! من محسن رضایی هستم، توسعه‌دهنده فرانت‌اند با بیش از ۵ سال تجربه در طراحی و ایجاد وب‌سایت‌های زیبا و کاربردی. تخصص من در HTML، CSS، JavaScript و فریمورک‌هایی مانند React و Vue.js است. با علاقه‌مندی به کدنویسی و طراحی، هدف من ارائه وب‌سایت‌های واکنش‌گرا و کاربرپسند است. همواره به دنبال بهبود تجربه کاربری هستم. بیایید با هم دنیای دیجیتال را تغییر دهیم!",
  "service1": "توسعه وب",
  "service1Desc": "ما وب‌سایت‌های واکنش‌گرا و کاربرپسند با کیفیت بالا طراحی و توسعه می‌دهیم.",
  "service2": "طراحی رابط کاربری و تجربه کاربری (UI/UX)",
  "service2Desc": "ما در طراحی رابط‌های کاربری شهودی و تجربه کاربری بهینه تخصص داریم.",
  "service3": "راه‌حل‌های تجارت الکترونیک",
  "service3Desc": "ما راه‌حل‌های کامل و کارآمد برای تجارت الکترونیک ارائه می‌دهیم.",
  "service4": "سئو و بازاریابی دیجیتال",
  "service4Desc": "با استفاده از خدمات سئو و بازاریابی دیجیتال ما، حضور آنلاین خود را تقویت کنید.",
  "contact": "برای دریافت راه‌حل سفارشی و متناسب با نیاز پروژه‌تان، با ما تماس بگیرید!",
  "portfolio": "نمونه کارها",
  "project1": "اپلیکیشن آب و هوا",
  "project1Desc": "با پیش‌بینی‌های دقیق و لحظه‌ای آب و هوا به‌روز بمانید.",
  "project2": "اپلیکیشن یادداشت",
  "project2Desc": "یادداشت‌ها و ایده‌های خود را به‌سادگی سازماندهی کنید.",
  "project3": "اپلیکیشن نقل قول",
  "project3Desc": "نقل قول‌های الهام‌بخش را کشف کرده و با دیگران به اشتراک بگذارید.",
  "blog": "وبلاگ",
  "latestPost1": "آشنایی با CSS Grid Layout",
  "latestPost1Desc": "اصول CSS Grid Layout را برای بهبود طراحی وب‌سایت خود بیاموزید.",
  "latestPost2": "ویژگی‌های جدید در JavaScript ES6",
  "latestPost2Desc": "با ویژگی‌های جدید و قدرتمند جاوا اسکریپت ES6 آشنا شوید.",
  "latestPost3": "راهنمای ساخت وب‌سایت‌های واکنش‌گرا",
  "latestPost3Desc": "بهترین شیوه‌ها و تکنیک‌ها برای طراحی وب‌سایت‌های واکنش‌گرا را کشف کنید.",
  "testimonials": "نظرات مشتریان",
  "testimonial1": "“کار با محسن رضایی تحولی بزرگ برای شرکت ما بود. وب‌سایت جدید نه‌تنها زیبا بلکه عملکرد بی‌نظیری دارد.”",
  "client1": "جک، مدیرعامل Tech Innovations",
  "testimonial2": "“محسن رضایی پروژه ما را به‌موقع و با کیفیت بالا تحویل داد و انتظارات ما را فراتر از حد برآورده کرد.”",
  "client2": "تام، مدیر بازاریابی Creative Solutions",
  "testimonial3": "“از نتایج نهایی بسیار راضی هستیم! محسن رضایی کاملاً حرفه‌ای و پاسخگو بود و دقیقاً مطابق با دیدگاه ما عمل کرد.”",
  "client3": "Bungalow، مدیر پروژه Bungalow Designs",
  "faq": "پرسش‌های متداول",
  "faqQuestion1": "هدف این برنامه چیست؟",
  "faqAnswer1": "این برنامه برای کمک به کاربران در مدیریت مؤثر و سازماندهی کارهایشان طراحی شده است.",
  "faqQuestion2": "چگونه می‌توانم رمز عبورم را بازنشانی کنم؟",
  "faqAnswer2": "برای بازنشانی رمز عبور، به صفحه ورود مراجعه کنید و روی 'رمز عبور را فراموش کرده‌ام؟' کلیک کنید.",
  "faqQuestion3": "چگونه می‌توانم به پشتیبانی کاربران دسترسی داشته باشم؟",
  "faqAnswer3": "پشتیبانی کاربران در صفحه پشتیبانی ما یا از طریق تماس با تیم خدمات مشتریان از طریق ایمیل یا چت در دسترس است."
}

      },
      ar: {
        translation: {
  "welcome": "مرحباً بك",
  "home": "الرئيسية",
  "about": "من أنا",
  "services": "الخدمات",
  "portfolio": "الأعمال",
  "blog": "المدونة",
  "testimonials": "آراء العملاء",
  "faq": "الأسئلة الشائعة",
  "contact": "تواصل معنا",
  "aboutMe": "من أنا",
  "aboutText": "مرحبًا! أنا محسن رضائي، مطور واجهات أمامية مع أكثر من 5 سنوات من الخبرة في تصميم وتطوير مواقع ويب جميلة وعملية. أتخصص في HTML، CSS، JavaScript، وأطر العمل مثل React وVue.js. بشغفي في البرمجة والتصميم، أهدف إلى تقديم مواقع ويب متجاوبة وسهلة الاستخدام مع التركيز على تحسين تجربة المستخدم بشكل مستمر. دعونا نعمل معاً لتحويل العالم الرقمي!",
  "service1": "تطوير مواقع الويب",
  "service1Desc": "نقوم بإنشاء مواقع ويب متجاوبة وسهلة الاستخدام لتلبية احتياجاتك.",
  "service2": "تصميم تجربة المستخدم (UI/UX)",
  "service2Desc": "نركز على تصميم واجهات مستخدم بديهية وتجارب مستخدم سلسة.",
  "service3": "حلول التجارة الإلكترونية",
  "service3Desc": "نقدم حلول متكاملة وفعالة للتجارة الإلكترونية.",
  "service4": "تحسين محركات البحث (SEO) والتسويق الرقمي",
  "service4Desc": "عزز تواجدك الرقمي مع خدمات SEO والتسويق الرقمي التي نقدمها.",
  "contact": "لا تتردد في التواصل معنا للحصول على حل مخصص يناسب احتياجات مشروعك!",
  "portfolio": "الأعمال",
  "project1": "تطبيق الطقس",
  "project1Desc": "ابقَ على اطلاع بتوقعات الطقس المباشرة والدقيقة.",
  "project2": "تطبيق الملاحظات",
  "project2Desc": "نظم أفكارك وملاحظاتك بسهولة وبشكل فعال.",
  "project3": "تطبيق الاقتباسات",
  "project3Desc": "اكتشف وشارك الاقتباسات الملهمة مع الآخرين.",
  "blog": "المدونة",
  "latestPost1": "التعرف على CSS Grid Layout",
  "latestPost1Desc": "تعرف على أساسيات CSS Grid Layout لتحسين تصميم موقعك.",
  "latestPost2": "أهم ميزات JavaScript ES6",
  "latestPost2Desc": "تعرف على الميزات الجديدة والفعالة في JavaScript ES6.",
  "latestPost3": "كيفية بناء مواقع ويب متجاوبة",
  "latestPost3Desc": "تعلم أفضل الممارسات لتطوير مواقع ويب متجاوبة وعصرية.",
  "testimonials": "آراء العملاء",
  "testimonial1": "“التعاون مع محسن رضائي أحدث تحولاً كبيراً لشركتنا. الموقع الجديد ليس فقط جميل المظهر بل يعمل بشكل ممتاز.”",
  "client1": "جاك، الرئيس التنفيذي، Tech Innovations",
  "testimonial2": "“أنجز محسن رضائي مشروعنا في الوقت المحدد وبجودة عالية فاقت توقعاتنا.”",
  "client2": "توم، مدير التسويق، Creative Solutions",
  "testimonial3": "“نحن مسرورون جداً بالنتائج! كان محسن رضائي محترفاً ومتجاوباً للغاية وتفهم رؤيتنا بالكامل.”",
  "client3": "Bungalow، مدير المشروع، Bungalow Designs",
  "faq": "الأسئلة الشائعة",
  "faqQuestion1": "ما هو الهدف من هذا التطبيق؟",
  "faqAnswer1": "يهدف هذا التطبيق إلى مساعدة المستخدمين على إدارة مهامهم بكفاءة وفعالية.",
  "faqQuestion2": "كيف يمكنني إعادة تعيين كلمة المرور الخاصة بي؟",
  "faqAnswer2": "لإعادة تعيين كلمة المرور، يرجى الذهاب إلى صفحة تسجيل الدخول والنقر على 'نسيت كلمة المرور؟'.",
  "faqQuestion3": "أين يمكنني العثور على دعم المستخدم؟",
  "faqAnswer3": "يمكنك الحصول على دعم المستخدم من خلال صفحة الدعم الخاصة بنا أو عن طريق الاتصال بفريق خدمة العملاء عبر البريد الإلكتروني أو الدردشة."
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
