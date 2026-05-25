"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactMessage, type ContactPayload } from "@/lib/contact";

export function ContactForm() {
  const [payload, setPayload] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    topic: "Genel bilgi",
    message: "",
    consent: false
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  function updateField<T extends keyof ContactPayload>(
    field: T,
    value: ContactPayload[T]
  ) {
    setPayload((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!payload.consent) return;

    setStatus("loading");
    setError("");

    try {
      await submitContactMessage(payload);
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Mesaj gonderilemedi."
      );
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-gold/35 bg-card p-5 shadow-soft sm:p-8">
        <CheckCircle2 className="h-12 w-12 text-gold" aria-hidden="true" />
        <h2 className="mt-5 font-editorial text-2xl text-navy sm:text-3xl">Mesajın alındı.</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Teşekkürler. Gönül İlhan ekibi en kısa sürede seninle iletişime
          geçecek.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Yeni Mesaj Yaz
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
          <Send className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="font-editorial text-2xl text-navy sm:text-3xl">İletişim Formu</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Randevu, eğitim veya atölye soruların için kısa bir mesaj
            bırakabilirsin.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Ad Soyad" id="contactName">
          <Input
            id="contactName"
            value={payload.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            placeholder="Adınız ve soyadınız"
          />
        </Field>
        <Field label="E-posta" id="contactEmail">
          <Input
            id="contactEmail"
            type="email"
            value={payload.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
            placeholder="ornek@mail.com"
          />
        </Field>
        <Field label="Telefon" id="contactPhone">
          <Input
            id="contactPhone"
            type="tel"
            value={payload.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+90 5XX XXX XX XX"
          />
        </Field>
        <Field label="Konu" id="contactTopic">
          <select
            id="contactTopic"
            value={payload.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            className="h-11 w-full min-w-0 rounded-2xl border border-input bg-card/78 px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option>Genel bilgi</option>
            <option>Randevu</option>
            <option>Eğitim</option>
            <option>Atölye / seminer</option>
            <option>Kurumsal çalışma</option>
          </select>
        </Field>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="contactMessage">Mesaj</Label>
          <Textarea
            id="contactMessage"
            value={payload.message}
            onChange={(event) => updateField("message", event.target.value)}
            required
            placeholder="Mesajınızı buraya yazabilirsiniz."
          />
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border/80 bg-ivory/70 p-3 sm:p-4">
        <Checkbox
          id="contactConsent"
          checked={payload.consent}
          onCheckedChange={(checked) => updateField("consent", checked === true)}
        />
        <Label
          htmlFor="contactConsent"
          className="cursor-pointer text-sm leading-6 text-muted-foreground"
        >
          Bilgilerimin iletişim talebimi yanıtlamak amacıyla işlenmesini kabul
          ediyorum.
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "loading" || !payload.consent}
      >
        {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
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
