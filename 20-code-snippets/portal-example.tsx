import { createPortal } from "react-dom";
export function Modal({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      {children}
    </div>,
    document.getElementById("portal-root")!,
  );
}
