export default function SkillCircle({ icon, label, proficiency }) {
  if (!icon || !label) return null;

  const isTextIcon = typeof icon === "string";

  return (
    <div
      className="
        group
        flex flex-col items-center gap-4
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* ENHANCEMENT #3: Glow pulse circle */}
      <div
        className="
          w-24 h-24 rounded-full
          border-4 border-indigo-400/60
          flex items-center justify-center
          glow-pulse

          transition-all duration-300
          group-hover:border-indigo-400
          group-hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]
        "
      >
        {isTextIcon ? (
          <span className="text-sm font-semibold tracking-wide text-white">
            {icon}
          </span>
        ) : (
          <div className="text-indigo-300 group-hover:text-indigo-400 transition">
            {icon}
          </div>
        )}
      </div>

      {/* Label */}
      <span
        className="
          text-sm opacity-80
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        {label}
      </span>

      {/* ENHANCEMENT #5: Proficiency bar */}
      {proficiency && (
        <div className="w-full max-w-[100px]">
          <div className="skill-bar-container">
            <div 
              className="skill-bar-fill" 
              style={{ "--progress-value": `${proficiency}%` }}
            />
          </div>
          <div className="text-xs text-indigo-300 mt-2 text-center opacity-75">
            {proficiency}%
          </div>
        </div>
      )}
    </div>
  );
}
