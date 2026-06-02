import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-xl border border-blue-900/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors duration-200 focus:border-blue-500 focus:outline-none";

export function Label({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "mb-1.5 block text-xs font-medium uppercase tracking-wider text-brown-700",
        className,
      )}
    >
      {children}
    </label>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={cn(fieldBase, "resize-none", className)} {...props} />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(fieldBase, "appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-900/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
      {children}
    </p>
  );
}
