import { useLocale } from "@lib/hooks/useLocale";

import Shell from "@components/Shell";

export default function Settings() {
  const { t } = useLocale();

  return (
    <Shell heading={t("reports")} subtitle={t("reports_subtitle")}>
      Hi
    </Shell>
  );
}
