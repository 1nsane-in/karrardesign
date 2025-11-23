export const ProjectInfo = ({ label, value }) => (
  <div>
    <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
      {label}
    </p>
    <p className="text-sm font-semibold">{value}</p>
  </div>
);
