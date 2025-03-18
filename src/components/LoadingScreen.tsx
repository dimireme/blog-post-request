type LoadingScreenProps = {
  title: string;
  message: string;
  error?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function LoadingScreen({ title, message, error, action }: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className={`text-2xl font-bold mb-4 ${error ? 'text-red-600' : ''}`}>
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="btn btn-primary"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  )
} 