"use client";

import React from "react";
import { motion } from "framer-motion";

type MotionButtonProps = React.ComponentProps<typeof motion.button>;

type ButtonProps = MotionButtonProps & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";

  const variants: Record<typeof variant, string> = {
    primary:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 text-white shadow-lg shadow-purple-800/40",
    secondary:
      "border border-sky-500/70 bg-slate-900/80 text-sky-100 hover:bg-slate-800/80",
    ghost:
      "border border-slate-700/70 bg-slate-900/60 text-slate-200 hover:border-slate-400"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

