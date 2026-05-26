"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  submitAppointmentRequest,
  type AppointmentPayload
} from "@/lib/booking";
import { services, trainings } from "@/data/site";
import { cn } from "@/lib/utils";

const timeSlots = ["09.00", "10.30", "12.00", "14.00", "15.30", "17.00"];

export function AppointmentForm() {
  const serviceOptions = useMemo(
    () => [
      ...services.map((service) => service.title),
      ...trainings.map((training) => training.title),
      "Ön görüşme / Kararsızım"
    ],
    []
  );

  const [payload, setPayload] = useState<AppointmentPayload>({
    service: serviceOptions[0],
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: timeSlots[1],
    meetingPreference: "Online",
    message: "",
    consent: false,
    website: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [error, setError] = useState("");

  function updateField<T extends keyof AppointmentPayload>(
    field: T,
    value: AppointmentPayload[T]
  ) {
    setPayload((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!payload.consent) return;

    setStatus("loading");
    setError("");

    try {
      await submitAppointmentRequest(payload);
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Randevu talebi gonderilemedi."
      );
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-gold/35 bg-card p-5 shadow-soft sm:p-8">
        <CheckCircle2 className="h-12 w-12 text-gold" aria-hidden="true" />
        <h2 className="mt-5 font-editorial text-2xl text-navy sm:text-3xl">
          Randevu talebin alındı.
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Gönül İlhan ekibi en kısa sürede uygunluk ve görüşme detayları için
          seninle iletişime geçecek.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Yeni Talep Oluştur
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-border/80 bg-card/86 p-4 shadow-soft min-[390px]:p-5 sm:p-8"
    >
      <div className="mb-7 flex items-start gap-3 sm:mb-8 sm:gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-sheen text-gold">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="font-editorial text-2xl text-navy sm:text-3xl">Randevu Talep Formu</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Talebin ulaştığında uygunluk, ödeme ve görüşme detayları ayrıca
            onaylanır.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          value={payload.website ?? ""}
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="service">Hizmet / Eğitim seçimi</Label>
          <select
            id="service"
            value={payload.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="h-11 w-full min-w-0 rounded-2xl border border-input bg-card/78 px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <Field label="Ad Soyad" id="name">
          <Input
            id="name"
            value={payload.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            placeholder="Adınız ve soyadınız"
          />
        </Field>

        <Field label="E-posta" id="email">
          <Input
            id="email"
            type="email"
            value={payload.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
            placeholder="ornek@mail.com"
          />
        </Field>

        <Field label="Telefon" id="phone">
          <Input
            id="phone"
            type="tel"
            value={payload.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            required
            placeholder="+90 5XX XXX XX XX"
          />
        </Field>

        <Field label="Tercih edilen tarih" id="preferredDate">
          <Input
            id="preferredDate"
            type="date"
            value={payload.preferredDate}
            onChange={(event) => updateField("preferredDate", event.target.value)}
            required
            min={minDate}
          />
        </Field>

        <Field label="Tercih edilen saat" id="preferredTime">
          <select
            id="preferredTime"
            value={payload.preferredTime}
            onChange={(event) => updateField("preferredTime", event.target.value)}
            className="h-11 w-full min-w-0 rounded-2xl border border-input bg-card/78 px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </Field>

        <Field label="Görüşme tercihi" id="meetingPreference">
          <select
            id="meetingPreference"
            value={payload.meetingPreference}
            onChange={(event) =>
              updateField("meetingPreference", event.target.value)
            }
            className="h-11 w-full min-w-0 rounded-2xl border border-input bg-card/78 px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option>Online</option>
            <option>Yüz yüze</option>
            <option>Uygunluğa göre</option>
          </select>
        </Field>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Mesajın</Label>
          <Textarea
            id="message"
            value={payload.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Kısaca ihtiyacını, beklentini veya sormak istediğin konuyu paylaşabilirsin."
          />
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border/80 bg-ivory/70 p-3 sm:p-4">
        <Checkbox
          id="consent"
          checked={payload.consent}
          onCheckedChange={(checked) => updateField("consent", checked === true)}
        />
        <Label
          htmlFor="consent"
          className="cursor-pointer text-sm leading-6 text-muted-foreground"
        >
          Bilgilerimin randevu talebimi değerlendirmek ve benimle iletişime
          geçmek amacıyla işlenmesini kabul ediyorum.
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        className={cn("mt-6 w-full", !payload.consent && "opacity-70")}
        disabled={status === "loading" || !payload.consent}
      >
        {status === "loading" ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
      </Button>
      {error ? (
        <p className="mt-3 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  id,
  children
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
