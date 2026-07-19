import { useTiks } from "@rexa-developer/tiks/react";

export function useCopySound() {
  const { success } = useTiks();
  return success;
}
