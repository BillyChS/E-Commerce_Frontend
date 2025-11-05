import type { ReactNode } from "react";


type Props = { children: ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <div>{children}</div>
      </div>
    </div>
  );
}
