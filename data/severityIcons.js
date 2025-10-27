import Image from "next/image";
export const severityIcons = {
  Critical: (
    <Image
      src="/fallIncident.svg"
      alt="Critical"
      className="w-10 h-10"
      width={48}
      height={48}
    />
  ),
  Warning: (
    <Image
      src="/safety.svg"
      alt="Critical"
      className="w-10 h-10"
      width={48}
      height={48}
    />
  ),
  Info: (
    <Image
      src="/ppeViolation.svg"
      alt="Critical"
      className="w-10 h-10"
      width={48}
      height={48}
    />
  ),
  Breach: (
    <Image
      src="/breach.svg"
      alt="Critical"
      className="w-10 h-10"
      width={48}
      height={48}
    />
  ),
};
