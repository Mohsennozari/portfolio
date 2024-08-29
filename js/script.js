// Initialize i18next with configuration
i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          welcome: "Welcome to My Portfolio",
          intro: "I am [Your Name], a [Your Profession/Field]. Let’s create something amazing together!",
          aboutMe: "About Me",
          aboutText: "I am a passionate [Your Profession] with [X years] of experience in [Your Field/Industry]. My journey began when [Brief background story or motivation]. I specialize in [Your Specializations].",
          services: "Services",
          service1: "Service 1",
          service1Desc: "[Brief description of Service 1]",
          service2: "Service 2",
          service2Desc: "[Brief description of Service 2]",
          service3: "Service 3",
          service3Desc: "[Brief description of Service 3]",
          service4: "Service 4",
          service4Desc: "[Brief description of Service 4]",
          contact: "Feel free to reach out for a custom solution tailored to your project!",
          portfolio: "Portfolio",
          project1: "Project 1",
          project1Desc: "[Brief description and link to the project]",
          project2: "Project 2",
          project2Desc: "[Brief description and link to the project]",
          project3: "Project 3",
          project3Desc: "[Brief description and link to the project]",
          blog: "Blog",
          latestPost1: "Latest Post 1",
          latestPost1Desc: "[Brief description of the post and a link to read more]",
          latestPost2: "Latest Post 2",
          latestPost2Desc: "[Brief description of the post and a link to read more]",
          latestPost3: "Latest Post 3",
          latestPost3Desc: "[Brief description of the post and a link to read more]",
          testimonials: "Testimonials",
          testimonial1: "“Testimonial from Client 1 about your work.”",
          client1: "Client 1",
          testimonial2: "“Testimonial from Client 2 about your work.”",
          client2: "Client 2",
          faq: "FAQ",
          faqQuestion1: "Question 1?",
          faqAnswer1: "Answer to question 1.",
          faqQuestion2: "Question 2?",
          faqAnswer2: "Answer to question 2.",
          faqQuestion3: "Question 3?",
          faqAnswer3: "Answer to question 3.",
          contact: "Contact Us",
          contactText: "I would love to hear from you! Whether you have a question or want to discuss a project, feel free to reach out.",
          email: "Email:",
          phone: "Phone:",
          socialMedia: "Social Media:",
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
          language: "Language"
        }
      },
      fa: {
        translation: {
          welcome: "به پرتفوی من خوش آمدید",
          intro: "من [نام شما] هستم، [حرفه/زمینه شما]. بیایید چیزی شگفت‌انگیز بسازیم!",
          aboutMe: "درباره من",
          aboutText: "من یک [حرفه شما] پرشور با [X سال] تجربه در [حوزه/صنعت شما] هستم. سفر من زمانی آغاز شد که [داستان یا انگیزه مختصر]. من در [تخصص‌های شما] تخصص دارم.",
          services: "خدمات",
          service1: "خدمت 1",
          service1Desc: "[توضیح مختصر درباره خدمت 1]",
          service2: "خدمت 2",
          service2Desc: "[توضیح مختصر درباره خدمت 2]",
          service3: "خدمت 3",
          service3Desc: "[توضیح مختصر درباره خدمت 3]",
          service4: "خدمت 4",
          service4Desc: "[توضیح مختصر درباره خدمت 4]",
          contact: "لطفاً برای دریافت راه‌حل سفارشی متناسب با پروژه خود با من تماس بگیرید!",
          portfolio: "پرتفوی",
          project1: "پروژه 1",
          project1Desc: "[توضیح مختصر و لینک به پروژه]",
          project2: "پروژه 2",
          project2Desc: "[توضیح مختصر و لینک به پروژه]",
          project3: "پروژه 3",
          project3Desc: "[توضیح مختصر و لینک به پروژه]",
          blog: "وبلاگ",
          latestPost1: "آخرین پست 1",
          latestPost1Desc: "[توضیح مختصر درباره پست و لینک برای خواندن بیشتر]",
          latestPost2: "آخرین پست 2",
          latestPost2Desc: "[توضیح مختصر درباره پست و لینک برای خواندن بیشتر]",
          latestPost3: "آخرین پست 3",
          latestPost3Desc: "[توضیح مختصر درباره پست و لینک برای خواندن بیشتر]",
          testimonials: "نظرات",
          testimonial1: "“نظر مشتری 1 درباره کار شما.”",
          client1: "مشتری 1",
          testimonial2: "“نظر مشتری 2 درباره کار شما.”",
          client2: "مشتری 2",
          faq: "پرسش‌های متداول",
          faqQuestion1: "پرسش 1؟",
          faqAnswer1: "پاسخ به پرسش 1.",
          faqQuestion2: "پرسش 2؟",
          faqAnswer2: "پاسخ به پرسش 2.",
          faqQuestion3: "پرسش 3؟",
          faqAnswer3: "پاسخ به پرسش 3.",
          contact: "تماس با ما",
          contactText: "مشتاقانه منتظر شنیدن از شما هستم! اگر سوالی دارید یا می‌خواهید پروژه‌ای را بحث کنید، لطفاً با من تماس بگیرید.",
          email: "ایمیل:",
          phone: "تلفن:",
          socialMedia: "شبکه‌های اجتماعی:",
          privacyPolicy: "سیاست حفظ حریم خصوصی",
          termsOfService: "شرایط خدمات",
          language: "زبان"
        }
      },
      ar: {
        translation: {
          welcome: "مرحبا بك في محفظتي",
          intro: "أنا [اسمك]، [مجالك/مهنة]. دعنا نخلق شيئًا رائعًا معًا!",
          aboutMe: "عني",
          aboutText: "أنا [مجالك] المتحمس مع [X سنوات] من الخبرة في [مجال/صناعة]. بدأت رحلتي عندما [قصة خلفية قصيرة أو حافز]. أخصص في [تخصصاتك].",
          services: "الخدمات",
          service1: "الخدمة 1",
          service1Desc: "[وصف موجز للخدمة 1]",
          service2: "الخدمة 2",
          service2Desc: "[وصف موجز للخدمة 2]",
          service3: "الخدمة 3",
          service3Desc: "[وصف موجز للخدمة 3]",
          service4: "الخدمة 4",
          service4Desc: "[وصف موجز للخدمة 4]",
          contact: "لا تتردد في التواصل للحصول على حل مخصص لمشروعك!",
          portfolio: "محفظة الأعمال",
          project1: "المشروع 1",
          project1Desc: "[وصف موجز ورابط للمشروع]",
          project2: "المشروع 2",
          project2Desc: "[وصف موجز ورابط للمشروع]",
          project3: "المشروع 3",
          project3Desc: "[وصف موجز ورابط للمشروع]",
          blog: "المدونة",
          latestPost1: "أحدث منشور 1",
          latestPost1Desc: "[وصف موجز للمنشور ورابط لقراءة المزيد]",
          latestPost2: "أحدث منشور 2",
          latestPost2Desc: "[وصف موجز للمنشور ورابط لقراءة المزيد]",
          latestPost3: "أحدث منشور 3",
          latestPost3Desc: "[وصف موجز للمنشور ورابط لقراءة المزيد]",
          testimonials: "الشهادات",
          testimonial1: "“شهادة من العميل 1 حول عملك.”",
          client1: "العميل 1",
          testimonial2: "“شهادة من العميل 2 حول عملك.”",
          client2: "العميل 2",
          faq: "الأسئلة المتكررة",
          faqQuestion1: "سؤال 1؟",
          faqAnswer1: "الإجابة على السؤال 1.",
          faqQuestion2: "سؤال 2؟",
          faqAnswer2: "الإجابة على السؤال 2.",
          faqQuestion3: "سؤال 3؟",
          faqAnswer3: "الإجابة على السؤال 3.",
          contact: "اتصل بنا",
          contactText: "سأكون سعيدًا بسماع أخبارك! سواء كان لديك سؤال أو تريد مناقشة مشروع، لا تتردد في التواصل.",
          email: "البريد الإلكتروني:",
          phone: "الهاتف:",
          socialMedia: "وسائل التواصل الاجتماعي:",
          privacyPolicy: "سياسة الخصوصية",
          termsOfService: "شروط الخدمة",
          language: "اللغة"
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
