interface StatusCardProps {
    icon: string;
    label: string;
    status: { text: string; icon: string };
  }
  
  const StatusCard = ({ icon, label, status }: StatusCardProps) => (
    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-medium">{label}</h3>
      </div>
      <p className="text-xl font-semibold">
        {status.icon} {status.text}
      </p>
    </div>
  );

  export default StatusCard;