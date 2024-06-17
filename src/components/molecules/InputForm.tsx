export default function InputForm({
  Icon,
  content,
}: {
  Icon: React.ComponentType;
  content: string;
}) {
  return (
    <div className="flex flex-row gap-3 rounded-lg border border-gray-500 p-3">
      <div>
        {/* <img src={iconSrc} alt="input icon" width={24} height={24} /> */}
        <Icon />
      </div>
      <span className="text-stone-600">{content}</span>
    </div>
  );
}
