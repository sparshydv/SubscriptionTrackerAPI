import { useState } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="w-full bg-[#0A0A0A] text-white px-4 py-2.5 flex items-center justify-center relative">
            {/* Subtle shimmer line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Content */}
            <button
              onClick={() => navigate("/sign-up")}
              className="flex items-center gap-2 group"
            >
              <Sparkles size={14} className="text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/80">
                Stop losing money to forgotten subscriptions.
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Start Tracking Free
                <ArrowRight size={14} className="shrink-0" />
              </span>
            </button>

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1"
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
