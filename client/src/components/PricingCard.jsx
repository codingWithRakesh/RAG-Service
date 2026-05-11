
const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  isSelected = false,
  onClick,
  symbol = "₹",
  interval = "month",
  disabled = false,
  badge,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-IN").format(price);

  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300
      
      ${
        isSelected
          ? " backdrop-blur-xl border border-blue-400/30 scale-105 shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          : "border border-gray-700 bg-[#0f172a]"
      }

      ${!disabled && "cursor-pointer hover:scale-[1.02] hover:shadow-indigo-500/20"}
      `}
    >
      {badge && (
        <span className="absolute top-3 right-3 text-xs bg-indigo-500 px-2 py-1 rounded text-white">
          {badge}
        </span>
      )}

      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-3xl font-bold text-white">
            {symbol}
            {formattedPrice}
          </span>
          <span className="text-gray-400 text-sm">/ {interval}</span>
        </div>

        <p className="mt-2 text-gray-400 text-sm">{description}</p>

        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-300 text-sm"
            >
              <span className="text-indigo-400">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation();
          if (!disabled) onClick();
        }}
        className={`mt-6 w-full rounded-xl py-2 font-medium transition-all
      
        ${
          disabled
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : isSelected
              ? "bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] border border-white/20 backdrop-blur-md"
              : "bg-gray-800 hover:bg-gray-700 text-gray-300"
        }
        `}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
