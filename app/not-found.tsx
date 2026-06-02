import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-px flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-brown-500">
        404
      </p>
      <h1 className="mt-4 text-display-sm font-bold tracking-editorial text-blue-900">
        This page moved on.
      </h1>
      <p className="mt-4 max-w-md text-ink/60">
        The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back
        to something solid.
      </p>
      <div className="mt-8 flex gap-4">
        <ButtonLink href="/" withArrow>
          Back home
        </ButtonLink>
        <ButtonLink href="/properties" variant="outline">
          Browse properties
        </ButtonLink>
      </div>
    </div>
  );
}
