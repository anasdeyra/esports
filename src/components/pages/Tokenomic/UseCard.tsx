import { IconType } from "react-icons";

export default function UseCard({ feature, description, Icon }: Use) {
  return (
    <div className="flex rounded-lg overflow-hidden">
      <span className="w-full max-w-[4px] bg-gradient-to-b from-emerald-700 to-primary" />
      <div className="flex w-full flex-col items-start bg-neutral-950 md:bg-neutral-900 bg-opacity-50 md:bg-opacity-50 backdrop-blur-3xl p-4 ">
        <div className="bg-gradient-to-bl from-emerald-700 to-primary p-2 rounded-md">
          <Icon size={24} />
        </div>
        <h3 className="mt-4 font-semibold text-lg">{feature}</h3>
        <p className="mt-2 text-neutral-200 font-medium">{description}</p>
      </div>
    </div>
  );
}

export interface Use {
  feature: string;
  description: string;
  Icon: IconType;
}
