import { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export default function Section({ title, subtitle, actions, children }: Props) {
  return (
    <section className="w-full">
      <div className="container-6xl py-10">
        {(title || actions || subtitle) && (
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              {title && <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>}
              {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}
            </div>
            {actions}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
