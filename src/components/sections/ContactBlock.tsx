import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { getSiteConfig } from "@/content";

export function ContactBlock() {
  const siteConfig = getSiteConfig();

  return (
    <div className="rounded-lg space-y-8 border border-[#1C1917]/12 bg-[#F3EFE6] p-7 sm:p-10">
      <div className="space-y-2.5 border-b border-[#1C1917]/10 pb-6">
        <h2 className="font-serif text-2xl text-[#1C1917] sm:text-3xl">
          Direct Hospitality Contact
        </h2>
        <p className="text-sm leading-relaxed text-[#57534E]">
          Speak directly with Tayrona Catering regarding Graze Box orders, custom event menus, or Food Truck availability.
        </p>
      </div>

      <dl className="space-y-6 text-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-md flex h-10 w-10 shrink-0 items-center justify-center border border-[#1C1917]/15 bg-[#FAF7F2] text-[#5E1914]">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-[#57534E] uppercase">
              Telephone
            </dt>
            <dd className="mt-1">
              <a
                href={siteConfig.contact.phoneHref}
                className="font-serif text-xl text-[#1C1917] transition-colors hover:text-[#5E1914]"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-md flex h-10 w-10 shrink-0 items-center justify-center border border-[#1C1917]/15 bg-[#FAF7F2] text-[#5E1914]">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-[#57534E] uppercase">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={siteConfig.contact.emailHref}
                className="break-all font-medium text-[#1C1917] underline-offset-4 hover:text-[#5E1914] hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-md flex h-10 w-10 shrink-0 items-center justify-center border border-[#1C1917]/15 bg-[#FAF7F2] text-[#5E1914]">
            <Instagram className="h-4 w-4" />
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-[#57534E] uppercase">
              Instagram
            </dt>
            <dd className="mt-1">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1C1917] underline-offset-4 hover:text-[#5E1914] hover:underline"
              >
                {siteConfig.contact.instagramHandle}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-md flex h-10 w-10 shrink-0 items-center justify-center border border-[#1C1917]/15 bg-[#FAF7F2] text-[#5E1914]">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-[#57534E] uppercase">
              Service Coverage
            </dt>
            <dd className="mt-1 font-medium text-[#1C1917]">
              {siteConfig.legalArea}
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
