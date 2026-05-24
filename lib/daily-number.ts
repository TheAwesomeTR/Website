export type DailyNumberMeaning = {
  title: string;
  description: string;
  suggestion: string;
};

export const dailyNumberMeanings: Record<number, DailyNumberMeaning> = {
  1: {
    title: "Başlangıç ve Niyet",
    description:
      "Bugün yeni kararlar almak, niyet belirlemek ve ilk adımı atmak için destekleyici bir enerji taşıyor.",
    suggestion:
      "Bugün ertelediğin bir konuda küçük ama net bir başlangıç yap."
  },
  2: {
    title: "Denge ve Dinleme",
    description:
      "İlişkilerde yumuşaklık, sabır ve karşılıklı anlayış bugün daha görünür olabilir.",
    suggestion:
      "Bir konuşmada cevap vermeden önce gerçekten ne duyduğunu fark et."
  },
  3: {
    title: "İfade ve Yaratıcılık",
    description:
      "Duygularını, fikirlerini ve iç sesini daha akışkan ifade etmek için ilham verici bir gün.",
    suggestion:
      "Aklındaki bir fikri yazıya, sese ya da küçük bir yaratıcı üretime dönüştür."
  },
  4: {
    title: "Düzen ve Temel",
    description:
      "Bugün sadeleşmek, plan yapmak ve güven veren yapılar kurmak için destekleyici olabilir.",
    suggestion:
      "Dağınık kalan bir alanı, dosyayı veya gündem başlığını düzenle."
  },
  5: {
    title: "Esneklik ve Yenilik",
    description:
      "Rutin dışına çıkmak, farklı bir bakış açısı denemek ve değişime alan açmak öne çıkabilir.",
    suggestion:
      "Bugün küçük bir alışkanlığını değiştir ve sende ne uyandırdığını gözlemle."
  },
  6: {
    title: "Şefkat ve Sorumluluk",
    description:
      "Yakın ilişkiler, bakım verme ve kalpten gelen sorumluluklar bugün daha belirgin olabilir.",
    suggestion:
      "Hem kendine hem bir yakınına nazik bir destek cümlesi kur."
  },
  7: {
    title: "İçgörü ve Sessizlik",
    description:
      "Bugün derinleşmek, düşünmek ve iç sesini daha net duymak için sakin bir alan açabilir.",
    suggestion:
      "Kısa bir sessizlik anı yarat ve zihninden geçenleri yargılamadan not al."
  },
  8: {
    title: "Güç ve Sorumlu Eylem",
    description:
      "Kaynaklarını, hedeflerini ve somut adımlarını daha bilinçli değerlendirmek için uygun bir tema taşıyabilir.",
    suggestion:
      "Bir hedefin için bugün ölçülebilir ve gerçekçi tek bir adım belirle."
  },
  9: {
    title: "Tamamlama ve Bırakış",
    description:
      "Bir döngüyü kapatmak, affetmek veya artık hizmet etmeyen bir yükü bırakmak bugün anlam kazanabilir.",
    suggestion:
      "Bugün tamamlamak istediğin küçük bir işi bitir ve kendine alan aç."
  }
};

export type DailyNumberResult = {
  dateLabel: string;
  day: string;
  month: string;
  year: string;
  digitSum: number;
  number: number;
  meaning: DailyNumberMeaning;
};

function reduceToSingleDigit(value: number): number {
  let next = value;

  while (next > 9) {
    next = String(next)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);
  }

  return Math.max(next, 1);
}

export function getIstanbulDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const parts = formatter.formatToParts(date);
  const day = parts.find((part) => part.type === "day")?.value ?? "01";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const year = parts.find((part) => part.type === "year")?.value ?? "2026";

  return { day, month, year };
}

export function calculateDailyNumber(date = new Date()): DailyNumberResult {
  const { day, month, year } = getIstanbulDateParts(date);
  const digits = `${day}${month}${year}`.replace(/\D/g, "").split("");
  const digitSum = digits.reduce((total, digit) => total + Number(digit), 0);
  const number = reduceToSingleDigit(digitSum);

  return {
    dateLabel: `${day}.${month}.${year}`,
    day,
    month,
    year,
    digitSum,
    number,
    meaning: dailyNumberMeanings[number]
  };
}
