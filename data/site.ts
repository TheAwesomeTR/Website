import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  HeartHandshake,
  MessagesSquare,
  MoonStar,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";

export const siteConfig = {
  name: "Gönül İlhan",
  title: "Numeroloji Uzmanı",
  email: "egitim@gonulilhan.com",
  phone: "+90 533 048 64 56",
  whatsapp: "+90 533 048 64 56",
  instagram: "@gonulilhan7",
  location: "İstanbul / Online görüşme",
  workingHours: "Hafta içi 10.00 - 18.00",
  description:
    "Numerolojiyi kişisel farkındalık, içgörü ve yaşam döngülerini anlamlandırma yöntemi olarak ele alan danışmanlık ve eğitim deneyimleri."
};

export const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Gönül İlhan", href: "/gonul-ilhan" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "Yorumlar", href: "/yorumlar" },
  { label: "Yazılar", href: "/yazilar" },
  { label: "İletişim", href: "/iletisim" }
];

export const trustIndicators = [
  {
    value: "1:1",
    label: "Bireysel danışmanlıklar",
    description: "Kişisel harita ve dönem farkındalığına odaklanan özel seanslar."
  },
  {
    value: "4+",
    label: "Eğitim programları",
    description: "Temelden uygulamaya uzanan numeroloji eğitim akışı."
  },
  {
    value: "Online",
    label: "Seans imkânı",
    description: "Türkiye ve yurt dışından katılım için esnek görüşme seçeneği."
  },
  {
    value: "4.9",
    label: "Katılımcı yorumları",
    description: "Sade, anlaşılır ve güvenli alan hissiyle aktarılan deneyimler."
  }
];

export type Service = {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration: string;
  format: string;
  audience: string;
  includes: string[];
  icon: typeof Sparkles;
};

export const services: Service[] = [
  {
    title: "Bireysel Numeroloji Danışmanlığı",
    slug: "bireysel-numeroloji-danismanligi",
    shortDescription:
      "Doğum tarihi ve isim titreşimleri üzerinden kişisel potansiyel, güçlü yönler ve dönemsel temalar üzerine farkındalık seansı.",
    description:
      "Bu danışmanlık, numerolojik haritanı bir öz farkındalık rehberi olarak okumaya odaklanır. Yaşam yolun, kişisel ritimlerin ve bugün hayatında görünür olan temalar sakin bir dille ele alınır.",
    duration: "75 dakika",
    format: "Online veya yüz yüze",
    audience:
      "Kendini daha iyi tanımak, karar süreçlerine içgörü katmak ve yaşam döngülerini anlamlandırmak isteyenler.",
    includes: [
      "Kişisel numeroloji haritası okuması",
      "Seans sonrası kısa özet notları",
      "Farkındalık odaklı uygulama önerileri"
    ],
    icon: Sparkles
  },
  {
    title: "İlişki ve Uyum Analizi",
    slug: "iliski-ve-uyum-analizi",
    shortDescription:
      "İlişki dinamiklerini, iletişim ritimlerini ve tamamlayıcı yönleri daha bilinçli görmeye yardımcı olan özel analiz.",
    description:
      "İki kişinin numerolojik temaları arasındaki benzerlikler, farklılıklar ve iletişim alanları değerlendirilir. Amaç ilişkiyi etiketlemek değil, karşılıklı anlayışı desteklemektir.",
    duration: "90 dakika",
    format: "Online veya yüz yüze",
    audience:
      "Partner, aile, ortaklık veya yakın ilişki dinamiklerine daha bilinçli bakmak isteyenler.",
    includes: [
      "İki kişilik uyum haritası",
      "İletişim ve denge alanları",
      "Yapıcı farkındalık önerileri"
    ],
    icon: HeartHandshake
  },
  {
    title: "Kişisel Yıl ve Döngü Danışmanlığı",
    slug: "kisisel-yil-ve-dongu-danismanligi",
    shortDescription:
      "İçinde bulunulan yılın numerolojik temasını, destekleyici karar alanlarını ve ritmini anlamaya yönelik seans.",
    description:
      "Kişisel yıl, ay ve dönem temaları üzerinden içinde bulunduğun zamanın sembolik dilini okur. Seans, planlama ve niyet belirleme süreçlerini daha bilinçli hale getirmek için tasarlanır.",
    duration: "60 dakika",
    format: "Online",
    audience:
      "Yeni bir dönem, iş değişimi, ilişki kararı veya yaratıcı başlangıç öncesinde netleşmek isteyenler.",
    includes: [
      "Kişisel yıl teması",
      "Dönemsel fırsat ve dikkat alanları",
      "Pratik niyet ve odak önerileri"
    ],
    icon: CalendarDays
  },
  {
    title: "Kurumsal / Grup Atölyeleri",
    slug: "kurumsal-grup-atolyeleri",
    shortDescription:
      "Ekip içi farkındalık, iletişim ve kişisel gelişim odağında hazırlanan numeroloji temelli atölyeler.",
    description:
      "Grup çalışmaları, numerolojiyi anlaşılır ve deneyimlenebilir bir kişisel gelişim dili olarak sunar. İçerik kurumun veya grubun ihtiyacına göre yapılandırılır.",
    duration: "2-3 saat veya özel program",
    format: "Online, yüz yüze veya hibrit",
    audience:
      "Kurumsal ekipler, kadın çemberleri, kişisel gelişim toplulukları ve özel gruplar.",
    includes: [
      "Gruba özel konu akışı",
      "Etkileşimli mini uygulamalar",
      "Katılımcılar için çalışma sayfası"
    ],
    icon: UsersRound
  }
];

export type Training = {
  title: string;
  slug: string;
  shortDescription: string;
  level: string;
  duration: string;
  format: string;
  audience: string;
  learn: string[];
  modules: string[];
  outcomes: string[];
  price: string;
  faqs: { question: string; answer: string }[];
};

export const trainings: Training[] = [
  {
    title: "Numerolojiye Giriş Eğitimi",
    slug: "numerolojiye-giris-egitimi",
    shortDescription:
      "Sayıların sembolik dilini öğrenmek ve kendi haritanı temel seviyede okumaya başlamak isteyenler için zarif bir başlangıç.",
    level: "Başlangıç",
    duration: "4 hafta",
    format: "Canlı online",
    audience:
      "Numerolojiyle ilk kez tanışanlar, kişisel farkındalık çalışmalarına yeni bir araç eklemek isteyenler.",
    learn: [
      "Temel sayı arketipleri",
      "Doğum tarihi üzerinden yaşam yolu okuması",
      "Kişisel yıl kavramı",
      "Etik ve güvenli yorumlama dili"
    ],
    modules: [
      "Numerolojinin kişisel gelişimdeki yeri",
      "1-9 sayı arketipleri ve gölge/destek alanları",
      "Yaşam yolu, gün ve ay titreşimleri",
      "Kişisel yıl döngüsü ve örnek harita çalışmaları"
    ],
    outcomes: [
      "Kendi temel numeroloji haritanı okuyabilirsin.",
      "Sayıları deterministik değil, farkındalık dili olarak kullanırsın.",
      "Günlük yaşamda sade uygulamalar geliştirebilirsin."
    ],
    price: "Yakında duyurulacak",
    faqs: [
      {
        question: "Ön bilgi gerekiyor mu?",
        answer:
          "Hayır. Eğitim, numerolojiye merak duyan herkesin rahatça takip edebileceği seviyede başlar."
      },
      {
        question: "Kayıtlar paylaşılacak mı?",
        answer:
          "Canlı katılım önerilir. Kayıt paylaşımı dönemsel programa göre ayrıca duyurulur."
      }
    ]
  },
  {
    title: "İleri Seviye Numeroloji Eğitimi",
    slug: "ileri-seviye-numeroloji-egitimi",
    shortDescription:
      "Temel bilgisi olan katılımcılar için yorumlama derinliği, harita sentezi ve danışmanlık dili odaklı program.",
    level: "İleri",
    duration: "8 hafta",
    format: "Canlı online + uygulama",
    audience:
      "Temel numeroloji bilgisine sahip, harita okuma becerisini derinleştirmek isteyen katılımcılar.",
    learn: [
      "Harita sentezi",
      "Döngülerin birlikte yorumlanması",
      "Danışmanlık etiği",
      "Uygulamalı örnek okumalar"
    ],
    modules: [
      "Derin sayı kombinasyonları",
      "İsim titreşimleri ve ifade alanları",
      "Kişisel yıl, ay ve dönem sentezi",
      "Vaka çalışmaları ve yorumlama pratiği"
    ],
    outcomes: [
      "Harita parçalarını bütünlüklü okumaya başlarsın.",
      "Daha sakin, etik ve danışan odaklı bir yorum dili geliştirirsin.",
      "Uygulamalı örneklerle özgüven kazanırsın."
    ],
    price: "Kontenjana göre duyurulacak",
    faqs: [
      {
        question: "Başlangıç eğitimi zorunlu mu?",
        answer:
          "Gönül İlhan'dan ya da başka bir kaynaktan temel numeroloji eğitimi almış olmak önerilir."
      },
      {
        question: "Uygulama ödevleri var mı?",
        answer:
          "Evet. Program, öğrenilen bilgilerin örnek haritalar üzerinde uygulanmasıyla ilerler."
      }
    ]
  },
  {
    title: "Kişisel Harita Okuma Atölyesi",
    slug: "kisisel-harita-okuma-atolyesi",
    shortDescription:
      "Kendi doğum tarihi ve isim titreşimlerinle çalışarak haritanı rehber eşliğinde keşfedeceğin yoğun atölye.",
    level: "Tüm seviyeler",
    duration: "1 gün",
    format: "Online veya yüz yüze",
    audience:
      "Kendi haritası üzerinde çalışarak öğrenmek isteyen, deneyim odaklı katılımcılar.",
    learn: [
      "Kendi temel sayılarını yorumlama",
      "Güçlü ve geliştirilmesi gereken alanları fark etme",
      "Kişisel yıl temasını okuma",
      "Günlük yaşama aktarım önerileri"
    ],
    modules: [
      "Kısa numeroloji temeli",
      "Kişisel harita çalışma sayfası",
      "Grup içinde örnek okumalar",
      "Kapanış niyeti ve uygulama planı"
    ],
    outcomes: [
      "Haritanı daha anlaşılır bir çerçevede görürsün.",
      "Sayıların sende hangi temalara işaret ettiğini keşfedersin.",
      "Kişisel gelişim yolculuğuna pratik bir farkındalık alanı eklersin."
    ],
    price: "Atölye tarihine göre değişir",
    faqs: [
      {
        question: "Atölye kişisel bilgileri içeriyor mu?",
        answer:
          "Evet, doğum tarihi ve isim üzerinden çalışılır. Paylaşım sınırları katılımcının rahatlığına göre korunur."
      },
      {
        question: "Defter veya materyal gerekiyor mu?",
        answer:
          "Bir defter ve kalem yeterlidir. Çalışma sayfası program öncesinde paylaşılır."
      }
    ]
  },
  {
    title: "Uygulamalı Numeroloji Programı",
    slug: "uygulamali-numeroloji-programi",
    shortDescription:
      "Harita okuma pratiğini artırmak, soru-cevap alanı açmak ve danışmanlık becerisini geliştirmek isteyenler için uygulama programı.",
    level: "Orta / İleri",
    duration: "6 hafta",
    format: "Küçük grup",
    audience:
      "Numerolojiyi öğrenmiş fakat daha fazla pratik, geri bildirim ve yorumlama özgüveni isteyenler.",
    learn: [
      "Canlı harita okuma pratiği",
      "Soru sorma ve dinleme becerisi",
      "Yorumları sadeleştirme",
      "Danışan güvenliği ve sınırlar"
    ],
    modules: [
      "Harita okuma akışı tasarlama",
      "Katılımcı haritalarıyla uygulama",
      "Zor sorulara etik yanıt verme",
      "Kapanış değerlendirmesi ve gelişim planı"
    ],
    outcomes: [
      "Yorumlama kasını düzenli pratikle güçlendirirsin.",
      "Karmaşık bilgiyi danışana sade aktarmayı öğrenirsin.",
      "Kendi danışmanlık duruşunu netleştirmeye başlarsın."
    ],
    price: "Başvuru sonrası paylaşılır",
    faqs: [
      {
        question: "Kontenjan var mı?",
        answer:
          "Evet. Geri bildirim kalitesini korumak için küçük grup formatında ilerler."
      },
      {
        question: "Sertifika veriliyor mu?",
        answer:
          "Katılım belgesi program duyurusunda belirtilen koşullara göre paylaşılır."
      }
    ]
  }
];

export type Testimonial = {
  name: string;
  role: string;
  category: "Bireysel Danışmanlık" | "Eğitim" | "Atölye";
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aylin K.",
    role: "Bireysel danışmanlık katılımcısı",
    category: "Bireysel Danışmanlık",
    rating: 5,
    quote:
      "Seans boyunca kendimi yargılanmadan dinlenmiş hissettim. Haritamdaki temalar günlük hayatımla çok sade ve anlamlı biçimde ilişkilendirildi."
  },
  {
    name: "Merve D.",
    role: "Numerolojiye Giriş Eğitimi",
    category: "Eğitim",
    rating: 5,
    quote:
      "Gönül Hanım karmaşık görünen konuları çok zarif bir dille anlatıyor. Eğitimden sonra sayılara bakışım daha bilinçli ve dengeli oldu."
  },
  {
    name: "Selin A.",
    role: "Harita okuma atölyesi",
    category: "Atölye",
    rating: 5,
    quote:
      "Atölye hem içten hem de çok iyi yapılandırılmıştı. Kendi haritam üzerinde çalışmak güçlü bir farkındalık alanı açtı."
  },
  {
    name: "Ece B.",
    role: "Kişisel yıl danışmanlığı",
    category: "Bireysel Danışmanlık",
    rating: 5,
    quote:
      "Önümdeki dönemi korku değil, daha sakin bir planlama hissiyle değerlendirmeme yardımcı oldu."
  },
  {
    name: "Burcu T.",
    role: "İleri Seviye Eğitim",
    category: "Eğitim",
    rating: 5,
    quote:
      "Sadece bilgi değil, danışmanlıkta nasıl bir dil kuracağımı da öğrendim. En değerli tarafı buydu."
  },
  {
    name: "Deniz Ç.",
    role: "Grup atölyesi katılımcısı",
    category: "Atölye",
    rating: 5,
    quote:
      "Grup içinde herkesin kendinden bir şey bulduğu, dengeli ve güvenli bir çalışma oldu."
  }
];

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Numeroloji Nedir?",
    slug: "numeroloji-nedir",
    excerpt:
      "Numerolojiyi kehanet değil, sayıların sembolik dili üzerinden kişisel farkındalık geliştiren bir bakış açısı olarak ele alalım.",
    category: "Numeroloji Temelleri",
    date: "12 Mayıs 2026",
    readingTime: "4 dk",
    content: [
      "Numeroloji, sayıların sembolik anlamları üzerinden kişinin yaşamındaki temaları, güçlü yanları ve dönemsel ritimleri anlamlandırmaya çalışan kadim bir farkındalık dilidir. Bu yaklaşımda sayılar kesin hükümler vermez; daha çok iç dünyaya bakmak için sakin bir ayna sunar.",
      "Bir numeroloji çalışmasında doğum tarihi, isim titreşimleri ve dönemsel döngüler birlikte değerlendirilir. Amaç kişinin kendini daha iyi tanımasına, tekrar eden davranış kalıplarını fark etmesine ve karar süreçlerine daha bilinçli yaklaşmasına destek olmaktır.",
      "Sağlıklı bir numeroloji yaklaşımı korku, kesin kader cümleleri veya garantili sonuçlar vadetmez. Gönül İlhan'ın çalışmalarında numeroloji, kişisel gelişim ve öz farkındalık alanını destekleyen zarif bir rehber olarak konumlanır."
    ]
  },
  {
    title: "Kişisel Yıl Döngüsü Ne Anlama Gelir?",
    slug: "kisisel-yil-dongusu-ne-anlama-gelir",
    excerpt:
      "Her yılın farklı bir teması olabilir. Kişisel yıl döngüsü, içinde bulunduğun döneme daha bilinçli bakmana yardımcı olur.",
    category: "Döngüler",
    date: "8 Mayıs 2026",
    readingTime: "5 dk",
    content: [
      "Kişisel yıl döngüsü, doğum günün ve içinde bulunulan yıl üzerinden hesaplanan sembolik bir temadır. Numerolojide bu tema, yıl boyunca daha görünür olabilecek öğrenme alanlarını ve destekleyici ritimleri anlamak için kullanılır.",
      "Örneğin bazı dönemler başlangıç, karar alma ve cesaretle ilişkilendirilirken; bazı dönemler sadeleşme, tamamlama veya ilişkileri gözden geçirme temalarını öne çıkarabilir. Bu bilgiler bir zorunluluk değil, farkındalık davetidir.",
      "Kişisel yıl danışmanlığında amaç, yılın enerjisini tek bir cümleye sıkıştırmak değil; kişinin gerçek yaşam koşullarıyla birlikte daha dengeli, uygulanabilir ve sakin bir planlama alanı açmaktır."
    ]
  },
  {
    title: "Numeroloji Eğitimine Kimler Katılabilir?",
    slug: "numeroloji-egitimine-kimler-katilabilir",
    excerpt:
      "Numeroloji eğitimi yalnızca danışman olmak isteyenler için değil, kendini tanıma yolculuğunu derinleştirmek isteyen herkes için uygun olabilir.",
    category: "Eğitim",
    date: "2 Mayıs 2026",
    readingTime: "3 dk",
    content: [
      "Numeroloji eğitimleri, sayıların sembolik dilini öğrenmek isteyen farklı seviyelerden katılımcılara açıktır. Bazı kişiler bu bilgiyi kendi hayatını anlamlandırmak için öğrenir; bazıları ise danışmanlık, koçluk veya kişisel gelişim çalışmalarına destekleyici bir araç eklemek ister.",
      "Başlangıç eğitimlerinde ön bilgi gerekmez. Temel kavramlar, sayı arketipleri ve doğum tarihi okumaları sade bir akışla ele alınır. İleri seviye programlarda ise yorumlama dili, harita sentezi ve etik sınırlar daha derin işlenir.",
      "En önemli kriter merak, dikkat ve insan hikayelerine saygılı yaklaşma isteğidir. Numeroloji, doğru aktarıldığında kişiye kesin cevaplar dayatmak yerine daha iyi sorular sormayı öğretir."
    ]
  },
  {
    title: "Sayıların Kişisel Farkındalıktaki Rolü",
    slug: "sayilarin-kisisel-farkindaliktaki-rolu",
    excerpt:
      "Sayılar, kişiliği dar kalıplara hapsetmek yerine davranışlarımızı ve seçimlerimizi gözlemlemek için sembolik ipuçları sunabilir.",
    category: "Kişisel Gelişim",
    date: "27 Nisan 2026",
    readingTime: "4 dk",
    content: [
      "Kişisel farkındalık, çoğu zaman kendimize dışarıdan bakabilme becerisiyle başlar. Numerolojide sayılar, bu bakışı kolaylaştıran sembolik başlıklar sunar: başlangıç, denge, ifade, düzen, özgürlük, sorumluluk, içgörü, güç ve tamamlama gibi.",
      "Bu başlıklar kişinin hayatındaki gerçek deneyimlerle birleştiğinde anlam kazanır. Bir sayı tek başına kişiyi tanımlamaz; ancak belirli davranış örüntülerini, ihtiyaçları ve gelişim alanlarını fark etmek için nazik bir dil sağlayabilir.",
      "Bu nedenle numeroloji çalışması, kişinin kendine daha şefkatli ve dürüst bakmasına yardımcı olduğunda değerlidir. Amaç kontrol etmek değil, anlamak ve daha bilinçli seçimler yapabilmektir."
    ]
  }
];

export const faqItems = [
  {
    question: "Numeroloji danışmanlığı nasıl ilerler?",
    answer:
      "Randevu talebinden sonra uygun gün ve saat netleştirilir. Seans öncesinde temel bilgiler alınır, görüşmede harita sakin ve anlaşılır bir dille değerlendirilir."
  },
  {
    question: "Danışmanlık online yapılabilir mi?",
    answer:
      "Evet. Bireysel seanslar ve eğitimlerin büyük bölümü online yapılabilir. Uygun programlarda yüz yüze seçenekler de duyurulur."
  },
  {
    question: "Numeroloji kesin gelecek tahmini yapar mı?",
    answer:
      "Hayır. Bu sitedeki numeroloji yaklaşımı kişisel farkındalık, sembolik anlamlandırma ve içgörü amaçlıdır; kesin sonuç veya garanti vadetmez."
  },
  {
    question: "Eğitimler kimler için uygun?",
    answer:
      "Kendini tanımak isteyenler, kişisel gelişim alanında çalışanlar, koçlar, danışmanlar ve numerolojiyi etik bir dille öğrenmek isteyen herkes için uygundur."
  },
  {
    question: "Seanslar terapi yerine geçer mi?",
    answer:
      "Hayır. Numeroloji çalışmaları tıbbi, psikolojik, hukuki veya finansal danışmanlık yerine geçmez. Gerekli durumlarda ilgili uzmanlardan destek alınmalıdır."
  }
];

export const processSteps = [
  {
    title: "Hizmeti seç",
    description:
      "Bireysel danışmanlık, eğitim veya atölye seçeneklerinden ihtiyacına uygun olanı belirle.",
    icon: MoonStar
  },
  {
    title: "Formu doldur",
    description:
      "Randevu sayfasından uygun tarih, saat ve görüşme tercihlerini güvenle ilet.",
    icon: MessagesSquare
  },
  {
    title: "Ön görüşme / onay",
    description:
      "Talebin değerlendirilir, uygunluk ve detaylar kısa bir iletişimle netleştirilir.",
    icon: HeartHandshake
  },
  {
    title: "Seans veya eğitim",
    description:
      "Sakin, yapılandırılmış ve kişisel sınırlarına saygılı bir çalışma alanı açılır.",
    icon: BookOpen
  }
];

export const audienceHighlights = [
  "Kendini daha derinden tanımak isteyenler",
  "Yaşam döngülerini anlamlandırmak isteyenler",
  "Numerolojiyi etik ve sade bir dille öğrenmek isteyenler",
  "Kişisel gelişim çalışmalarına yeni bir perspektif katmak isteyenler"
];

export const aboutTimeline = [
  {
    title: "Kişisel farkındalık odağı",
    description:
      "Gönül İlhan, numerolojiyi kişinin kendisiyle daha dürüst ve şefkatli bir ilişki kurmasına yardımcı olan sembolik bir dil olarak ele alır."
  },
  {
    title: "Eğitim ve danışmanlık dili",
    description:
      "Seans ve eğitimlerinde karmaşık kavramları sadeleştirir; katılımcının kendi içgörüsünü güçlendirmeyi merkeze alır."
  },
  {
    title: "Güvenli iletişim alanı",
    description:
      "Her çalışma, kesin yargılar yerine anlamaya, dinlemeye ve kişinin özgür iradesini desteklemeye odaklanır."
  }
];

export const legalDisclaimers = [
  "Numeroloji içerikleri kişisel farkındalık, ilham ve kişisel düşünme süreçlerini desteklemek amacıyla sunulur.",
  "Bu sitedeki bilgiler tıbbi, psikolojik, hukuki, finansal veya benzeri profesyonel danışmanlık yerine geçmez.",
  "Danışmanlık ve eğitim içerikleri kesin sonuç, garanti, kader belirleme veya gelecek tahmini iddiası taşımaz."
];

export const footerLinks = [
  { label: "Randevu Al", href: "/randevu" },
  { label: "Sık Sorulan Sorular", href: "/sss" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" }
];

export const spotlightCards = [
  {
    title: "Danışmanlık",
    text: "Kişisel haritanı ve dönemsel temalarını sakin bir görüşmede keşfet.",
    icon: Star
  },
  {
    title: "Eğitim",
    text: "Numerolojinin temel ve ileri uygulamalarını zarif, etik bir dille öğren.",
    icon: BookOpen
  },
  {
    title: "Atölye",
    text: "Grup enerjisiyle kendi haritan üzerinde uygulamalı farkındalık çalış.",
    icon: BriefcaseBusiness
  }
];
